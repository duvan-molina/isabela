import { Instagram, MapPin, Phone, PawPrint } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-32 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-brand-primary rounded-2xl">
                <PawPrint className="w-8 h-8 text-white" />
              </div>
              <span className="text-3xl font-display font-extrabold text-brand-secondary tracking-tighter">Isabela Grooming</span>
            </div>
            <p className="text-xl text-gray-400 max-w-sm leading-relaxed mb-10 font-light">
              Estética canina de alta precisión con enfoque clínico. Cuidamos la salud de tu mascota a través de la higiene profesional.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/isabelagalindogroomer_01"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 bg-brand-soft text-brand-secondary rounded-2xl flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-500"
              >
                <Instagram className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary mb-10">Navegación</h4>
            <ul className="space-y-5 text-gray-400 font-medium">
              <li><a href="#sobre-isabela" className="hover:text-brand-primary transition-colors">La Experta</a></li>
              <li><a href="#servicios" className="hover:text-brand-primary transition-colors">Servicios</a></li>
              <li><a href="#galeria" className="hover:text-brand-primary transition-colors">Galería</a></li>
              <li><a href="#testimonios" className="hover:text-brand-primary transition-colors">Historias</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary mb-10">Contacto</h4>
            <ul className="space-y-8 text-gray-400 font-medium">
              <li className="flex items-start gap-5">
                <MapPin className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <span className="text-lg">Santander de Quilichao, Cauca</span>
              </li>
              <li className="flex items-start gap-5">
                <Phone className="w-6 h-6 text-brand-primary flex-shrink-0" />
                <span className="text-lg">+57 321 5334719</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-bold uppercase tracking-[0.3em] text-gray-300">
          <p>© {new Date().getFullYear()} Isabela Grooming. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
