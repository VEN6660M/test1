import React from 'react';
import { Wifi, Car, Coffee, Waves, Mountain, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Стандартный номер',
      description: 'Уютный номер с видом на горы',
      price: '3500',
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Wi-Fi', 'Кондиционер', 'Телевизор', 'Мини-бар'],
      rating: 4.7,
      reviews: 124
    },
    {
      id: 2,
      name: 'Номер с видом на море',
      description: 'Просторный номер с панорамным видом на Черное море',
      price: '5500',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Wi-Fi', 'Балкон', 'Джакузи', 'Кондиционер'],
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Люкс семейный',
      description: 'Просторный номер для семьи с детьми',
      price: '7500',
      image: 'https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=600',
      amenities: ['Wi-Fi', '2 спальни', 'Кухня', 'Терраса'],
      rating: 4.8,
      reviews: 67
    }
  ];

  const amenityIcons = {
    'Wi-Fi': Wifi,
    'Кондиционер': Waves,
    'Балкон': Mountain,
    'Терраса': Mountain,
    'Кухня': Coffee,
    'Парковка': Car
  };

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Наши номера</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите идеальный номер для вашего незабываемого отдыха в Абхазии
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{room.rating}</span>
                    <span className="text-xs text-gray-500">({room.reviews})</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons] || Coffee;
                    return (
                      <div
                        key={amenity}
                        className="flex items-center space-x-1 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        <Icon size={14} />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary-500">{room.price}₽</span>
                    <span className="text-gray-500">/ночь</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                  >
                    Забронировать
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;