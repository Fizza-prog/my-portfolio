import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import LmsCaseStudyPage from './pages/LmsCaseStudyPage'
import NotFoundPage from './pages/NotFoundPage'
import WorkPage from './pages/WorkPage'
import './App.css'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="work">
            <Route index element={<WorkPage />} />
            <Route path="lms" element={<LmsCaseStudyPage />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
