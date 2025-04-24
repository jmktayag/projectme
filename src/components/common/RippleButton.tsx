'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ButtonProps } from '../../types';

interface RippleEffect {
  x: number;
  y: number;
  id: number;
}

interface RippleButtonProps extends ButtonProps {
  href?: string;
}

export const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  className = '',
  onClick,
  href,
  ...props
}) => {
  const [ripples, setRipples] = useState<RippleEffect[]>([]);

  useEffect(() => {
    const cleanup = ripples.reduce((acc, ripple) => {
      acc[ripple.id] = setTimeout(() => {
        setRipples((prevRipples) =>
          prevRipples.filter((r) => r.id !== ripple.id)
        );
      }, 1000);
      return acc;
    }, {} as { [key: number]: NodeJS.Timeout });

    return () => {
      Object.values(cleanup).forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, [ripples]);

  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRipples([...ripples, { x, y, id: Date.now() }]);
    onClick?.(event as any);
  };

  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  const buttonClassName = `
    relative overflow-hidden rounded-md transition-colors duration-200
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${isLoading ? 'cursor-not-allowed opacity-75' : ''}
    ${className}
  `;

  const RippleEffect = () => (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
          }}
          className="absolute h-4 w-4 animate-ripple rounded-full bg-white opacity-75"
        />
      ))}
    </>
  );

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
    </div>
  );

  if (!href) {
    return (
      <button
        className={buttonClassName}
        onClick={createRipple}
        disabled={isLoading}
        {...props}
      >
        <RippleEffect />
        {isLoading ? <LoadingSpinner /> : children}
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={buttonClassName}
      onClick={createRipple}
    >
      <RippleEffect />
      {isLoading ? <LoadingSpinner /> : children}
    </Link>
  );
};

export default RippleButton; 