import { motion } from 'motion/react';
import Button from '@/src/shared/components/Button';
import { Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
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
    <section id="servicios" className="py-32 bg-brand-secondary text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 transform translate-x-1/4" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
            Protocolos de Salud
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-tight tracking-tighter">
            Estética <span className="text-gradient">Preventiva</span>
          </h2>
          <p className="text-xl text-white/50 leading-relaxed font-light">
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
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-20 !overflow-visible"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={cn(
                    "group relative flex flex-col h-full p-12 rounded-[2.5rem] transition-all duration-500",
                    service.recommended 
                      ? "bg-brand-primary text-white scale-105 z-10 shadow-[0_40px_80px_-15px_rgba(255,45,85,0.3)]" 
                      : "bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10"
                  )}
                >
                  {service.recommended && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white text-brand-primary px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                      Best Seller
                    </div>
                  )}

                  <div className="mb-10">
                    <h3 className="text-3xl font-display mb-6">
                      {service.title.split(': ')[1]}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold tracking-tighter">{service.price}</span>
                      <span className={cn(
                        "text-sm font-medium uppercase tracking-widest",
                        service.recommended ? "text-white/60" : "text-white/30"
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
                          service.recommended ? "bg-white/20" : "bg-brand-primary/20"
                        )}>
                          <Check className={cn(
                            "w-3.5 h-3.5",
                            service.recommended ? "text-white" : "text-brand-primary"
                          )} />
                        </div>
                        <span className={cn(
                          "text-lg font-light",
                          service.recommended ? "text-white/90" : "text-white/60"
                        )}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={service.recommended ? 'secondary' : 'primary'}
                    className={cn(
                      "w-full h-16 text-lg",
                      !service.recommended && "bg-white text-brand-secondary hover:bg-brand-primary hover:text-white"
                    )}
                    onClick={() => window.open(`https://wa.me/573000000000?text=Hola Isabela, me interesa el ${service.title}`, '_blank')}
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
