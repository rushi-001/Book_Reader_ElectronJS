import { MainLayout } from "@/components"
import { ThemeProvider } from "@/context"
import { HashRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={
              <div>
                Home
              </div>} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
