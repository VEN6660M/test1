import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: 'https://media.discordapp.net/attachments/1247239991088648223/1383981455264186420/6d9f9a7f-7597-4d5c-a342-a33ac0cae7ef.jpg?ex=6850c4ac&is=684f732c&hm=feb7502219a27722a8d63a835a92396da8bc7ded511a8138d20b2c0cc72f3325&=&format=webp&width=888&height=666',
      title: 'Вид на море с террасы',
      category: 'Виды'
    },
    {
      src: 'https://media.discordapp.net/attachments/1247239991088648223/1383981454525988894/46bd7a41-57ef-450c-b569-a5a9aade5432.jpg?ex=6850c4ab&is=684f732b&hm=55542f390452b52f8d4d17def48315f1fcbc5347741154e8d1b8291bb5537ec0&=&format=webp&width=888&height=666',
      title: 'Уютный номер люкс',
      category: 'Номера'
    },
    {
      src: 'https://media.discordapp.net/attachments/1247239991088648223/1383981455805255832/2d21337a-442f-42c9-b484-8a563e3455ff.jpg?ex=6850c4ac&is=684f732c&hm=2cdf377f0bc21e2dda62bc8198db78ac182aac96e4d6a9eb05db9ff1fdbcbdb3&=&format=webp&width=888&height=666',
      title: 'Ресторан с панорамным видом',
      category: 'Ресторан'
    },
    {
      src: 'https://media.discordapp.net/attachments/1247239991088648223/1383981456124149931/dac3849f-9440-4af8-93e0-9ffb148599c8.jpg?ex=6850c4ac&is=684f732c&hm=9347c4fe1794de6e51fa9b3de5ea74214bd3d296d756c22c718db9db68ba209b&=&format=webp&width=499&height=666',
      title: 'Бассейн на крыше',
      category: 'Бассейн'
    },
    {
      src: 'https://media.discordapp.net/attachments/1247239991088648223/1383981456367288380/58d7f238-1049-425c-ab34-f821e16d3c6b.jpg?ex=6850c4ac&is=684f732c&hm=9c798bfda8614e6a49e429c009e76a55f1fe1bc69fa6bf4f1ffb95b50caa578f&=&format=webp&width=888&height=666',
      title: 'Спальня с видом на горы',
      category: 'Номера'
    },
    {
      src: 'https://media.discordapp.net/attachments/1247239991088648223/1383981456598106254/6a61d3af-07d3-4ba8-afef-3b87f287703d.jpg?ex=6850c4ac&is=684f732c&hm=fa2099a51ce6812c223413b954955f50769c227dab7d29e2023c23e989a5e5d8&=&format=webp&width=888&height=666',
      title: 'Семейный номер',
      category: 'Номера'
    },
    {
      src: 'https://media.discordapp.net/attachments/1247239991088648223/1383981456841379910/8617dceb-5817-450f-84fd-2f20ac25bcdf.jpg?ex=6850c4ac&is=684f732c&hm=3f124949952dfadea6a34014d336a7274b22e390d66710e1276cdcea9014b96a&=&format=webp&width=499&height=666',
      title: 'Пляж рядом с отелем',
      category: 'Пляж'
    },
    {
      src: 'https://media.discordapp.net/attachments/1247239991088648223/1383981457155821568/fae57783-51b3-4561-8b20-4e4e32417851.jpg?ex=6850c4ac&is=684f732c&hm=777d57b9c7a75ab8855910663c3bc8849080112a893b6411e3534f413edc2ecc&=&format=webp&width=499&height=666',
      title: 'Стандартный номер',
      category: 'Номера'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Галерея</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Погрузитесь в атмосферу нашего отеля через фотографии
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                  <div className="p-3 sm:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <h3 className="font-semibold text-sm">{image.title}</h3>
                    <p className="text-xs text-gray-300">{image.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-4xl max-h-[90vh] mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].title}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="text-center mt-4 text-white">
                  <h3 className="text-xl font-semibold">{images[selectedImage].title}</h3>
                  <p className="text-gray-300">{images[selectedImage].category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
