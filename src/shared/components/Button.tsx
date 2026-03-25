import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-[0_10px_20px_-10px_rgba(0,102,255,0.4)]',
      secondary: 'bg-brand-secondary text-white hover:bg-brand-secondary/90 shadow-[0_10px_20px_-10px_rgba(1,4,9,0.4)]',
      outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
      ghost: 'text-brand-secondary hover:bg-brand-soft',
    };

    const sizes = {
      sm: 'px-5 py-2.5 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg font-bold uppercase tracking-widest',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-500 disabled:opacity-50 disabled:pointer-events-none active:scale-95',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
