import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Carolina Gómez',
    pet: 'Toby (Golden Retriever)',
    text: 'Isabela es increíble. Toby siempre sale feliz y oliendo delicioso. El corte de raza es impecable y el trato es muy amoroso.',
    rating: 5,
  },
  {
    name: 'Andrés Felipe',
    pet: 'Luna (Poodle)',
    text: 'La mejor peluquería en la ciudad. El servicio premium vale cada peso, Luna quedó como una princesa con su moño y el pelo súper hidratado.',
    rating: 5,
  },
  {
    name: 'Mariana Restrepo',
    pet: 'Bruno (Bulldog Francés)',
    text: 'Me encanta que Isabela se toma el tiempo de conocer a cada perrito. Bruno es nervioso pero con ella se siente muy tranquilo.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-8 md:py-24 bg-brand-soft relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
            Opinión Médica & Familiar
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-tight tracking-tighter">
            Confianza <span className="text-brand-primary">garantizada</span>.
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
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
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white h-full p-12 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-500"
                >
                  <div className="absolute -top-6 left-12 w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center shadow-lg shadow-brand-primary/30">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
                    ))}
                  </div>

                  <p className="text-xl text-gray-500 mb-10 font-light leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center text-brand-primary font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="text-xl font-display text-brand-secondary">{testimonial.name}</h4>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        {testimonial.pet}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
