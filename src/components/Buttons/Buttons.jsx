import { Button } from '@chakra-ui/react';
import React from 'react';

const GrowBoxButton = React.forwardRef(({ children, ...props }, ref) => {
  // Estilos personalizados del botón
  const buttonStyles = {
    position: 'relative',
    zIndex: 1,
    background: 'var(--color-button)',
    color: 'var(--color-text-2)',
    border: '2px solid var(--color-button)',
    padding: '16px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '1',
    letterSpacing: '0.02em',
    borderRadius: '3px',
    transition: '0.3s ease-in-out',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    wordBreak: 'break-word',
    overflow: 'hidden',
    mb: 9,
    '::after': {
      content: '""',
      background: 'var(--color-text-1)',
      position: 'absolute',
      zIndex: -1,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      transform: 'scale(0, 0)',
      transition: 'all 0.3s ease'
    },
    ':hover::after': {
      transform: 'scale(1, 1)',
      transition: 'all 0.3s ease-out'
    }
  };

  return (
    <Button ref={ref} sx={buttonStyles} {...props}>
      {children}
    </Button>
  );
});

export default GrowBoxButton;
