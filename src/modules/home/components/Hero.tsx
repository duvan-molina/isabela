import { motion } from 'motion/react';
import Button from '@/src/shared/components/Button';
import { Star, Shield, Clock } from 'lucide-react';

const stats = [
  { icon: Star,   value: '5.0',   label: 'Calificación' },
  { icon: Shield, value: '100%',  label: 'Satisfacción' },
  { icon: Clock,  value: '48h',   label: 'Tiempo respuesta' },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-soft overflow-hidden">

      {/* Subtle background accent — starts below the navbar */}
      <div className="absolute bottom-0 right-0 w-[60%] h-[70%] bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 min-h-screen py-28">

          {/* LEFT — Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
                Peluquería Canina Profesional
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold mb-6 leading-[1.05] text-brand-secondary tracking-tighter"
            >
              Tu mascota merece <br />
              <span className="text-brand-primary">el mejor cuidado.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl font-light mb-10 max-w-lg text-brand-secondary/60 leading-relaxed"
            >
              Baño, corte y tratamientos especializados por raza con estándares de salud clínica. Agenda en minutos por WhatsApp.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <Button
                size="lg"
                className="bg-brand-primary hover:scale-105 transition-transform text-lg px-10 h-16 shadow-[0_10px_40px_-10px_rgba(0,102,255,0.4)]"
                onClick={() => window.open('https://wa.me/573000000000', '_blank')}
              >
                Agendar ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-brand-secondary/20 text-brand-secondary hover:bg-brand-secondary/5 text-lg h-16"
                onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver resultados
              </Button>
            </motion.div>

            {/* Trust stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-8 pt-6 border-t border-brand-secondary/10"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-brand-secondary font-bold text-lg leading-none">{value}</p>
                    <p className="text-brand-secondary/40 text-xs uppercase tracking-widest">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="relative hidden lg:flex items-end justify-center h-[75vh]"
          >
            {/* Decorative circle behind photo */}
            <div className="absolute inset-0 m-auto w-[90%] h-[90%] bg-brand-primary/8 rounded-[3rem]" />

            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=85&w=900"
              alt="Grooming profesional de mascotas"
              className="relative z-10 w-[90%] h-full object-cover object-center rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(11,36,71,0.2)]"
              referrerPolicy="no-referrer"
            />

            {/* Floating badge */}
            <div className="absolute bottom-8 left-0 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary flex items-center justify-center">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <p className="text-brand-secondary font-bold text-sm leading-none">Mejor peluquería</p>
                <p className="text-brand-secondary/40 text-xs mt-0.5">+200 mascotas felices</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
