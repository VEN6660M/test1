import React from 'react';
import { Car, Shield, Snowflake, Users, Fuel } from 'lucide-react';
import { motion } from 'framer-motion';

const Transport = () => {
  const transportFeatures = [
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Опытные водители с безупречной репутацией'
    },
    {
      icon: Snowflake,
      title: 'Комфорт',
      description: 'Кондиционер и удобные сидения'
    },
    {
      icon: Users,
      title: 'Вместимость',
      description: 'До 8 пассажиров в комфортабельном авто'
    },
    {
      icon: Fuel,
      title: 'Надёжность',
      description: 'Регулярное техническое обслуживание'
    }
  ];

  return (
    <section id="transport" className="py-20 bg-gradient-to-br from-primary-50 to-warm-50 dark:from-gray-700 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Наш транспорт</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Предоставляем комфортабельный трансфер и экскурсионные поездки на современных автомобилях
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Car Image and Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://media.discordapp.net/attachments/1247239991088648223/1383975677275144262/1870e017-480f-412d-84d6-cf336ad1c1f5.jpg?ex=6850bf4a&is=684f6dca&hm=c5a1a0ba09a5b1a80b031182efa594b0c7b6105aa48055fcb5e51993e706da7a&=&format=webp&width=998&height=666"
                  alt="Комфортабельный автомобиль"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h4 className="text-xl font-bold mb-2">Микроавтобус Mercedes</h4>
                    <p className="text-sm opacity-90">
                      Комфортабельный микроавтобус для групповых поездок и экскурсий
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <a
                  href="https://wa.me/79993601089?text=Здравствуйте! Интересует трансфер."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Car className="w-5 h-5" />
                  <span>Заказать трансфер</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Features and Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {transportFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary-500 dark:text-primary-400" />
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Services List */}
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Услуги трансфера:</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full"></div>
                    <span>Встреча в аэропорту с табличкой</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full"></div>
                    <span>Помощь с багажом</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full"></div>
                    <span>Бесплатная вода в дороге</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full"></div>
                    <span>Информация о достопримечательностях</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transport;