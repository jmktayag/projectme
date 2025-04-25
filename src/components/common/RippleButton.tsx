'use client';

// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ButtonProps } from '../../types';

/* Define the shape of a ripple effect */
interface RippleEffect {
  x: number;  // X position of the ripple
  y: number;  // Y position of the ripple
  id: number; // Unique identifier for each ripple
}

/* Extend ButtonProps to include optional href for links */
interface RippleButtonProps extends ButtonProps {
  href?: string;
}

/* 
 * RippleButton Component
 * A reusable button component with a ripple effect animation
 * Can be used as a regular button or a link
 */
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
  // State to track active ripple effects
  const [ripples, setRipples] = useState<RippleEffect[]>([]);

  // Clean up ripples after animation completes
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

  // Create a new ripple effect when button is clicked
  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setRipples([...ripples, { x, y, id: Date.now() }]);
    onClick?.(event as React.MouseEvent<HTMLButtonElement>);
  };

  // Size classes for different button sizes
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };

  // Variant classes for different button styles
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  };

  // Combine all classes for the button
  const buttonClassName = `
    relative overflow-hidden rounded-md transition-colors duration-200
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${isLoading ? 'cursor-not-allowed opacity-75' : ''}
    ${className}
  `;

  // Ripple effect component
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

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center">
      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
    </div>
  );

  // Render as a button if no href is provided
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

  // Render as a link if href is provided
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