import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import PortfolioShowcase from './components/PortfolioShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen overflow-x-clip font-sans antialiased text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navigation />
          
          <main>
            <AnimatePresence mode="wait">
              <Home />
              <About />
              <Skills />
              <Experience />
              <Education />
              <PortfolioShowcase />
              <Contact />
            </AnimatePresence>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
