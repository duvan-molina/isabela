import { motion } from 'motion/react';
import Button from '@/src/shared/components/Button';
import { Check, Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  {
    title: 'PLAN 1: Estándar',
    price: '$45.000',
    features: [
      'Baño',
      'Secado',
      'Corte básico',
      'Limpieza de oídos',
    ],
    recommended: false,
  },
  {
    title: 'PLAN 2: Medio',
    price: '$65.000',
    features: [
      'Todo lo del estándar',
      'Corte especializado por raza',
      'Corte de uñas',
      'Perfume',
    ],
    recommended: true,
  },
  {
    title: 'PLAN 3: Premium',
    price: '$95.000',
    features: [
      'Todo lo anterior',
      'Hidratación profunda',
      'Tratamiento capilar',
      'Desenredado profesional',
      'Accesorio (moño o bandana)',
    ],
    recommended: false,
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-8 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-brand-primary/5 -skew-x-12 transform -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
            Protocolos de Salud
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-tight tracking-tighter text-brand-secondary">
            Estética <span className="text-brand-primary">Preventiva</span>
          </h2>
          <p className="text-xl text-brand-secondary/50 leading-relaxed font-light">
            Nuestros servicios van más allá de la belleza; aplicamos estándares clínicos para garantizar la salud dermatológica de tu mascota.
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="services-swiper pb-16 !overflow-visible"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="flex">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={cn(
                    "group relative flex flex-col w-full h-[560px] md:h-[580px] p-8 md:p-12 rounded-[2.5rem] transition-colors duration-300",
                    service.recommended
                      ? "bg-brand-primary text-white shadow-[0_20px_60px_-15px_rgba(0,102,255,0.35)]"
                      : "bg-white border border-gray-100 shadow-[0_8px_40px_-12px_rgba(11,36,71,0.08)]"
                  )}
                >
                  {service.recommended && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-brand-primary px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-brand-primary" />
                      Recomendado
                    </div>
                  )}

                  <div className="mb-10">
                    <h3 className={cn(
                      "text-3xl font-display mb-6",
                      service.recommended ? "text-white" : "text-brand-secondary"
                    )}>
                      {service.title.split(': ')[1]}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className={cn(
                        "text-5xl font-bold tracking-tighter",
                        service.recommended ? "text-white" : "text-brand-secondary"
                      )}>
                        {service.price}
                      </span>
                      <span className={cn(
                        "text-sm font-medium uppercase tracking-widest",
                        service.recommended ? "text-white/60" : "text-brand-secondary/40"
                      )}>
                        COP
                      </span>
                    </div>
                  </div>

                  <ul className="flex-grow space-y-5 mb-12">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-4">
                        <div className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                          service.recommended ? "bg-white/20" : "bg-brand-primary/10"
                        )}>
                          <Check className={cn(
                            "w-3.5 h-3.5",
                            service.recommended ? "text-white" : "text-brand-primary"
                          )} />
                        </div>
                        <span className={cn(
                          "text-lg font-light",
                          service.recommended ? "text-white/90" : "text-brand-secondary/70"
                        )}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="primary"
                    className={cn(
                      "w-full h-16 text-lg",
                      service.recommended
                        ? "bg-white text-brand-primary hover:bg-white/90"
                        : "bg-brand-primary text-white hover:bg-brand-primary/90"
                    )}
                    onClick={() => window.open(`https://wa.me/573215334719?text=Hola Isabela, me interesa el ${service.title}`, '_blank')}
                  >
                    Elegir Plan
                  </Button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
