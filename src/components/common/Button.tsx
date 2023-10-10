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
  ...props
}) => {
  if (isLoading)
    return (
      <button
        disabled
        type="button"
        {...props}
        className={`flex items-center justify-center ${props.className} active:scale-100 cursor-wait`}
      >
        <SvgSpinier style={{ width: loadingSpinnerSize }} fill={loadingColor} />
      </button>
    );

  return <button {...props}>{children}</button>;
};

export default Button;
