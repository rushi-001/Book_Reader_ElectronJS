import { MainLayout } from "@/components"
import { AboutPage, CollectionShowcase, DashboardPage, HelpPage, ProfilePage } from "@/pages"
import { HashRouter, Route, Routes } from "react-router-dom"

// Name Suggestion: MyBookRepo

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* ---Dashboard Page Routes---- */}
          <Route index element={<DashboardPage />} />
          {/* ---+--- */}

          {/* ---Setting Button Routes---- */}
          <Route path="/settings/profile" element={<ProfilePage />} />
          <Route path="/settings/help" element={<HelpPage />} />
          <Route path="/settings/about" element={<AboutPage />} />
          {/* ---+--- */}

          {/* ---Collection Page Routes--- */}
          <Route path="/collection/showcase" element={<CollectionShowcase />} />
          {/* ---+--- */}

          {/* ---Back To Book Page Routes--- */}
          {/* Add your book pages routes here */}
          {/* ---+--- */}

          {/* ---Favorite Page Routes--- */}
          {/* Add your favorite pages routes here */}
          {/* ---+--- */}

          {/* ---Bookmark Page Routes--- */}
          {/* Add your bookmark pages routes here */}
          {/* ---+--- */}
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
