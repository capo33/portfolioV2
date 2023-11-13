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
      className='py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100  inline-flex items-center outline-none'
    >
      {children}
    </button>
  );
};

export default Button;
