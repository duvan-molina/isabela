import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

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
    src: 'https://images.unsplash.com/photo-1591768793355-74d7c836038c?auto=format&fit=crop&q=80&w=800',
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

const Gallery = () => {
  return (
    <section id="galeria" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
              Casos de Éxito
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold leading-tight tracking-tighter">
              Resultados <br /> de <span className="text-brand-primary">precisión</span>.
            </h2>
          </div>
          <p className="text-xl text-gray-500 max-w-sm font-light leading-relaxed">
            Documentamos cada transformación bajo estándares de calidad clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          {galleryImages.slice(0, 5).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-[2.5rem] cursor-pointer",
                index === 0 && "md:col-span-2 md:row-span-2",
                index === 1 && "md:col-span-2 md:row-span-1",
                index === 2 && "md:col-span-1 md:row-span-1",
                index === 3 && "md:col-span-1 md:row-span-1",
                index === 4 && "md:col-span-1 md:row-span-1"
              )}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
