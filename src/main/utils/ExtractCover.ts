import EPub from 'epub';
import { promises as fs } from 'fs';
import { join } from 'path';
import { PDFDocument } from "pdf-lib";
import { GlobalWorkerOptions } from "pdfjs-dist";

interface EPubWithCover extends EPub {
  cover?: string
}

GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry");

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
export const ExtractEpubCover = (epubPath: string, outputPath: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const book = new EPub(epubPath) as EPubWithCover

    book.on('error', (err) => {
      console.error('Failed to open EPUB:', err)
      reject(err)
    })

    book.on('end', () => {
      const cover = book.cover
      if (!cover) {
        const err = new Error('No cover found in EPUB')
        console.error(err)
        reject(err)
        return
      }

      book.getImage(cover, (error, data) => {
        if (error) {
          console.error('Failed to get cover image:', error)
          reject(error)
          return
        }

        fs.writeFile(outputPath, data)
          .then(() => resolve())
          .catch((writeErr) => {
            console.error('Failed to write cover image:', writeErr)
            reject(writeErr)
          })
      })
    })

    book.parse()
  })
}

// Main function to handle cover extraction for all supported formats
export const ProcessBookCover = async (app, filePath: string): Promise<string> => {
  const fileName = (filePath.split(/[\\/]/).pop() || 'unknown').trim()
  const fileExt = fileName.split('.').pop()?.toLowerCase()
  const bookId = crypto.randomUUID()
  const date = Date.now()
  const coverFileName = `${bookId}-${date}.png`
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