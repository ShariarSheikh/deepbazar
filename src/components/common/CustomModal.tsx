import React, { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  boxStyle?: React.CSSProperties;
  children: ReactNode;
  boxContainerClassName?: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  boxStyle,
  boxContainerClassName = '',
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50`}
      onClick={onClose}
    >
      <div
        className={`bg-white px-[12px] pb-6 overflow-y-auto invisible-scrollbar visible-scrollbar-onHover rounded-lg shadow-lg ${boxContainerClassName}`}
        style={boxStyle}
        onClick={e => e.stopPropagation()}
      >
        <div className="w-full h-12 flex -mr-6 justify-end items-center relative">
          <button
            className="bg-primaryLight p-2 w-8 h-8 rounded-full flex items-center justify-center active:scale-95 duration-150"
            onClick={onClose}
          >
            <AiOutlineClose className="text-gray-600" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
