import { FC } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface CartQuantityButtonsProps {
  quantity: number;
  increment: () => void;
  decrement: () => void;
}

const CartQuantityButtons: FC<CartQuantityButtonsProps> = ({
  quantity,
  increment,
  decrement,
}) => {
  return (
    <div className="w-full max-w-[200px] flex items-center space-x-1">
      <div
        onClick={() => decrement()}
        className="active:scale-125 w-[32px] h-[32px] duration-200 rounded-[6px] border bg-[#F3F9FB] flex items-center justify-center cursor-pointer"
      >
        <AiOutlineMinus className="text-gray-600" />
      </div>
      <div className="relative w-8 h-full flex justify-center items-center">
        <span className="text-gray-600 flex items-center justify-center">
          {quantity}
        </span>
      </div>
      <div
        onClick={() => increment()}
        className="active:scale-125 w-[32px] h-[32px] duration-200 rounded-[6px] border bg-[#F3F9FB] flex items-center justify-center cursor-pointer"
      >
        <AiOutlinePlus className="text-gray-600" />
      </div>
    </div>
  );
};

export default CartQuantityButtons;
