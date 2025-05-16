import React, { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  style?: React.CSSProperties;
  children: ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isOpen,
  onClose,
  style,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50`}
      onClick={onClose}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg`}
        style={style}
        onClick={e => e.stopPropagation()}
      >
        <button className="absolute top-0 right-0 p-2" onClick={onClose}>
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
