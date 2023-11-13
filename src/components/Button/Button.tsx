import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
}
const Button = ({ children, loading, onClick }: IButtonProps) => {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      type='button'
      className='btn dark_text'
    >
      {children}
    </button>
  );
};

export default Button;
