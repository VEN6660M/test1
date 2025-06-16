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
    setIsMenuOpen(false); // Сначала закрываем меню
    
    setTimeout(() => { // Добавляем небольшую задержку
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Задержка должна совпадать с длительностью анимации закрытия меню
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
        {/* Остальной код хедера без изменений */}
        {/* ... */}

        {/* Mobile Menu */}
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
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="text-left text-gray-700 hover:text-primary-500 font-medium py-2 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
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
