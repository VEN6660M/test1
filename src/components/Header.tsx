import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Учитываем высоту хедера
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'hero', label: 'Главная' },
    { id: 'rooms', label: 'Номера' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'location', label: 'Расположение' },
    { id: 'contact', label: 'Контакты' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">AH</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-gray-800">Абхазия Отели</h1>
              <p className="text-xs text-gray-600">Райский отдых у моря</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold text-gray-800">Абхазия Отели</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+7840123456"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-500 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm font-medium">+7 (840) 123-456</span>
            </a>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-1 text-gray-600">
              <MapPin size={14} />
              <span className="text-sm">Сухум, Абхазия</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-50 relative"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50"
            >
              <div className="p-6 pt-20">
                <nav className="flex flex-col space-y-6">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-700 hover:text-primary-500 font-medium py-3 text-lg transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="pt-6 border-t border-gray-200 space-y-4">
                    <a
                      href="tel:+7840123456"
                      className="flex items-center space-x-3 text-gray-700 hover:text-primary-500 transition-colors"
                    >
                      <Phone size={20} />
                      <span className="font-medium">+7 (840) 123-456</span>
                    </a>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <MapPin size={20} />
                      <span>Сухум, Абхазия</span>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;