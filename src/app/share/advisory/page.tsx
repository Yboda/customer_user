'use client';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import {IArticle} from '@/types/customer/responseTypes';
import styled from '@emotion/styled';
import Link from 'next/link';
import SearchForm from '@/components/SearchForm';
import {useRef, useState} from 'react';
import {useFetchArticleList} from '@/hooks/share/useFetchArticleList';
import TableList from '@/components/share/TableList';
import CardList from '@/components/share/CardList';
import CategoryList from '@/components/share/CategoryList';
import CustomPagination from '@/components/CustomPagination';

export default function Page() {
  const [isListType, setIsListType] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [searchInfo, setSearchInfo] = useState({
    typeCode: '100103',
    size: 10,
  });
  const [keywordState, setKeywordState] = useState('');
  const [searchTypeState, setSearchTypeState] = useState('');
  const [categoryState, setCategoryState] = useState('전체');

  const keywordRef = useRef<HTMLInputElement>();
  const searchTypeRef = useRef<HTMLSelectElement>();
  const categoryRef = useRef<HTMLSelectElement>();

  const {data} = useFetchArticleList({
    ...searchInfo,
    page: page - 1,
    keyword: keywordState,
    searchType: searchTypeState,
    category: categoryState,
  });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keywordValue = keywordRef.current!.value;
    const searchTypeValue = searchTypeRef.current!.value;
    const categoryValue = categoryRef.current!.value;

    if (!keywordValue) {
      return alert('검색어를 입력해주세요.');
    }

    setKeywordState(keywordValue);
    setSearchTypeState(searchTypeValue);
    setCategoryState(categoryValue);
  };

  const categories = ['전체', '분야1', '분야2', '분야3'];

  return (
    <>
      <SearchForm
        isListType={isListType}
        setIsListType={setIsListType}
        onSubmitHandler={onSubmitHandler}
        searchTypeRef={searchTypeRef}
        keywordRef={keywordRef}
        categoryRef={categoryRef}
      />
      <CategoryList
        categories={categories}
        categoryState={categoryState}
        setCategoryState={setCategoryState}
      />
      {data?.list && data.list.length > 0 ? (
        <>{isListType ? <TableList articles={data?.list} /> : <CardList articles={data?.list} />}</>
      ) : (
        <Empty>
          <p>등록된 게시글이 없습니다.</p>
        </Empty>
      )}
      <CustomPagination total={data?.total} size={data?.size} page={page} setPage={setPage} />
    </>
  );
}

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10rem 0;
  border-top: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  font-size: 1.5rem;
`;
