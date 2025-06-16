import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Главная', href: '#hero' },
    { name: 'Галерея', href: '#gallery' },
    { name: 'Экскурсии', href: '#excursions' },
    { name: 'Контакты', href: '#contact' },
  ];

  const services = [
    'Бронирование номеров',
    'Трансфер из аэропорта',
    'Экскурсионные туры',
    'Прокат автомобилей',
    'Ресторан и бар',
    'Конференц-зал'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Абхазия Отели</h3>
                <p className="text-gray-400 text-sm">Райский отдых у моря</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Мы предоставляем лучший сервис для незабываемого отдыха в самом сердце Абхазии. 
              Комфорт, красота природы и гостеприимство ждут вас.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://wa.me/7840123456"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Быстрые ссылки</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Наши услуги</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  ул. Агумаа, 12<br />
                  г. Сухум, Абхазия<br />
                  384900
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-400">+7 (840) 123-456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@abkhazia-hotels.ru" className="text-gray-400 hover:text-white transition-colors">
                  info@abkhazia-hotels.ru
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  Пн-Пт: 9:00 - 22:00<br />
                  Сб-Вс: 10:00 - 21:00
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Абхазия Отели. Все права защищены.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">
                Политика конфиденциальности
              </button>
              <button className="hover:text-white transition-colors">
                Условия использования
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;