/**
 * ActionButton Component for Connect1to1 Platform
 * 
 * This component provides a standardized button with proper functionality.
 * It fixes the issue where many action buttons throughout the platform are non-functional.
 */

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ActionButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  type = 'button',
  href,
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  icon = null,
  confirmMessage = null
}) {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  
  // Handle button click
  const handleClick = (e) => {
    if (disabled || loading) return;
    
    if (confirmMessage && !showConfirm) {
      e.preventDefault();
      setShowConfirm(true);
      return;
    }
    
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick(e);
    }
    
    if (showConfirm) {
      setShowConfirm(false);
    }
  };
  
  // Handle cancel confirmation
  const handleCancelConfirm = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };
  
  // Determine button styles based on variant
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-teal-600 hover:bg-teal-700 text-white';
      case 'secondary':
        return 'bg-white border border-teal-600 text-teal-600 hover:bg-teal-50';
      case 'danger':
        return 'bg-red-600 hover:bg-red-700 text-white';
      case 'success':
        return 'bg-green-600 hover:bg-green-700 text-white';
      case 'warning':
        return 'bg-yellow-500 hover:bg-yellow-600 text-white';
      case 'info':
        return 'bg-blue-500 hover:bg-blue-600 text-white';
      case 'ghost':
        return 'bg-transparent hover:bg-gray-100 text-gray-700';
      default:
        return 'bg-teal-600 hover:bg-teal-700 text-white';
    }
  };
  
  // Determine button size classes
  const getSizeClasses = () => {
    switch (size) {
      case 'xs':
        return 'px-2 py-1 text-xs';
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'md':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-5 py-2.5 text-base';
      case 'xl':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-sm';
    }
  };
  
  // Combine all classes
  const buttonClasses = `
    rounded font-medium transition-colors duration-200
    ${getVariantClasses()}
    ${getSizeClasses()}
    ${fullWidth ? 'w-full' : ''}
    ${disabled || loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      <div className="flex items-center justify-center">
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        
        {icon && !loading && (
          <span className="mr-2">{icon}</span>
        )}
        
        {showConfirm ? (
          <div className="flex items-center space-x-2">
            <span>Confirm?</span>
            <button 
              className="ml-2 text-xs bg-white text-red-600 hover:bg-red-50 px-1 py-0.5 rounded"
              onClick={handleCancelConfirm}
            >
              Cancel
            </button>
          </div>
        ) : (
          children
        )}
      </div>
    </button>
  );
}
