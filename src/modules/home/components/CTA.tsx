import { motion } from 'motion/react';
import Button from '@/src/shared/components/Button';
import { MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contacto" className="py-32 bg-brand-secondary text-white overflow-hidden relative">
      {/* Animated Background Blobs */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-brand-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-brand-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl font-display font-extrabold mb-10 leading-[0.9] tracking-tighter">
            AGENDAR <br />
            <span className="text-gradient">CONSULTA</span>.
          </h2>
          <p className="text-xl md:text-2xl font-light mb-16 text-white/50 max-w-2xl mx-auto">
            Reserva una sesión de estética clínica para tu mascota y asegura su bienestar dermatológico.
          </p>
          <Button
            size="lg"
            className="bg-brand-primary hover:scale-105 transition-transform h-24 px-16 text-3xl gap-6 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,102,255,0.5)]"
            onClick={() => window.open('https://wa.me/573000000000', '_blank')}
          >
            <MessageCircle className="w-10 h-10" />
            Agendar Cita
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
