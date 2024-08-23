import {Stack} from '@mui/system';
import {Pagination} from '@mui/material';
import {useState} from 'react';

type Props = {
  total: number;
  size: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function CustomPagination({total, size, page, setPage}: Props) {
  const handleChangePage = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  return (
    <>
      {total > 0 && (
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(total / size)}
            defaultPage={1}
            page={page}
            onChange={handleChangePage}
            sx={{
              '& .MuiPagination-ul': {
                justifyContent: 'center',
              },
            }}
          />
        </Stack>
      )}
    </>
  );
}
