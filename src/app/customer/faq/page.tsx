'use client';
import {useFetchArticleList} from '@/hooks/customer/useFetchArticleList';
import {Accordion, AccordionDetails, AccordionSummary, Box, InputBase, MenuItem, Select} from '@mui/material';
import {ExpandMore as ExpandMoreIcon, Search as SearchIcon} from '@mui/icons-material';
import CustomPagination from '@/components/CustomPagination';
import {useRef, useState} from 'react';
import Apis from '@/apis';
import SearchForm from '@/components/SearchForm';

export default function Page() {
  const [page, setPage] = useState<number>(1);
  const [searchInfo, setSearchInfo] = useState({
    typeCode: '100103',
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

  const handleClick = async (item: any) => {
    const res = await Apis.CustomerApi.downloadFile(item.id);

    // const blob = new Blob([res]);

    const fileUrl = window.URL.createObjectURL(res);

    console.log(fileUrl);

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = item.name;
    link.click();
    console.log(res);
  };

  return (
    <div>
      <h3 style={{margin: '20px 0'}}>FAQ</h3>
      <SearchForm onSubmitHandler={onSubmitHandler} searchTypeRef={searchTypeRef} keywordRef={keywordRef} />
      <div>
        {data?.list?.map(item => (
          <Accordion key={item.id} disableGutters square>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              Q : {item.title}
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {item?.fileDTOList?.map(item => {
                  return (
                    <li key={item.id} onClick={() => handleClick(item)}>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
              <div style={{display: 'flex'}}>
                A :
                <div dangerouslySetInnerHTML={{__html: item.content}} />
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <CustomPagination total={data?.total} size={data?.size} page={page} setPage={setPage} />
    </div>
  );
}
