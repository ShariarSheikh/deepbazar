import { motion } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';

//---------------------------------------------------------
interface IProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
//---------------------------------------------------------

function Pagination({ setCurrentPage, currentPage, totalPages }: IProps) {
  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
        duration: 2,
      },
    },
  };
  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;
  return (
    <motion.div
      className="h-[56px] flex items-center"
      variants={paginationVariants}
      initial="hidden"
      animate="visible"
    >
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          showNextButton ? (
            <button className="w-8 h-8 flex items-center justify-center bg-[#f3f9fb] rounded-full">
              <BsChevronRight />
            </button>
          ) : (
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 cursor-default"
              disabled
            >
              <BsChevronRight />
            </button>
          )
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={totalPages}
        previousLabel={
          showPrevButton ? (
            <button className="w-8 h-8 flex items-center justify-center bg-[#f3f9fb] rounded-full mr-4">
              <BsChevronLeft />
            </button>
          ) : (
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 cursor-default"
              disabled
            >
              <BsChevronLeft />
            </button>
          )
        }
        containerClassName="flex items-center justify-center"
        pageClassName="block border border-solid borderColor hover:bg-primary text-[15px] hover:text-white w-8 h-8 flex items-center justify-center rounded-full mr-4"
        activeClassName="bg-primary text-white"
        pageLinkClassName="min-w-8 min-h-8"
      />
    </motion.div>
  );
}

export default Pagination;
