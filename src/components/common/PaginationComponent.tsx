import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

//---------------------------------------------------------
interface IProps {
  limit: number;
  currentPage: number;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
  totalProducts: number;
  onChange?: (page: number) => void;
}
//---------------------------------------------------------

function PaginationComponent({
  setCurrentPage,
  currentPage,
  totalProducts,
  limit,
  onChange,
}: IProps) {
  const totalPages = Math.ceil(totalProducts / limit);

  const handlePageChange = (_event: ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage?.(newPage);
    onChange?.(newPage);
  };

  return (
    <Stack spacing={2} sx={{ justifyContent: 'center' }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
}

export default PaginationComponent;
