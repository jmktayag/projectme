'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  primary?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const RippleButton = ({ 
  children, 
  className = "", 
  href = "#", 
  primary = false,
  type = 'button',
  disabled = false
}: RippleButtonProps) => {
  const handleRipple = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = 'ripple';

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  const buttonClassName = `relative overflow-hidden ${
    primary
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
  } px-8 py-3 rounded-lg font-medium transition-colors ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  if (href === "#") {
    return (
      <button
        type={type}
        className={buttonClassName}
        onClick={handleRipple}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={buttonClassName}
      onClick={handleRipple}
    >
      {children}
    </Link>
  );
};

export default RippleButton; 