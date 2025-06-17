import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Transport from './components/Transport';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';

function App() {
  useEffect(() => {
    // Smooth scrolling для браузеров, которые не поддерживают CSS scroll-behavior
    if (!CSS.supports('scroll-behavior', 'smooth')) {
      const smoothScrollPolyfill = document.createElement('script');
      smoothScrollPolyfill.src = 'https://polyfill.io/v3/polyfill.min.js?features=smoothscroll';
      document.head.appendChild(smoothScrollPolyfill);
    }

    // Предзагрузка изображений для лучшей производительности
    const imageUrls = [
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=600'
    ];

    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Transport />
        <Location />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ThemeToggle />
    </div>
  );
}

export default App;