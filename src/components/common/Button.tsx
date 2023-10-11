import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import SvgSpinier from './SvgSpinier';

interface CustomButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  isLoading?: boolean;
  loadingColor?: string;
  loadingSpinnerSize?: string | number;
}

const Button: FC<CustomButtonProps> = ({
  isLoading = false,
  loadingColor,
  loadingSpinnerSize = 40,
  children,
  className,
  ...props
}) => {
  if (isLoading)
    return (
      <button
        disabled
        type="button"
        {...props}
        className={`flex items-center justify-center ${className} active:scale-100 cursor-wait`}
      >
        <SvgSpinier style={{ width: loadingSpinnerSize }} fill={loadingColor} />
      </button>
    );

  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
