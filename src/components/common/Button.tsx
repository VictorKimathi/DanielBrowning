import React from 'react';
import { Link } from 'react-router-dom';
type ButtonProps = {
  children: React.ReactNode;
  href: string;
  variant: 'primary' | 'secondary';
  className?: string;
};
export const Button = ({
  children,
  href,
  variant,
  className = ''
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium uppercase tracking-wider transition-colors';
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-white text-black border border-black hover:bg-gray-100'
  };
  return <Link to={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </Link>;
};