import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon: Icon,
  children,
  onClick,
  href,
  external,
  disabled,
  type = 'button',
  className = '',
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300";

  const variantClasses = {
    primary: "bg-gradient-to-r from-primary-teal to-primary-navy text-white hover:shadow-xl hover:scale-105 shadow-lg",
    secondary: "bg-white text-luxury-slate border-2 border-primary-teal hover:bg-gradient-to-r hover:from-primary-teal hover:to-primary-navy hover:text-white hover:border-transparent",
    outline: "bg-transparent text-primary-teal border-2 border-primary-teal hover:bg-gradient-to-r hover:from-primary-teal hover:to-primary-navy hover:text-white",
    text: "bg-transparent text-primary-teal hover:text-primary-coral",
    gold: "bg-gradient-to-r from-primary-navy via-primary-teal to-primary-coral text-white hover:brightness-110 hover:shadow-xl shadow-lg"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const combinedClassName = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const content = (
    <>
      {Icon && <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;
