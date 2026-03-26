import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
    alt: 'Grooming canino 1',
    label: 'Antes & Después',
  },
  {
    src: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=800',
    alt: 'Grooming canino 2',
    label: 'Corte especializado',
  },
  {
    src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
    alt: 'Grooming canino 3',
    label: 'Baño relajante',
  },
  {
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    alt: 'Grooming canino 4',
    label: 'Limpieza profunda',
  },
  {
    src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80&w=800',
    alt: 'Grooming canino 5',
    label: 'Corte por raza',
  },
  {
    src: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800',
    alt: 'Grooming canino 6',
    label: 'Cuidado de uñas',
  },
];

const GalleryCard = ({ image }: { image: typeof galleryImages[0] }) => (
  <div className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[4/3]">
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    {/* Gradient always visible at bottom */}
    <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/70 via-brand-secondary/10 to-transparent" />
    {/* Label always visible, lifts slightly on hover */}
    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
      <span className="text-white font-display font-bold text-xl tracking-tight">
        {image.label}
      </span>
    </div>
  </div>
);

const Gallery = () => {
  return (
    <section id="galeria" className="py-8 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-14 gap-4 md:gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-3 md:mb-4">
              Casos de Éxito
            </div>
            <h2 className="text-3xl md:text-6xl font-display font-extrabold leading-tight tracking-tighter">
              Resultados de <span className="text-brand-primary">precisión</span>.
            </h2>
          </div>
          <p className="text-base md:text-lg text-gray-500 max-w-sm font-light leading-relaxed text-center md:text-left">
            Documentamos cada transformación bajo estándares de calidad clínica.
          </p>
        </div>

        {/* Mobile: Swiper slider */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.15}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-12"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[4/3]">
                  <GalleryCard image={image} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: symmetric 3×2 grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GalleryCard image={image} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
