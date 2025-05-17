import Input from '@/components/common/Input';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';
import navLinks, { SellerSidebarActionList } from './HamburgerMenu/navLinks';
import { SearchResult } from './SearchResult';

// ----------------------------------------------

// ----------------------------------------------

interface IProps {
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
}

function SearchBar({ isShow, setIsShow }: IProps) {
  const [input, setInput] = useState<string>('');
  const [isShowResult, setIsShowResult] = useState<boolean>(false);
  const [searchResult, setSearchResult] =
    useState<SellerSidebarActionList[]>(navLinks);

  const resultContainerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { push } = useRouter();

  // --------------------------------- FILTER SEARCH HANDLER
  const searchHandler = (searchText: string): void => {
    const searchFilterLinks = navLinks.filter(links =>
      links.searchText
        .split('/')
        .join('')
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setSearchResult(searchFilterLinks);
  };

  // --------------------------------- INPUT HANDLER
  const inputHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);

    searchHandler(event.target.value);
    if (isShowResult) return undefined;
    return setIsShowResult(true);
  };

  // ---------------------------------RESULT LINK ONCLICK HANDLER
  const resultLinkOnClickHandler = (
    link: string
  ): Promise<boolean> | undefined => {
    if (!link) return undefined;
    setIsShowResult(false);
    push(link);
  };

  // --------------------------------- SHOW AND HIDE RESULT COMPONENT
  const showResult = (): void => {
    setIsShowResult(prevState => !prevState);
  };

  const hideResult = (
    element: ChangeEvent<HTMLInputElement> | HTMLDivElement
  ): void => {
    if (resultContainerRef.current === element) return undefined;
    return setIsShowResult(false);
  };

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div className="w-full h-full absolute top-0 flex flex-col z-[60]">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="w-full min-h-[92px] flex items-center px-10 bg-white backdrop-blur-sm shadow-lg rounded-b-md bg-white/40"
          >
            <AiOutlineSearch className="text-gray-700 w-6 h-6" />
            <Input
              placeholder="Search..."
              className="w-full h-full bg-transparent focus:bg-primaryLight focus:bg-opacity-[24%] pl-2 outline-none placeholder:font-semibold text-lg font-semibold text-gray-800 rounded-md"
              containerClassName="h-12 w-full"
              value={input}
              autoFocus
              ref={inputRef}
              onClick={showResult}
              onChange={inputHandler}
            />
          </motion.div>
          <div
            role="presentation"
            className="z-40 cursor-default w-full fixed bottom-0 min-h-[calc(100%-142px)] bg-transparent"
            onClick={() => {
              setIsShowResult(false);
              setIsShow(prevState => !prevState);
              setInput('');
            }}
          />

          {isShowResult && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              className="h-full w-full mt-2 px-10 z-50 relative"
              ref={resultContainerRef}
              onClick={e => hideResult(e.currentTarget)}
            >
              <div
                role="presentation"
                onClick={e => hideResult(e.currentTarget)}
                className="absolute cursor-pointer active:scale-95 right-[44px] top-1 rounded-full bg-gray-500 bg-opacity-10 hover:bg-opacity-20 w-7 h-7 flex items-center justify-center duration-150"
              >
                <IoCloseOutline className="w-5 h-5" />
              </div>
              <SearchResult
                resultLinkOnClickHandler={resultLinkOnClickHandler}
                searchText={input}
                searchResult={searchResult}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SearchBar;
