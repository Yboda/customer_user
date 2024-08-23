'use client';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  OutlinedInput,
  Button,
} from '@mui/material';
import {ChangeEvent, useCallback, useRef, useState} from 'react';
import styled from '@emotion/styled';
import TinymceEditor from '@/components/customer/TinymceEditor';
import {useArticle} from '@/hooks/customer/useArticle';
import {useRouter} from 'next/navigation';
import UploadFile from '@/components/customer/UploadFile';
import {ICreateArticle} from '@/types/customer/requestTypes';

type Props = {
  id: number | null;
  title: string | null;
  content: string | null;
  typeCode: string;
  isUpdate: boolean;
};

export default function WriteArticleForm({
  id = null,
  title = null,
  content = null,
  typeCode = '',
  isUpdate = false,
}: Props) {
  // const oEditors = useRef<any>({});
  const tinymceEditorRef = useRef<any>({});
  const selectRef = useRef<HTMLSelectElement | null>();
  const inputRef = useRef<HTMLInputElement | null>();
  const router = useRouter();

  const createArticleMutation = useArticle.Create();
  const updateArticleMutation = useArticle.Update();

  const WriteInqueryStyle = {
    Container: styled.section`
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 670px;
      margin: 0 auto;
    `,
    FlexBox: styled(Box)({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  };

  const onSubmitCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const typeCode = selectRef?.current?.value;
    const title = inputRef?.current?.value;
    const content = tinymceEditorRef.current.getContent();

    if (!typeCode) {
      return alert('게시판 종류를 선택해주세요.');
    }
    if (!title) {
      return alert('제목을 입력해주세요.');
    }
    if (!content) {
      return alert('내용을 입력해주세요.');
    }

    const articleInfo: ICreateArticle = {
      typeCode,
      title,
      content,
    };

    createArticleMutation.mutate(articleInfo, {
      onSuccess: data => {
        alert('게시글 등록이 완료되었습니다.');
        router.back();
      },
    });
  };

  const onSubmitUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const typeCode = selectRef?.current?.value;
    const title = inputRef?.current?.value;
    const content = tinymceEditorRef.current.getContent();

    if (!typeCode) {
      return alert('게시판 종류를 선택해주세요.');
    }
    if (!title) {
      return alert('제목을 입력해주세요.');
    }
    if (!content) {
      return alert('내용을 입력해주세요.');
    }

    const articleInfo = {
      id,
      typeCode,
      title,
      content,
    };

    updateArticleMutation.mutate(articleInfo, {
      onSuccess: data => {
        alert('게시글 수정이 완료되었습니다.');
        router.back();
      },
    });
  };

  const onSubmitHandler = isUpdate ? onSubmitUpdate : onSubmitCreate;

  return (
    <form onSubmit={onSubmitHandler}>
      <WriteInqueryStyle.Container>
        <h3>문의 작성</h3>
        {/* 게시판 종류 select */}
        <Box sx={{width: '200px'}}>
          <Select
            displayEmpty
            labelId='demo-simple-select-label'
            id='select-board'
            label='board'
            defaultValue={typeCode}
            inputProps={{ref: selectRef}}
            sx={{
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': {
                top: 0,
                '& legend': {
                  display: 'none',
                },
              },
            }}
          >
            <MenuItem disabled value=''>
              <em>게시판 선택</em>
            </MenuItem>
            <MenuItem value={'100101'}>1:1 문의</MenuItem>
            <MenuItem value={'100102'}>QnA</MenuItem>
          </Select>
        </Box>
        {/* title */}
        <OutlinedInput
          fullWidth
          placeholder={'제목을 입력해주세요.'}
          defaultValue={title}
          inputProps={{
            ref: inputRef,
          }}
          // value={title}
          // onChange={handleChangeTitle}
        />
        {/* editor */}
        {/*<NaverEditor ref={oEditors} />*/}
        <TinymceEditor ref={tinymceEditorRef} content={content} />
        <Button type={'submit'}>등록</Button>
      </WriteInqueryStyle.Container>
    </form>
  );
}

// 게시판종류 (select), 제목, 파일업로드, 에디터(textarea)
// table or div
// submit으로 보내줄 데이터 -> 게시판종류, 제목, 파일데이터, 본문 & image
// 각 페이지에는 render list << 공통 컴포넌트로 리스트 뿌려주기 - react query
