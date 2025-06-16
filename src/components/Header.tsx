import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        {/* Top contact bar - скрыт на мобильных */}
        <div className={`hidden md:block bg-blue-900 text-white text-sm py-2 transition-all duration-300 ${
          isScrolled ? 'h-0 overflow-hidden opacity-0' : 'h-auto opacity-100'
        }`}>
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+7 (123) 456-78-90</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
            <div className="text-xs">
              Работаем 24/7
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-blue-900' : 'text-white'
                }`}
              >
                HotelBooking
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('rooms')}
                className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Номера
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('excursions')}
                className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Экскурсии
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Расположение
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Контакты
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300"
              >
                Забронировать
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
                }`}
                aria-label="Открыть меню"
              >
                {isMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[9998] transition-opacity duration-300 md:hidden ${
          isMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        />
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span className="text-xl font-bold text-blue-900">Меню</span>
            <button
              onClick={closeMenu}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md"
              aria-label="Закрыть меню"
            >
              <X size={20} />
            </button>
          </div>

          {/* Contact Info */}
          <div className="p-4 bg-blue-50 border-b border-gray-200">
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-blue-900">
                <Phone size={16} />
                <span className="font-medium">+7 (123) 456-78-90</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-700">
                <MapPin size={16} />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
              <div className="text-blue-600 font-medium">
                Работаем 24/7
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 py-4">
            <div className="space-y-1">
              <button
                onClick={() => scrollToSection('rooms')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Номера
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('excursions')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Экскурсии
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Расположение
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Контакты
              </button>
            </div>

            {/* Mobile CTA Button */}
            <div className="px-4 mt-6">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 shadow-lg"
              >
                Забронировать номер
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Prevent body scroll when menu is open */}
      {isMenuOpen && (
        <style jsx>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}
    </>
  );
};

export default Header;
