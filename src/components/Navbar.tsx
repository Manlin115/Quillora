import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog } from '@headlessui/react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="navbar-container container">
        <Link to="/" className="navbar-logo-link">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
          >
            <span className="navbar-logo">Quillora</span>
          </motion.div>
        </Link>

        <button
          type="button"
          className="navbar-button navbar-button-mobile"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="icon" aria-hidden="true" />
        </button>

        <div className="navbar-links">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/" className="navbar-link">Features</Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/pricing" className="navbar-link">Pricing</Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button className="btn btn-secondary">Sign In</button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="btn btn-primary">Try It Free</button>
          </motion.div>
        </div>
      </nav>

      <Dialog
        as="div"
        className="navbar-menu-container"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="navbar-menu-overlay"
        />
        
        <Dialog.Panel className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="navbar-menu-header">
            <Link to="/" className="navbar-logo-link" onClick={() => setMobileMenuOpen(false)}>
              <span className="navbar-logo">Quillora</span>
            </Link>
            
            <button
              type="button"
              className="navbar-button"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="icon" aria-hidden="true" />
            </button>
          </div>
          
          <div className="navbar-menu-content">
            <div className="navbar-menu-links">
              <Link
                to="/"
                className="navbar-menu-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/pricing"
                className="navbar-menu-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </div>
            
            <div className="navbar-buttons">
              <button
                className="btn btn-secondary btn-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </button>
              <button
                className="btn btn-primary btn-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try It Free
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;