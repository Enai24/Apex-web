import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
}

export function Card({ 
  className, 
  title, 
  description, 
  footer,
  children,
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5",
        className
      )}
      {...props}
    >
      {(title || description) && (
        <div className="px-6 py-4 border-b border-gray-200">
          {title && (
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          )}
        </div>
      )}
      <div className="p-6">{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200">{footer}</div>
      )}
    </div>
  );
}