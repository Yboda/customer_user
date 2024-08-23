'use client';
import {
  Box,
  InputBase,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from '@mui/material';
import {useEffect, useRef, useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import {useFetchArticleList} from '@/hooks/customer/useFetchArticleList';
import CustomPagination from '@/components/CustomPagination';
import {useArticle} from '@/hooks/customer/useArticle';
import SearchForm from '@/components/SearchForm';
import {Search as SearchIcon} from '@mui/icons-material';

export default function Page() {
  const [page, setPage] = useState<number>(1);
  const router = useRouter();

  const [searchInfo, setSearchInfo] = useState({
    typeCode: '100102',
    size: 10,
  });

  const [keywordState, setKeywordState] = useState('');
  const [searchTypeState, setSearchTypeState] = useState('');

  const keywordRef = useRef('');
  const searchTypeRef = useRef('');

  const {data} = useFetchArticleList({
    ...searchInfo,
    page: page - 1,
    keyword: keywordState,
    searchType: searchTypeState,
  });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeywordState(keywordRef.current.value);
    setSearchTypeState(searchTypeRef.current.value);
  };

  return (
    <div>
      <h3>QnA</h3>
      {/* SEARCH */}
      <SearchForm onSubmitHandler={onSubmitHandler} searchTypeRef={searchTypeRef} keywordRef={keywordRef} />
      {/* LIST */}
      <TableContainer sx={{maxHeight: 500, '& th': {}}}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              <TableCell align='center' style={{minWidth: '50px'}}>
                No.
              </TableCell>
              <TableCell align='center' style={{width: '100%'}}>
                제목
              </TableCell>
              <TableCell align='center' style={{minWidth: '100px'}}>
                작성자
              </TableCell>
              <TableCell align='center' style={{minWidth: '150px'}}>
                작성일
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.list?.map((item, i) => (
              <TableRow
                key={item.id}
                onClick={() => router.push(`/customer/article/${item.id}`)}
                style={{cursor: 'pointer'}}
              >
                <TableCell align='center' style={{minWidth: '50px'}}>
                  {i + 1}
                </TableCell>
                <TableCell style={{width: '100%'}}>{item.title}</TableCell>
                <TableCell align='center' style={{minWidth: '100px'}}>
                  {item.writer}
                </TableCell>
                <TableCell align='center' style={{minWidth: '150px'}}>
                  {item.createTm?.split('T')[0]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomPagination total={data?.total} size={data?.size} page={page} setPage={setPage} />
    </div>
  );
}
