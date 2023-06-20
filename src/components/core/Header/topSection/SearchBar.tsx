import { useAppDispatch } from '@/redux/hooks';
import { usePathname, useRouter } from 'next/navigation';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { categoryList } from '..';

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
  const [categoryName, setCategoryName] = useState<string>('All');
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
  const onClickCategory = (catName: string, selectedCat: string) => {
    setCategoryName(catName);
    setSelectedCategory(selectedCat);
    setIsShowCategory(false);
  };

  type searchHandlerProps = KeyboardEvent<HTMLInputElement>;

  const searchHandler = (e: searchHandlerProps) => {
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
    <div className="flex-1 relative">
      <form className="w-full flex justify-between h-[42px] bg-gray-200">
        <div
          className="relative text-base h-full max-w-[200px] flex items-center justify-center"
          onClick={() => setIsShowCategory(!isShowCategory)}
          ref={menuRef}
          onBlur={() => setIsShowCategory(false)}
          tabIndex={0}
        >
          <div className="px-2 w-full flex justify-center cursor-pointer items-center border">
            <p className="max-w-[100px] line-clamp-1 text-sm">{categoryName}</p>
            <RiArrowDropDownFill />
          </div>

          <div
            className="w-[240px] h-auto max-w-[240px] max-h-[520px] text-black absolute left-0 top-12 drop-shadow-xl bg-white pt-2 z-50"
            hidden={!isShowCategory}
            onClick={e => e.stopPropagation()}
          >
            {categoryList.map(({ id, category, link }) => (
              <li
                className="text-sm cursor-pointer h-8 border-b border-gray-200 px-3 flex items-center"
                key={id}
                onClick={() => onClickCategory(category, link)}
              >
                {category}
              </li>
            ))}
          </div>
        </div>
        <input
          className="flex-1 border-t border-b pl-3 outline-none"
          type="text"
          placeholder="Search"
          ref={searchInputRef}
          onKeyPress={e => e.key === 'Enter' && searchHandler(e)}
        />
        <button
          //@ts-expect-error => this searchHandler used on input and button, the input has key button dose't,
          onClick={searchHandler}
          className="w-10 flex items-center justify-center border cursor-pointer bg-black group"
        >
          <IoSearchOutline className="text-yellow-400 font-bold text-xl group-hover:scale-125 transform ease-out transition duration-200" />
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
