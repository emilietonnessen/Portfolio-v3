import { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  onClick: () => void;
}

const Button = ({ children, variant, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button button__${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
