import {Search as SearchIcon} from '@mui/icons-material';
import {Box, InputBase, MenuItem, Select, FormControl, TextField, Typography, Button} from '@mui/material';
import styled from '@emotion/styled';
import {Widgets as WidgetsIcon, List as ListIcon, Apps as AppsIcon} from '@mui/icons-material';
import {MutableRefObject} from 'react';

type Props = {
  keywordRef: MutableRefObject<HTMLInputElement | undefined>;
  searchTypeRef: MutableRefObject<HTMLSelectElement | undefined>;
  categoryRef: MutableRefObject<HTMLSelectElement | undefined>;
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  isListType: boolean;
  setIsListType: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SearchForm({
  searchTypeRef,
  keywordRef,
  categoryRef,
  onSubmitHandler,
  isListType,
  setIsListType,
}: Props) {
  return (
    <SearchStyle.Container>
      <SearchStyle.Title>메뉴명</SearchStyle.Title>
      <form onSubmit={onSubmitHandler}>
        <SearchStyle.FormBox>
          <SearchStyle.Select
            displayEmpty
            id='select-board'
            label='board'
            defaultValue={''}
            inputProps={{ref: categoryRef}}
          >
            <MenuItem value=''>분야 선택</MenuItem>
            <MenuItem value={'분야1'}>분야1</MenuItem>
            <MenuItem value={'분야2'}>분야2</MenuItem>
            <MenuItem value={'분야3'}>분야3</MenuItem>
          </SearchStyle.Select>
          <SearchStyle.Select
            displayEmpty
            id='select-board'
            label='board'
            defaultValue={''}
            inputProps={{ref: searchTypeRef}}
          >
            <MenuItem value=''>전체</MenuItem>
            <MenuItem value={'title'}>제목</MenuItem>
            <MenuItem value={'writer'}>작성자</MenuItem>
          </SearchStyle.Select>
          <SearchStyle.InputBox>
            <SearchStyle.Input placeholder={'검색어를 입력해 주세요.'} inputProps={{ref: keywordRef}} />
            <SearchIcon />
          </SearchStyle.InputBox>
          <SearchStyle.SubmitBtn type={'submit'}>검색</SearchStyle.SubmitBtn>
        </SearchStyle.FormBox>
      </form>
      <SearchStyle.ChangeViewBtn type={'button'} onClick={() => setIsListType(prev => !prev)}>
        {isListType ? <AppsIcon /> : <ListIcon />}
      </SearchStyle.ChangeViewBtn>
    </SearchStyle.Container>
  );
}

const SearchStyle = {
  Container: styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    border: '1px solid #bbb',
    backgroundColor: '#ddd',
    '.MuiSvgIcon-root': {
      width: '2.4rem',
      height: '2.4rem',
    },
  }),
  Title: styled(Typography)({
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '1.6rem',
    fontWeight: 'bold',
  }),
  FormBox: styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    gap: '.5rem',
    width: '60rem',
    padding: '1rem',
  }),
  Select: styled(Select)({
    boxShadow: 'none',
    fontSize: '1.4rem',
    backgroundColor: '#fff',
    '.MuiSelect-select': {
      padding: '1rem',
    },
    '.MuiOutlinedInput-notchedOutline': {
      top: 0,
      '& legend': {
        display: 'none',
      },
    },
  }),
  InputBox: styled(Box)({
    position: 'relative',
    '.MuiSvgIcon-root': {
      position: 'absolute',
      top: `calc(50% - 1.2rem)`,
      right: '1rem',
    },
  }),
  Input: styled(InputBase)({
    width: '30rem',
    height: '100%',
    padding: '.5rem 4.4rem .5rem 1rem',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    borderRadius: '5px',
    fontSize: '1.4rem',
  }),
  SubmitBtn: styled(Button)({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    color: '#fff',
    backgroundColor: '#000',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.6)',
    },
  }),
  ChangeViewBtn: styled(Button)({
    color: '#000',
  }),
};
