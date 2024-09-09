'use Client';
import {Stack} from '@mui/system';
import {Pagination, PaginationItem} from '@mui/material';
import {useState} from 'react';
import Image from 'next/image';

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
            showFirstButton
            showLastButton
            count={Math.ceil(total / size)}
            defaultPage={1}
            page={page}
            onChange={handleChangePage}
            sx={{
              '& .MuiPagination-ul': {
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.2rem',
                marginTop: '4rem',
                padding: '1.4rem 0',
              },
              '& .MuiButtonBase-root': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '3.2rem',
                // height: '2.8rem',
                flexShrink: 0,
                margin: 0,
                padding: 0,
                borderRadius: '3px',
                fontSize: '1.4rem',
                fontWeight: '500',
                fontFamily: 'Pretendard',
                color: 'rgba(10, 15, 56, 0.68)',
                backgroundColor: 'rgba(58, 60, 114, 0.06)',

                '&.Mui-selected': {
                  fontWeight: '600',
                  color: '#fff',
                  backgroundColor: '#223475',
                },
                '& img': {
                  width: '1.4rem',
                  height: '1.4rem',
                },
              },
            }}
            renderItem={item => (
              <PaginationItem
                slots={{
                  previous: () => (
                    <Image src={'/assets/arrow-prev.svg'} alt={'arrowPrev'} width={14} height={14} />
                  ),
                  next: () => (
                    <Image src={'/assets/arrow-next.svg'} alt={'arrowNext'} width={14} height={14} />
                  ),
                  first: () => (
                    <Image src={'/assets/arrow-first.svg'} alt={'arrowFirst'} width={14} height={14} />
                  ),
                  last: () => (
                    <Image src={'/assets/arrow-last.svg'} alt={'arrowLast'} width={14} height={14} />
                  ),
                }}
                {...item}
              />
            )}
          />
        </Stack>
      )}
    </>
  );
}
