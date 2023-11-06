import { productTags } from '@/app/(dashboard)/seller/products/add-new/utils';
import HighlightMatchingText from '@/components/common/HighlightMatchingText';
import { useGetCategoryQuery } from '@/redux/services/categoryApi';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiArrowUpLeft, FiSearch } from 'react-icons/fi';

//-------------------------------------------------------

//-------------------------------------------------------

const SearchBar = () => {
  const { data, isSuccess, isLoading } = useGetCategoryQuery();
  //STATE
  const [searchInput, setSearchInput] = useState<string>('');
  const [isShowResult, setIsShowResult] = useState<boolean>(false);
  const [isShowCategory, setIsShowCategory] = useState<boolean>(false);

  //HOOKS
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultContainerRef = useRef(null);

  // CATEGORY HANDLERS---------------------------------------
  const showCategoryHandler = (): void => {
    setIsShowResult(false);
    setIsShowCategory(true);
  };
  const hideCategoryHandler = (): void => setIsShowCategory(false);
  // CATEGORY HANDLERS---------------------------------------

  // INPUT HANDLERS------------------------------------------------------------
  const onSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    setIsShowResult(!!event.target.value?.trim());
  };
  const hideResult = (
    element: ChangeEvent<HTMLInputElement> | HTMLDivElement
  ): void => {
    if (resultContainerRef.current === element) return undefined;
    return setIsShowResult(false);
  };
  const handleFocus = () => {
    if (!searchInput?.trim()) return undefined;
    setIsShowResult(true);
  };
  // INPUT HANDLERS------------------------------------------------------------

  useEffect(() => {
    setIsShowResult(false);
    setIsShowCategory(false);
    return undefined;
  }, [pathname]);

  return (
    <AnimatePresence>
      <ClickAwayListener onClickAway={() => setIsShowResult(false)}>
        <div className="relative w-full max-w-full lg:max-w-[556px] h-[48px]">
          <form
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              event.preventDefault();
            }}
            style={
              isShowResult
                ? { border: '2px solid #2589b5' }
                : { border: '2px solid transparent' }
            }
            className="w-full flex items-center justify-between h-[48px] bg-[#F3F9FB] rounded-[6px] relative"
          >
            <FiSearch className="text-primary absolute left-[16px] z-0 hidden md:block" />
            <input
              className="max-w-[90%] w-full md:flex-1 pl-2 md:pl-[36px] outline-none text-[14px] bg-transparent z-10"
              type="text"
              placeholder="Search DeepBazar..."
              ref={searchInputRef}
              value={searchInput}
              onChange={onSearchHandler}
              onFocus={handleFocus}
            />

            <div className="w-[40px] h-[20px] relative">
              <button
                type="button"
                onClick={() => {
                  if (isShowCategory) return undefined;
                  showCategoryHandler();
                }}
                className="w-10 flex items-center justify-center cursor-pointer group"
              >
                <AiOutlineUnorderedList className="text-primary font-bold text-xl group-hover:scale-110 active:scale-95 transform ease-out transition duration-200" />
              </button>
            </div>
          </form>

          {isShowResult && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: -10 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              className="h-full w-full fixed inset-0"
              ref={resultContainerRef}
              onClick={e => hideResult(e.currentTarget)}
            >
              <div
                onClick={() => setIsShowResult(false)}
                className="w-full h-full fixed inset-0 top-[122px] bg-[#0000004a] z-10"
              />
              <SearchResult
                searchInput={searchInput}
                hideResult={() => setIsShowResult(false)}
              />
            </motion.div>
          )}

          {isShowCategory && (
            <ClickAwayListener onClickAway={hideCategoryHandler}>
              <motion.div
                initial={{ opacity: 0, y: -20, x: 0 }}
                animate={{ opacity: 1, y: -10, x: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                className="h-full w-full mt-2 z-50 right-0 relative bg-[#ffffff] border border-[#EDEDED] text-gray-400 max-w-[507px] min-h-[315px] rounded-[10px]"
              >
                <div className="w-full h-full">
                  <h1 className="text-black text-opacity-80 text-[20px] font-poppins font-medium border-b pb-[10px] mt-[20px] pl-[15px]">
                    Categories
                  </h1>

                  {isLoading ? (
                    <span className="text-center p-4 text-sm text-gray-600">
                      Loading...
                    </span>
                  ) : (
                    <ul className="mt-[8px] w-full flex flex-wrap justify-between gap-2 items-center p-[12px]">
                      {isSuccess &&
                        data?.data.map(category => (
                          <Link
                            key={category._id}
                            href={{
                              pathname: '/shop',
                              query: {
                                category: category.pageUrl,
                              },
                            }}
                            className="h-[58px] w-[48%]"
                          >
                            <li className="w-full h-full rounded-[6px] flex items-center p-2 justify-start bg-[#F3F9FB] group cursor-pointer hover:bg-[#e9f4f8] duration-150">
                              <div className="w-[50px] h-[50px] rounded-[6px] overflow-hidden">
                                <img
                                  className="w-full h-full object-cover"
                                  src={category.imgUrl}
                                  alt={category.name}
                                />
                              </div>
                              <div className="ml-[8px]">
                                <h1 className="text-primary text-[12px] md:text-base line-clamp-1 md:list-none">
                                  {category.name}
                                </h1>
                                <p className="text-[10px] md:text-[12px] text-gray-500">
                                  {category.totalItems} Item Available
                                </p>
                              </div>
                            </li>
                          </Link>
                        ))}
                      <Link
                        href={{
                          pathname: '/shop',
                        }}
                        className="h-[58px] w-[48%]"
                      >
                        <li className="w-full h-full rounded-[6px] flex items-center p-2 justify-center bg-[#F3F9FB] cursor-pointer hover:bg-[#e9f4f8] duration-150">
                          <h1 className="text-primary text-[12px] md:text-base line-clamp-1 md:list-none underline">
                            More...
                          </h1>
                        </li>
                      </Link>
                    </ul>
                  )}
                </div>
              </motion.div>
            </ClickAwayListener>
          )}
        </div>
      </ClickAwayListener>
    </AnimatePresence>
  );
};

export default SearchBar;

interface SearchResultProps {
  hideResult: () => void;
  searchInput: string;
}

const SearchResult = ({ searchInput, hideResult }: SearchResultProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const router = useRouter();

  function findParentCategory(childTag: string) {
    const matchingCategories = [];

    const normalizedChildTag = childTag.toLowerCase();

    for (const parentCategory in productTags) {
      const tagsInCategory = productTags[parentCategory].map(tag =>
        tag.toLowerCase()
      );

      for (const tag of tagsInCategory) {
        if (tag.includes(normalizedChildTag)) {
          matchingCategories.push(parentCategory);
          break;
        }
      }
    }

    return matchingCategories;
  }

  const handleInputChange = () => {
    const matchingTags = findParentCategory(searchInput);
    setSuggestions(matchingTags);
  };

  const linkClickHandler = (path: string) => {
    router.push(`/shop?category=${path}`);
    hideResult();
  };

  useEffect(() => {
    handleInputChange();
  }, [searchInput]);

  return (
    <div className="w-full h-full mt-[122px] overflow-y-auto invisible-scrollbar visible-scrollbar-onHover z-50 relative bg-[#ffffff] border border-[#EDEDED] text-gray-400 max-w-full lg:max-w-[446px] min-w-[200px] min-h-[370px] max-h-[370px] mx-auto overflow-hidden rounded-[6px]">
      <ul className="w-full h-full p-[10px]">
        <h1 className="text-[#91929D] text-[14px]">Your searches tags</h1>
        {suggestions.length > 0 &&
          suggestions.map((result, i) => (
            <div key={i}>
              <div
                onClick={() => linkClickHandler(result)}
                className=" w-full h-[40px] mb-[3px] pl-[8px] flex items-center justify-between text-[#23263B] hover:bg-[#F3F9FB] rounded-[6px] cursor-pointer"
              >
                <div className="flex items-center h-full">
                  <FiSearch className="mr-[8px] text-[20px]" />
                  <h1 className="text-[14px] pt-[3px]">{result}</h1>
                </div>
                <FiArrowUpLeft className="ml-[8px] text-[20px]" />
              </div>
              <ul className="pl-3 flex space-x-2 items-center text-sm pb-2">
                {productTags[result].map((childTag, i) => (
                  <li key={i}>
                    {HighlightMatchingText(childTag, searchInput)}
                    {i !== productTags[result].length ? ',' : ''}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        {suggestions.length === 0 && (
          <li className="text-center text-sm text-gray-600 py-3">
            Nothing Found
          </li>
        )}
      </ul>
    </div>
  );
};
