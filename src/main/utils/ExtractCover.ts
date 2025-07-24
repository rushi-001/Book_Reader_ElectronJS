import * as epub from 'epubjs'
import { promises as fs } from 'fs'
import { join } from 'path'
import { PDFDocument } from 'pdf-lib'

// Function to generate a unique ID for each book
export const GenerateBookId = (filePath: string): string => {
  return Buffer.from(filePath).toString('base64').slice(0, 16)
}

// Function to extract and save PDF cover
export const ExtractPdfCover = async (pdfPath: string, outputPath: string): Promise<void> => {
  try {
    const pdfBytes = await fs.readFile(pdfPath)
    const pdfDoc = await PDFDocument.load(pdfBytes)
    const newPdf = await PDFDocument.create()
    const [firstPage] = await newPdf.copyPages(pdfDoc, [0])
    newPdf.addPage(firstPage)
    const extractedBytes = await newPdf.save()
    await fs.writeFile(outputPath, extractedBytes)
  } catch (error) {
    console.error('Failed to extract PDF cover:', error)
    throw error
  }
}

// Function to extract and save EPUB cover
export const ExtractEpubCover = async (epubPath: string, outputPath: string): Promise<void> => {
  return new Promise(async (resolve, reject) => {
    try {
      const book = epub(epubPath)

      // Try to get the defined cover first
      const coverUrl = await book.coverUrl()

      if (coverUrl) {
        const coverImage = await book.get(coverUrl)
        await fs.writeFile(outputPath, coverImage)
        resolve()
      } else {
        // Fallback: Render first page as image
        const rendition = await book.renderTo('epub-render-container', {
          width: 600,
          height: 800
        })

        await rendition.display()

        // Wait a moment for rendering to complete
        setTimeout(async () => {
          try {
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            const viewport = rendition.manager.container.getBoundingClientRect()

            canvas.width = viewport.width
            canvas.height = viewport.height

            // This part would need to be adapted for Electron main process
            // You might need to use a BrowserWindow to render the EPUB
            // and capture its contents
            console.warn('EPUB cover extraction in main process requires more complex setup')
            reject(new Error('EPUB cover extraction requires renderer process implementation'))
          } finally {
            book.destroy()
          }
        }, 1000)
      }
    } catch (error) {
      console.error('Failed to extract EPUB cover:', error)
    }
  })
}

// Main function to handle cover extraction for all supported formats
export const ProcessBookCover = async (filePath: string): Promise<string> => {
  const fileName = filePath.split(/[\\/]/).pop() || 'unknown'
  const fileExt = fileName.split('.').pop()?.toLowerCase()
  const bookId = GenerateBookId(filePath)
  const coverFileName = `${bookId}-${fileName}.${fileExt === 'pdf' ? 'pdf' : 'png'}`
  const coverPath = join(app.getPath('userData'), 'covers', coverFileName)

  try {
    if (fileExt === 'pdf') {
      await ExtractPdfCover(filePath, coverPath)
    } else if (fileExt === 'epub') {
      await ExtractEpubCover(filePath, coverPath)
    } else {
      throw new Error('Unsupported file format')
    }
    return coverPath
  } catch (error) {
    console.error(`Failed to process cover for ${filePath}:`, error)
    throw error
  }
}
