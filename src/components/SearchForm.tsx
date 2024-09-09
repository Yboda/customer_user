import {Search as SearchIcon} from '@mui/icons-material';
import {Box, InputBase, MenuItem, Select, FormControl, TextField, Typography, Button} from '@mui/material';
import styled from '@emotion/styled';
import {Widgets as WidgetsIcon, List as ListIcon, Apps as AppsIcon} from '@mui/icons-material';
import {MutableRefObject} from 'react';
import Image from 'next/image';

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
            <Image src={'/assets/search.svg'} alt={'search'} width={18} height={18} />
          </SearchStyle.InputBox>
          <SearchStyle.SubmitBtn type={'submit'}>검색</SearchStyle.SubmitBtn>
        </SearchStyle.FormBox>
      </form>
      <SearchStyle.ChangeViewBtn type={'button'} onClick={() => setIsListType(prev => !prev)}>
        {isListType ? (
          <Image src={'/assets/toggle-card.svg'} alt={'toggleToList'} width={30} height={30} />
        ) : (
          <Image src={'/assets/toggle-list.svg'} alt={'toggleToCard'} width={30} height={30} />
        )}
      </SearchStyle.ChangeViewBtn>
    </SearchStyle.Container>
  );
}

const SearchStyle = {
  Container: styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.6rem',
    '.MuiSvgIcon-root': {
      width: '2.4rem',
      height: '2.4rem',
    },
  }),
  FormBox: styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    width: '60rem',
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
    img: {
      position: 'absolute',
      top: 'calc(50% - 0.9rem)',
      right: '1rem',
      width: '1.8rem',
      height: '1.8rem',
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
    padding: '.4rem 3rem',
    fontSize: '1.6rem',
    fontWeight: 600,
    color: '#fff',
    backgroundColor: 'rgba(4, 95, 201, 1)',
    fontFamily: 'Pretendard',
    '&:hover': {
      backgroundColor: 'rgba(4, 95, 201, 0.7)',
    },
  }),
  ChangeViewBtn: styled(Button)({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    minWidth: 'unset',
    img: {
      width: '3rem',
      height: '3rem',
    },
  }),
};
