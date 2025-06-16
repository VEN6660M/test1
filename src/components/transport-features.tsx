import React from 'react';
import { Shield, Fuel, Users, Snowflake } from 'lucide-react';
import { motion } from 'framer-motion';

const TransportFeatures = () => {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-primary-50 to-warm-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 sm:p-8"
    >
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Экскурсии по Абхазии</h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Откройте для себя красоту Абхазии с нашими увлекательными экскурсиями. Комфортабельный транспорт и опытные гиды сделают ваше путешествие незабываемым.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Car Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://media.discordapp.net/attachments/1247239991088648223/1383975677275144262/1870e017-480f-412d-84d6-cf336ad1c1f5.jpg?ex=6850bf4a&is=684f6dca&hm=c5a1a0ba09a5b1a80b031182efa594b0c7b6105aa48055fcb5e51993e706da7a&=&format=webp&width=998&height=666"
              alt="Комфортабельный автомобиль для трансфера"
              className="w-full h-64 sm:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Комфортабельный транспорт</h4>
                <p className="text-sm opacity-90">
                  Современные автомобили с кондиционером для вашего комфорта
                </p>
              </div>
            </div>
          </div>
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
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Services List */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Услуги трансфера:</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Встреча в аэропорту с табличкой</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Помощь с багажом</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Бесплатная вода в дороге</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>Информация о достопримечательностях</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TransportFeatures;