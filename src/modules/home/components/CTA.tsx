import { motion } from 'motion/react';
import Button from '@/src/shared/components/Button';
import { MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contacto" className="py-8 md:py-24 bg-brand-soft overflow-hidden relative">
      {/* Subtle accent blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-primary/10 rounded-full filter blur-3xl opacity-60 animate-blob pointer-events-none" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-brand-accent/10 rounded-full filter blur-3xl opacity-60 animate-blob animation-delay-2000 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
            Reserva tu cita
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-tight tracking-tighter text-brand-secondary">
            Agenda ahora y dale a tu mascota <span className="text-brand-primary">el mejor cuidado.</span>
          </h2>
          <p className="text-lg md:text-xl font-light mb-12 text-brand-secondary/50 max-w-2xl mx-auto">
            Reserva una sesión de estética clínica para tu mascota y asegura su bienestar dermatológico.
          </p>
          <Button
            size="lg"
            className="bg-brand-primary hover:scale-105 transition-transform h-18 md:h-20 px-12 text-xl md:text-2xl gap-4 rounded-2xl shadow-[0_16px_40px_-10px_rgba(0,102,255,0.35)]"
            onClick={() => window.open('https://api.whatsapp.com/message/G6KNZQMTZX7IP1?autoload=1&app_absent=0&utm_source=ig', '_blank')}
          >
            <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
            Agendar Cita
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
