import CartBadges from '@/components/common/CartBadge';
import { showCartHandler } from '@/redux/features/cartSlice';
import { useAppDispatch } from '@/redux/hooks';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlinePersonOutline } from 'react-icons/md';

//-----------------------------------

//-----------------------------------

const ProfileButtons = () => {
  //STATE
  // const { cartTotalQuantity } = useAppSelector(state => state.cartSlice);

  //HOOKS
  const dispatch = useAppDispatch();

  //HANDLERS
  const handleCart = () => {
    dispatch(showCartHandler());
  };

  return (
    <div className="flex items-center md:space-x-4 space-x-2 ml-[30px]">
      <Link href="/auth">
        <button className="flex items-center w-full max-w-[160px] min-w-[160px]">
          <MdOutlinePersonOutline size={24} className="text-primary" />
          <p className="ml-[6px] text-[16px] font-bold text-[#666666]">
            Sign Up/Sign In
          </p>
        </button>
      </Link>

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
