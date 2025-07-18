import { MainLayout } from "@/components"
import { ThemeProvider } from "@/context"
import { DashboardPage } from "@/pages"
import { HashRouter, Route, Routes } from "react-router-dom"

// Name Suggestion: MyBookRepo

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<DashboardPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
