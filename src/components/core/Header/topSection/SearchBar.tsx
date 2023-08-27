import { useAppDispatch } from '@/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent, useEffect, useRef, useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

//-------------------------------------------------------
interface SearchQuery {
  category: string;
  keyword: string;
}
//-------------------------------------------------------

const SearchBar = () => {
  //STATE
  const [isShowResult, setIsShowResult] = useState<boolean>(false);
  const [isShowCategory, setIsShowCategory] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('aps');
  const [searchQuery, setSearchQuery] = useState<SearchQuery>({
    category: '',
    keyword: '',
  });

  //HOOKS
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // HANDLERS
  type searchHandlerProps = React.MouseEvent<HTMLButtonElement, MouseEvent>;
  const searchHandler = (e: searchHandlerProps): void => {
    e.preventDefault();
    const text = searchInputRef.current?.value.trim();

    if (!text) {
      router.push(`/shop?cat=${selectedCategory}&keyword=""`);
      setIsShowResult(false);
      //   dispatch(clear_searched_product_state());
      return undefined;
    }
    setIsShowResult(true);

    // dispatch(
    //   fetchSearchProduct({
    //     category: selectedCategory,
    //     keyword: text,
    //     page: "1",
    //   })
    // );

    setSearchQuery({
      category: selectedCategory,
      keyword: text,
    });
  };

  // USE EFFECTS
  useEffect(() => {
    setIsShowResult(false);
    // dispatch(clear_searched_product_state());
    return undefined;
  }, [pathname]);

  // HTML
  return (
    <div className="relative w-full max-w-[507px]">
      <form className="w-full flex items-center justify-between h-[48px] bg-[#F3F9FB] rounded-[10px] relative">
        <FiSearch className="text-primary absolute left-[16px] z-0" />
        <input
          className="flex-1 pl-[36px] outline-none text-[14px] bg-transparent z-10"
          type="text"
          placeholder="Search category, product name and more..."
          ref={searchInputRef}
          //@ts-expect-error => this searchHandler used on input and button, the input has key button dose't,
          onKeyPress={e => e.key === 'Enter' && searchHandler(e)}
        />
        <button
          //@ts-expect-error => this searchHandler used on input and button, the input has key button dose't,
          onClick={searchHandler}
          className="w-10 flex items-center justify-center cursor-pointer group"
        >
          <AiOutlineUnorderedList className="text-primary font-bold text-xl group-hover:scale-110 active:scale-95 transform ease-out transition duration-200" />
        </button>
      </form>

      {/* {isShowResult && (
        <div className="z-40 absolute top-[42px] min-h-[250px] p-4 border-t border-gray-300 max-h-[500px] scrollbar-hide overflow-y-scroll bg-white shadow-xl rounded-md overflow-hidden w-full left-0">
          <div className="pt-10 w-full h-full relative">
            <IoClose
              onClick={() => setIsShowResult(false)}
              className="text-gray-600 absolute right-3 top-2 cursor-pointer w-6 h-6"
            />

            {status === 'pending' && (
              <>
                <div className="w-full h-10 relative mb-2 px-6 rounded-xl overflow-hidden bg-gray-100 animate-pulse" />
                <div className="w-full h-10 relative mb-2 px-6 rounded-xl overflow-hidden bg-gray-100 animate-pulse" />
                <div className="w-full h-10 relative mb-2 px-6 rounded-xl overflow-hidden bg-gray-100 animate-pulse" />
                <div className="w-full h-10 relative mb-2 px-6 rounded-xl overflow-hidden bg-gray-100 animate-pulse" />
              </>
            )}

            {status === 'rejected' && (
              <div className="w-full h-full pt-10 relative mb-2 px-6 rounded-xl text-red-500">
                {error}
              </div>
            )}

            {status === 'success' && products.length === 0 && (
              <div className="p-10 text-center">Nothing found</div>
            )}

            {status === 'success' && products.length > 0 && (
              <div className="w-full">
                {products?.slice(0, 12).map(pd => (
                  <div
                    onClick={() => router.push(`/product/${pd?.product_id}`)}
                    key={pd?.product_id}
                    className="w-full cursor-pointer flex p-1 items-center border-b border-gray-100 space-x-3 mb-3"
                  >
                    <img
                      className="w-[50px] h-10 object-contain"
                      src={pd.product_main_image_url}
                      alt={pd.product_id}
                    />
                    <div className="h-full">
                      <h1 className="text-gray-600 line-clamp-2">
                        {pd.product_title}
                      </h1>

                      {pd?.app_sale_price && (
                        <p className="text-gray-600 font-medium text-sm line-clamp-1">
                          Price: {pd?.app_sale_price_currency}
                          {pd?.app_sale_price}
                        </p>
                      )}

                      {pd?.evaluate_rate && (
                        <p className="text-yellow-600 text-sm line-clamp-1">
                          Rete: {pd?.evaluate_rate}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                {status === 'success' && products.length > 0 && (
                  <button className="h-8 w-full cursor-pointer bg-blue-600 text-white uppercase">
                    <Link
                      href={`/shop?cat=${searchQuery.category}&keyword=${searchQuery.keyword}`}
                    >
                      View All
                    </Link>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SearchBar;
