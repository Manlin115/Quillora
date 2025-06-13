import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Toaster
          position="top-center"
          toastOptions={{
            className: 'toast glass-card',
            duration: 4000,
            style: {
              background: 'var(--glass-bg)',
              color: 'var(--text-primary)',
              border: 'var(--glass-border)'
            }
          }}
        />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
