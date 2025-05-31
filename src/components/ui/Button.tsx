import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  large?: boolean;
  small?: boolean;
  light?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  primary = false,
  secondary = false,
  large = false,
  small = false,
  light = false,
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  let sizeClasses = 'px-4 py-2 text-sm';
  if (large) sizeClasses = 'px-6 py-3 text-base';
  if (small) sizeClasses = 'px-3 py-1.5 text-xs';
  
  let colorClasses = '';
  if (primary) {
    colorClasses = light
      ? 'bg-white text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500'
      : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500';
  } else if (secondary) {
    colorClasses = light
      ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 focus:ring-indigo-500'
      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500';
  } else {
    colorClasses = 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500';
  }
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${sizeClasses} ${colorClasses} ${widthClass} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;