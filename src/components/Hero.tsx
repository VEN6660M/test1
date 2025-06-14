import React from 'react';
import { Star, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToRooms = () => {
    const element = document.getElementById('rooms');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const stats = [
    { icon: Star, value: '4.9', label: 'Рейтинг' },
    { icon: Award, value: '15+', label: 'Лет опыта' },
    { icon: Users, value: '5000+', label: 'Довольных гостей' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-warm-50 to-primary-100">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary-200 rounded-full opacity-30"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-warm-200 rounded-full opacity-20"
        ></motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-40 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-primary-300 rounded-full opacity-25"
        ></motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg"
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 fill-primary-500" />
            <span className="text-gray-700 font-medium text-sm sm:text-base">Лучший отдых в Абхазии</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="text-gray-800">Отели</span>{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
              Абхазии
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Откройте для себя райский уголок на берегу Черного моря. 
            Комфортабельные номера, потрясающие виды и незабываемый отдых ждут вас.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 sm:mb-16 px-4"
          >
            <button
              onClick={scrollToRooms}
              className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Выбрать номер
            </button>
            <a
              href="https://wa.me/7840123456"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border border-gray-200 text-center"
            >
              Связаться в WhatsApp
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto px-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;