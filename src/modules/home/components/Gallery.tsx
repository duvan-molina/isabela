import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
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
    src: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800',
    alt: 'Grooming canino 4',
    label: 'Cuidado de uñas',
  },
  {
    src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    alt: 'Grooming canino 5',
    label: 'Limpieza profunda',
  },
  {
    src: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80&w=800',
    alt: 'Grooming canino 6',
    label: 'Accesorios premium',
  },
];

const GalleryCard = ({ image, className }: { image: typeof galleryImages[0]; className?: string }) => (
  <div className={cn("group relative overflow-hidden rounded-[2.5rem] cursor-pointer", className)}>
    <img
      src={image.src}
      alt={image.alt}
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-white font-display text-3xl">
          {image.label}
        </span>
      </div>
    </div>
  </div>
);

const Gallery = () => {
  return (
    <section id="galeria" className="py-8 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-20 gap-4 md:gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-3 md:mb-6">
              Casos de Éxito
            </div>
            <h2 className="text-3xl md:text-7xl font-display font-extrabold leading-tight tracking-tighter">
              Resultados <span className="hidden md:inline"><br /></span>de <span className="text-brand-primary">precisión</span>.
            </h2>
          </div>
          <p className="text-base md:text-xl text-gray-500 max-w-sm font-light leading-relaxed text-center md:text-left">
            Documentamos cada transformación bajo estándares de calidad clínica.
          </p>
        </div>

        {/* Mobile: Swiper slider */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="pb-12"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="h-72">
                  <GalleryCard image={image} className="h-full w-full" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: Bento grid */}
        <div className="hidden md:grid md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          {galleryImages.slice(0, 5).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 1 && "md:col-span-2 md:row-span-1",
                index === 2 && "md:col-span-1 md:row-span-1",
                index === 3 && "md:col-span-1 md:row-span-1",
                index === 4 && "md:col-span-1 md:row-span-1"
              )}
            >
              <GalleryCard image={image} className="h-full w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
