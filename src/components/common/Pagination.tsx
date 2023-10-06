/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch, SetStateAction } from 'react';

//---------------------------------------------------------
interface IProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}
//---------------------------------------------------------

function Pagination({ setCurrentPage, currentPage, totalPages }: IProps) {
  return <div>Pagination</div>;
}

export default Pagination;
