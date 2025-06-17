import React from 'react';
import { MapPin, Car, Plane, Train, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Location = () => {
  const transportOptions = [
    {
      icon: Plane,
      title: 'Самолётом',
      description: 'Аэропорт Сухума - 15 минут на такси',
      time: '15 мин',
      color: 'bg-blue-500'
    },
    {
      icon: Car,
      title: 'На автомобиле',
      description: 'Парковка бесплатная для гостей',
      time: 'В центре',
      color: 'bg-green-500'
    },
    {
      icon: Train,
      title: 'Поездом',
      description: 'Ж/д вокзал Сухума - 20 минут пешком',
      time: '20 мин',
      color: 'bg-purple-500'
    }
  ];

  const nearbyAttractions = [
    { name: 'Набережная Сухума', distance: '5 мин пешком' },
    { name: 'Ботанический сад', distance: '10 мин на авто' },
    { name: 'Крепость Сухум-Кале', distance: '15 мин пешком' },
    { name: 'Пляж Синоп', distance: '3 мин пешком' },
    { name: 'Драмтеатр им. Самсона Чанба', distance: '12 мин пешком' },
    { name: 'Центральный рынок', distance: '8 мин пешком' }
  ];

  return (
    <section id="location" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Расположение</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Идеальное местоположение в самом сердце Сухума
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg h-96 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11904.41331978369!2d40.994739299999995!3d42.8746212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405a5ed6b8c2f7b1%3A0x8b5c6e6fede79c7e!2z0KHRg9GF0YPQvCwg0JDQsdGF0LDQt9C40Y8!5e0!3m2!1sru!2sru!4v1635789012345"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Карта расположения отеля"
              ></iframe>
            </div>

            {/* Address */}
            <div className="p-6 bg-primary-50 dark:bg-gray-700 rounded-xl">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-primary-500 dark:text-primary-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Наш адрес</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    ул. Агумаа, 12<br />
                    г. Сухум, Абхазия<br />
                    384900
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Transport Options */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Как добраться</h3>
              <div className="space-y-4">
                {transportOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className={`w-12 h-12 ${option.color} rounded-lg flex items-center justify-center`}>
                      <option.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-white">{option.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{option.description}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-primary-500 dark:text-primary-400">
                      <Clock size={16} />
                      <span className="text-sm font-medium">{option.time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Nearby Attractions */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Рядом с отелем</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {nearbyAttractions.map((attraction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:shadow-md dark:hover:shadow-lg transition-shadow"
                  >
                    <span className="text-gray-800 dark:text-white font-medium text-sm">{attraction.name}</span>
                    <span className="text-primary-500 dark:text-primary-400 text-xs font-medium">{attraction.distance}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;