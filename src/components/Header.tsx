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
      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
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
    { id: 'gallery', label: 'Галерея' },
    { id: 'transport', label: 'Транспорт' },
    { id: 'location', label: 'Расположение' },
    { id: 'contact', label: 'Контакты' },
  ];

  return (
    <>
      <style jsx global>{`
        #hero {
          scroll-margin-top: 80px;
          padding-top: 80px;
        }
        #gallery, #transport, #location, #contact {
          scroll-margin-top: 80px;
        }
      `}</style>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Логотип */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0 min-w-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm sm:text-lg">AH</span>
              </div>
              <div className="min-w-0">
                <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-gray-800 truncate">
                  Абхазия Отели
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block truncate">
                  Райский отдых у моря
                </p>
              </div>
            </motion.div>

            {/* Навигация для десктопа */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200 relative group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Правая часть */}
            <div className="flex items-center space-x-4">
              {/* Контакты (десктоп) */}
              <div className="hidden xl:flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Phone size={16} />
                  <span className="text-sm font-medium whitespace-nowrap">+7 (840) 123-456</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center space-x-1 text-gray-600">
                  <MapPin size={14} />
                  <span className="text-sm whitespace-nowrap">Сухум, Абхазия</span>
                </div>
              </div>

              {/* Кнопка мобильного меню */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                aria-label="Меню"
              >
                {isMenuOpen ? (
                  <X size={20} className="text-gray-800" />
                ) : (
                  <Menu size={20} className="text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-gray-700 hover:text-blue-500 font-medium py-2 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2 text-gray-700 mb-2">
                      <Phone size={16} />
                      <span>+7 (840) 123-456</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin size={16} />
                      <span>Сухум, Абхазия</span>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;
