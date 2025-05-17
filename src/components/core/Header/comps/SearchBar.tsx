import { useGetCategoryQuery } from '@/redux/services/categoryApi';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiArrowUpRight, FiSearch, FiX } from 'react-icons/fi';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const { data, isSuccess, isLoading } = useGetCategoryQuery();

  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultContainerRef = useRef<HTMLDivElement>(null);

  // Toggle category dropdown
  const toggleCategories = () => {
    setShowCategories(!showCategories);
    setShowResults(false);
  };

  // Handle search input changes
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    setShowResults(!!value.trim());
  };

  // Clear search input
  const clearSearch = () => {
    setSearchInput('');
    setShowResults(false);
    searchInputRef.current?.focus();
  };

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      // Add to recent searches (limit to 5 items)
      setRecentSearches(prev => [
        searchInput,
        ...prev.filter(item => item !== searchInput).slice(0, 4),
      ]);
      // Perform search action here
      // eslint-disable-next-line no-console
      console.log('Searching for:', searchInput);
    }
  };

  // Close dropdowns when navigating
  useEffect(() => {
    setShowResults(false);
    setShowCategories(false);
  }, [pathname]);

  return (
    <div className="relative w-full max-w-full lg:max-w-[646px]">
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center w-full h-12 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary transition-colors focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent"
      >
        {/* Search Icon */}
        <FiSearch className="ml-4 text-gray-400" />

        {/* Search Input */}
        <input
          ref={searchInputRef}
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          onFocus={() => searchInput.trim() && setShowResults(true)}
          placeholder="Search for products, brands, and more..."
          className="flex-1 px-3 py-2 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400"
        />

        {/* Clear Button (visible when input has value) */}
        {searchInput && (
          <button
            type="button"
            onClick={clearSearch}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX size={18} />
          </button>
        )}

        {/* Category Toggle Button */}
        <button
          type="button"
          onClick={toggleCategories}
          className="flex items-center justify-center h-full px-4 border-l border-gray-200 text-primary hover:bg-gray-100 rounded-r-xl transition-colors"
        >
          <AiOutlineUnorderedList className="text-xl" />
        </button>
      </form>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {showResults && (
          <ClickAwayListener onClickAway={() => setShowResults(false)}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              ref={resultContainerRef}
              className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 z-50 overflow-hidden"
            >
              <div className="p-4">
                {recentSearches.length > 0 && (
                  <>
                    <h3 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                      Recent Searches
                    </h3>
                    <ul className="space-y-1 mb-4">
                      {recentSearches.map((search, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                          onClick={() => {
                            setSearchInput(search);
                            searchInputRef.current?.focus();
                          }}
                        >
                          <div className="flex items-center">
                            <FiSearch className="mr-3 text-gray-400" />
                            <span className="text-sm text-gray-800">
                              {search}
                            </span>
                          </div>
                          <FiArrowUpRight className="text-gray-400" />
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Suggested Results */}
                <h3 className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  Popular Searches
                </h3>
                <ul className="space-y-1">
                  {['Smartphones', 'Laptops', 'Headphones', 'Watches'].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                        onClick={() => {
                          setSearchInput(item);
                          searchInputRef.current?.focus();
                        }}
                      >
                        <div className="flex items-center">
                          <FiSearch className="mr-3 text-gray-400" />
                          <span className="text-sm text-gray-800">{item}</span>
                        </div>
                        <FiArrowUpRight className="text-gray-400" />
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          </ClickAwayListener>
        )}
      </AnimatePresence>

      {/* Categories Dropdown */}
      <AnimatePresence>
        {showCategories && (
          <ClickAwayListener onClickAway={() => setShowCategories(false)}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full right-0 mt-1 w-full lg:w-72 bg-white rounded-lg shadow-lg z-50 border border-gray-100"
            >
              {/* Dropdown Header */}
              <div className="p-3 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-gray-700 flex items-center">
                  <AiOutlineUnorderedList className="mr-2 text-primary" />
                  Browse Categories
                </h3>
              </div>

              {/* Categories List */}
              {isLoading ? (
                <span className="text-center p-4 text-sm text-gray-600">
                  Loading...
                </span>
              ) : (
                <div className="p-2 max-h-96 overflow-y-auto">
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
                        className="group flex items-center p-2 rounded-md hover:bg-primary/5 transition-colors"
                        onClick={() => setShowCategories(false)}
                      >
                        {/* Category Icon */}
                        <div className="w-8 h-8 min-w-[32px] mr-3 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                          <img
                            src={category.imgUrl}
                            alt={category.name}
                            className="w-5 h-5 object-contain"
                          />
                        </div>

                        {/* Category Info */}
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-800 group-hover:text-primary truncate transition-colors">
                            {category.name}
                          </h4>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {category.totalItems} items
                          </p>
                        </div>

                        {/* Arrow Indicator */}
                        <FiArrowUpRight className="ml-2 text-gray-400 group-hover:text-primary transition-colors" />
                      </Link>
                    ))}

                  {/* View All Link */}
                  <Link
                    href="/shop"
                    className="block mt-1 p-2 text-center text-sm font-medium text-primary hover:bg-primary/5 rounded-md transition-colors"
                    onClick={() => setShowCategories(false)}
                  >
                    View All Categories →
                  </Link>
                </div>
              )}
            </motion.div>
          </ClickAwayListener>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
