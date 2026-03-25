import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="sobre-isabela" className="py-32 bg-brand-soft overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* Image Container with Modern Border Radius */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000"
                alt="Isabela Groomer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Modern Decorative Element */}
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-brand-primary/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
              Especialista en Salud Animal
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-[1.1] tracking-tighter">
              Enfoque <span className="text-brand-primary">clínico</span> y estético.
            </h2>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed font-light">
              Soy Isabela, groomer profesional con formación en bienestar animal, dedicada a transformar la experiencia de higiene en un proceso de salud preventiva.
            </p>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light">
              Mi compromiso es tratar a cada perro como si fuera mío, asegurando que se sientan cómodos y felices durante todo el proceso de embellecimiento.
            </p>
            
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-5xl font-display text-brand-secondary mb-2">05+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Años de Experiencia</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-display text-brand-secondary mb-2">1K+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Clientes Felices</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
