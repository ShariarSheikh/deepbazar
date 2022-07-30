import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFVCart,
  getFavoriteCartState,
  isFavoriteOpen,
  removeFavoriteItem,
} from "../../../redux/favoriteProductSlice/favoriteProductSlice";
import { AiOutlineClose } from "react-icons/ai";

const AddedFVCart = () => {
  const { items, isOpen } = useSelector(getFavoriteCartState);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);

  return (
    <div
      className={`w-full fixed top-0 min-h-screen flex justify-between right-0 z-30 ${
        isOpen ? "w-full" : "w-0"
      }`}
    >
      <div
        className={`h-screen bg-black bg-opacity-50 w-auto flex-grow`}
        onClick={() => dispatch(isFavoriteOpen())}
      />

      <div
        className={`h-screen ${
          isOpen ? "w-[400px] md:min-w[400px]" : "w-0"
        } transform-all duration-300 bg-white flex flex-col overflow-hidden relative`}
      >
        <div className="h-20 flex justify-between items-center pl-3 border-b border-gray-300 pb-2">
          <AiOutlineClose
            onClick={() => dispatch(isFavoriteOpen())}
            className="text-gray-600 w-8 h-8 cursor-pointer border rounded-full"
          />
          <p className="text-xl pr-6">Favorite Items</p>
        </div>

        {items.length === 0 && (
          <p className="p-10 text-center">No Items Exits</p>
        )}

        {items.length > 0 && (
          <div className="p-2">
            {items.map((itm) => (
              <div
                key={itm.id}
                className="w-full h-12 flex items-center border-b border-gray-100"
              >
                <img
                  src={itm?.images?.slice(0, 1)}
                  alt="code"
                  className="w-[50px] h-[40px] object-contain"
                />
                <h1 className="text-xl line-clamp-1 mx-3">{itm?.title}</h1>
                <AiOutlineClose
                  className="w-6 h-6 text-gray-500 cursor-pointer"
                  onClick={() => dispatch(removeFavoriteItem(itm))}
                />
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div
            className="absolute bottom-0 w-full bg-black text-center flex items-center h-10 text-white cursor-pointer justify-center"
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
