import React, { useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Hero from './components/Hero';
import HorizontalNav from './components/HorizontalNav';
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Blog from './components/Blog_old'
import Contact from './components/Contact'
import BlogPage from './pages/BlogPage'
import BlogArticle from './pages/BlogArticle'

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};

// Home page component with all sections
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Hero />
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <HorizontalNav />
    </div>
  )
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:articleId" element={<BlogArticle />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
