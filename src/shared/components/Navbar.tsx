import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PawPrint, Menu, X } from 'lucide-react';
import Button from './Button';
import { cn } from '@/src/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);

      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);

      if (element) {
        // Small delay to let the menu start closing
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const navLinks = [
    { name: 'Sobre Isabela', href: '#sobre-isabela' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'bg-white shadow-sm' : 'bg-brand-soft shadow-none border-none'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={cn(
            "p-2 rounded-xl transition-colors duration-500",
            isScrolled ? "bg-brand-primary" : "bg-brand-primary"
          )}>
            <PawPrint className={cn(
              "w-6 h-6 transition-colors duration-500",
              isScrolled ? "text-white" : "text-white"
            )} />
          </div>
          <span className={cn(
            "text-xl font-display font-extrabold tracking-tighter transition-colors duration-500",
            isScrolled ? "text-brand-secondary" : "text-brand-secondary"
          )}>
            Isabela Grooming
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold uppercase tracking-widest transition-colors duration-300 hover:text-brand-primary",
                isScrolled ? "text-brand-secondary/70" : "text-brand-secondary/70"
              )}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <Button
            size="sm"
            variant="primary"
            className="rounded-xl"
            onClick={() => window.open('https://api.whatsapp.com/message/G6KNZQMTZX7IP1?autoload=1&app_absent=0&utm_source=ig', '_blank')}
          >
            Agendar
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-xl transition-colors",
            isScrolled ? "text-brand-secondary hover:bg-brand-soft" : "text-brand-secondary hover:bg-brand-soft"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white md:hidden flex flex-col h-[100dvh]"
          >
            {/* Mobile Menu Header */}
            <div className="p-6 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-brand-primary">
                  <PawPrint className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-display font-extrabold tracking-tighter text-brand-secondary">
                  Isabela Grooming
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-brand-soft text-brand-secondary"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex-1 flex flex-col justify-center items-center p-8 gap-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-4xl font-display font-extrabold text-brand-secondary hover:text-brand-primary transition-colors tracking-tighter"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="w-full mt-8"
              >
                <Button
                  className="w-full h-20 text-2xl rounded-3xl"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.open('https://wa.me/573000000000', '_blank');
                  }}
                >
                  Agendar Cita
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-8 text-center border-t border-gray-100">
              <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">
                Estética Canina de Alta Precisión
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
