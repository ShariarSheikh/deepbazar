// import { Role } from '@/app/auth/utils';
// import CartBadges from '@/components/common/CartBadge';
// import { useAppSelector } from '@/redux/hooks';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { AiOutlineHeart } from 'react-icons/ai';
// import { FiShoppingCart } from 'react-icons/fi';
// import { MdOutlinePersonOutline } from 'react-icons/md';

// const ProfileButtons = () => {
//   const { user } = useAppSelector(state => state.authSlice);
//   const { cartTotalQuantity } = useAppSelector(state => state.cartSlice);
//   const router = useRouter();

//   const handleNavigation = (path: string = '') => {
//     if (!user?._id && path === 'wishlist') return router.push('/auth');

//     if (user?.role.includes(Role.USER)) {
//       return router.push(`/user${path && `/${path}`}`);
//     }

//     if (user?.role.includes(Role.SELLER)) {
//       return router.push('/seller');
//     }
//   };

//   return (
//     <div className="flex items-center space-x-4 md:space-x-5">
//       {/* Wishlist Button */}
//       <button
//         onClick={() => handleNavigation('wishlist')}
//         className="group relative flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
//       >
//         <AiOutlineHeart
//           size={20}
//           className="text-primary group-hover:text-primary-dark"
//         />
//         <span className="text-sm font-medium text-gray-700 hidden md:block">
//           Wishlist
//         </span>
//         {/* <CartBadges number={0} className="absolute -top-1 -right-1" /> */}
//       </button>

//       {/* Cart Button */}
//       <button
//         onClick={() => handleNavigation('cart')}
//         className="group relative flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
//       >
//         <FiShoppingCart
//           size={20}
//           className="text-primary group-hover:text-primary-dark"
//         />
//         <span className="text-sm font-medium text-gray-700 hidden md:block">
//           Cart
//         </span>
//         {cartTotalQuantity > 0 ? (
//           <CartBadges
//             number={cartTotalQuantity}
//             className="absolute -top-1 -right-1"
//           />
//         ) : null}
//       </button>

//       {/* User Profile Button */}
//       {user?._id ? (
//         <button
//           onClick={() => handleNavigation()}
//           className="group flex items-center space-x-2 transition-all"
//         >
//           <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors">
//             {user.imgUrl ? (
//               <Image
//                 fill
//                 src={user.imgUrl}
//                 alt="Profile picture"
//                 className="object-cover"
//               />
//             ) : (
//               <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark text-white font-medium flex items-center justify-center rounded-full">
//                 {user.firstName.charAt(0).toUpperCase()}
//               </div>
//             )}
//           </div>
//           <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors hidden md:block">
//             Hi, {user.firstName}
//           </span>
//         </button>
//       ) : (
//         <Link href="/auth">
//           <button className="group flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
//             <MdOutlinePersonOutline
//               size={20}
//               className="text-primary group-hover:text-primary-dark"
//             />
//             <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
//               Login
//             </span>
//           </button>
//         </Link>
//       )}
//     </div>
//   );
// };

// export default ProfileButtons;

import { Role } from '@/app/auth/utils';
import CartBadges from '@/components/common/CartBadge';
import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { MdOutlinePersonOutline } from 'react-icons/md';

const ProfileButtons = () => {
  const { user } = useAppSelector(state => state.authSlice);
  const { totalQuantity } = useAppSelector(state => state.cartSlice);
  const router = useRouter();

  const handleNavigation = (path: string = '') => {
    if (!user?._id && path === 'wishlist') return router.push('/auth');
    if (user?.role.includes(Role.USER))
      return router.push(`/user${path && `/${path}`}`);
    if (user?.role.includes(Role.SELLER)) return router.push('/seller');
  };

  return (
    <div className="flex items-center space-x-2 md:space-x-3">
      {/* Wishlist Button - Compact */}
      <button
        onClick={() => handleNavigation('wishlist')}
        className="group relative p-2 rounded-lg hover:bg-gray-50 transition-colors"
        aria-label="Wishlist"
      >
        <AiOutlineHeart
          size={20}
          className="text-primary group-hover:text-primary-dark"
        />
        {/* <CartBadges number={0} className="absolute -top-1 -right-1" /> */}
      </button>

      {/* Cart Button - Compact */}
      <button
        onClick={() => handleNavigation('cart')}
        className="group relative p-2 rounded-lg hover:bg-gray-50 transition-colors"
        aria-label="Cart"
      >
        <FiShoppingCart
          size={20}
          className="text-primary group-hover:text-primary-dark"
        />
        {totalQuantity > 0 && (
          <CartBadges
            number={totalQuantity}
            className="absolute -top-1 -right-1"
          />
        )}
      </button>

      {/* User Profile - Compact */}
      {user?._id ? (
        <button
          onClick={() => handleNavigation()}
          className="group flex items-center space-x-1 p-1 md:p-2 rounded-lg hover:bg-gray-50 transition-colors"
          aria-label="Profile"
        >
          <div className="relative h-8 w-8 md:h-9 md:w-9 rounded-full overflow-hidden border border-transparent group-hover:border-primary">
            {user.imgUrl ? (
              <Image
                fill
                src={user.imgUrl}
                alt="Profile"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark text-white font-medium flex items-center justify-center rounded-full">
                {user.firstName.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
          <span className="text-sm font-medium text-gray-700 group-hover:text-primary hidden md:block">
            {user.firstName}
          </span>
        </button>
      ) : (
        <Link href="/auth">
          <button
            className="group flex items-center space-x-1 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Login"
          >
            <MdOutlinePersonOutline
              size={20}
              className="text-primary group-hover:text-primary-dark"
            />
            <span className="text-sm font-medium text-gray-700 group-hover:text-primary hidden md:block">
              Login
            </span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default ProfileButtons;
