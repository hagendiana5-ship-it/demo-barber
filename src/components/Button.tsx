import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'silver';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'gold', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = "metallic-btn text-stone-900 font-serif font-bold tracking-wider py-3 px-8 rounded-sm uppercase text-sm md:text-base relative overflow-hidden group";
  
  // Currently we use one main metallic class defined in index.html, 
  // but we could expand variants here if needed.
  
  const widthClass = fullWidth ? 'w-full' : 'w-auto';

  return (
    <button 
      className={`${baseClasses} ${widthClass} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Shine effect overlay */}
      <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] transition-all duration-700 group-hover:left-[200%] pointer-events-none" />
    </button>
  );
};

export default Button;