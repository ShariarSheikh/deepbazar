import CartBadges from '@/components/common/CartBadge';
import { showCartHandler } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlinePersonOutline } from 'react-icons/md';

//-----------------------------------

//-----------------------------------

const ProfileButtons = () => {
  const dispatch = useAppDispatch();

  const handleCart = () => dispatch(showCartHandler());
  const isUser = true;

  return (
    <div className="flex items-center md:space-x-4 space-x-2 ml-[30px]">
      {isUser ? (
        <Link href="/seller">
          <button className="flex items-center w-full max-w-[160px] min-w-[160px]">
            <div className="h-[40px] w-[40px] min-w-[40px] min-h-[40px] rounded-full overflow-hidden relative">
              {true ? (
                <Image
                  fill
                  src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                  alt="user picture"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-primary text-white font-medium flex items-center justify-center">
                  {`Shariar Sheikh`.charAt(0)}
                </div>
              )}
            </div>
            <p className="pl-[5px] text-[16px] text-start font-bold text-[#666666] w-full max-w-[120px] line-clamp-1">
              Shariar Sheikh
            </p>
          </button>
        </Link>
      ) : (
        <Link href="/auth">
          <button className="flex items-center w-full max-w-[160px] min-w-[160px]">
            <MdOutlinePersonOutline size={24} className="text-primary" />
            <p className="ml-[6px] text-[16px] font-bold text-[#666666]">
              Sign Up/Sign In
            </p>
          </button>
        </Link>
      )}

      <button
        onClick={handleCart}
        className="flex items-center w-full relative"
      >
        <FiShoppingCart size={24} className="text-primary" />
        <div className="absolute right-[35px] -top-[7px] ">
          <CartBadges number={6} />
        </div>

        <p className="ml-[6px] text-[16px] font-bold text-[#666666]">Cart</p>
      </button>
    </div>
  );
};

export default ProfileButtons;
