import React from 'react';
import { MapPin, Clock, Users, Camera, Mountain, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

const Excursions = () => {
  const excursions = [
    {
      id: 1,
      name: 'Озеро Рица',
      description: 'Посетите знаменитое горное озеро с кристально чистой водой',
      duration: '8 часов',
      groupSize: 'до 8 человек',
      price: '2500₽',
      highlights: ['Озеро Рица', 'Водопад Девичьи слёзы', 'Дача Сталина']
    },
    {
      id: 2,
      name: 'Новый Афон',
      description: 'Экскурсия к древнему монастырю и знаменитой пещере',
      duration: '6 часов',
      groupSize: 'до 8 человек',
      price: '2000₽',
      highlights: ['Новоафонский монастырь', 'Новоафонская пещера', 'Водопад']
    },
    {
      id: 3,
      name: 'Гагра и Пицунда',
      description: 'Прибрежная экскурсия по самым красивым курортам',
      duration: '7 часов',
      groupSize: 'до 8 человек',
      price: '2200₽',
      highlights: ['Гагрская колоннада', 'Пицундский собор', 'Сосновая роща']
    }
  ];

  const features = [
    {
      icon: Users,
      title: 'Опытные гиды',
      description: 'Профессиональные экскурсоводы с многолетним опытом'
    },
    {
      icon: Camera,
      title: 'Фотосессии',
      description: 'Помогаем сделать незабываемые снимки в лучших локациях'
    },
    {
      icon: Mountain,
      title: 'Горные маршруты',
      description: 'Уникальные места с потрясающими видами на горы'
    },
    {
      icon: Waves,
      title: 'Морские пейзажи',
      description: 'Живописные виды на Черное море и побережье'
    }
  ];

  return (
    <section id="excursions" className="py-20 bg-gradient-to-br from-primary-50 to-warm-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Экскурсии по Абхазии</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Откройте для себя красоту Абхазии с нашими увлекательными экскурсиями. 
            Комфортабельный транспорт и опытные гиды сделают ваше путешествие незабываемым.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Excursion Car Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Комфортабельный автомобиль для экскурсий"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Комфортабельный транспорт</h3>
                  <p className="text-sm opacity-90">
                    Современные автомобили с кондиционером для вашего комфорта
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 rounded-xl shadow-md"
                >
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Excursions List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6">
              {excursions.map((excursion, index) => (
                <motion.div
                  key={excursion.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{excursion.name}</h3>
                      <p className="text-gray-600 mb-4">{excursion.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-500">{excursion.price}</div>
                      <div className="text-sm text-gray-500">за человека</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{excursion.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{excursion.groupSize}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Что увидите:</h4>
                    <div className="flex flex-wrap gap-2">
                      {excursion.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    Забронировать экскурсию
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Готовы к незабываемому путешествию?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Свяжитесь с нами для бронирования экскурсий или получения дополнительной информации. 
            Мы поможем составить идеальный маршрут для вашего отдыха.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://wa.me/7840123456?text=Здравствуйте! Интересуют экскурсии по Абхазии."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-200"
            >
              Написать в WhatsApp
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-gray-200 transition-all duration-200"
            >
              Связаться с нами
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Excursions;