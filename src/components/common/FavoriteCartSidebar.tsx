import {
  clearFVCart,
  removeFavoriteItem,
  showFavoriteCartHandler,
} from '@/redux/features/favoriteCartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const AddedFVCart = () => {
  const { items, isShowFavoriteCart } = useAppSelector(
    state => state.favoriteCartSlice
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    isShowFavoriteCart
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isShowFavoriteCart]);

  return (
    <div
      className={`fixed top-0 flex justify-between right-0 z-30 ${
        isShowFavoriteCart ? 'w-full h-screen' : 'w-0 h-0'
      }`}
    >
      <div
        className={`h-screen bg-black bg-opacity-30 w-auto flex-grow`}
        onClick={() => dispatch(showFavoriteCartHandler())}
      />

      <div
        className={`h-screen ${
          isShowFavoriteCart ? 'w-[320px] md:min-w-[320px]' : 'w-0'
        } transform-all duration-300 bg-white flex flex-col overflow-hidden relative`}
      >
        <div className="h-20 flex justify-between items-center pl-3 border-b border-gray-300 pb-2">
          <AiOutlineClose
            onClick={() => dispatch(showFavoriteCartHandler())}
            className="text-gray-600 w-8 h-8 cursor-pointer border rounded-full"
          />
          <p className="text-xl pr-6">Favorite Items</p>
        </div>

        {items.length === 0 && (
          <p className="p-10 text-center">No Items Exits</p>
        )}

        {items.length > 0 && (
          <div className="p-2 w-full">
            {items.map(itm => (
              <div
                key={itm.id}
                className="w-full h-[110px] flex items-center border-b border-gray-100"
              >
                <AiOutlineClose
                  className="w-6 h-6 text-red-500 border border-red-500 rounded-full cursor-pointer ml-2"
                  onClick={() => dispatch(removeFavoriteItem(itm))}
                />
                <div className="w-full h-[80px] flex items-center ml-3">
                  <div className="min-w-[80px] h-[80px] bg-gray-200 p-2 rounded-lg">
                    <img
                      src={itm?.image}
                      alt="item"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="h-full">
                    <h1 className="text-xl line-clamp-1 mx-3">{itm?.title}</h1>
                    <p className="font-semibold text-roboto mt-1 text-yellow-600 ml-3">
                      ৳{itm?.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div
            className="absolute bottom-0 w-full bg-[#a52a2a] text-center flex items-center h-10 text-white cursor-pointer justify-center"
            onClick={() => dispatch(clearFVCart())}
          >
            Clear
          </div>
        )}
      </div>
    </div>
  );
};

export default AddedFVCart;
