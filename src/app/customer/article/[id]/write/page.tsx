'use client';
import {useParams} from 'next/navigation';
import TinymceEditor from '@/components/cutomer/TinymceEditor';
import {useFetchArticleDetail} from '@/hooks/customer/useFetchArticleDetail';
import WriteArticleForm from '@/components/customer/WriteArticleForm';
import {useEffect} from 'react';

export default function Page() {
  const articleId = Number(useParams()?.id as string);
  const {data: articleInfo} = useFetchArticleDetail(articleId);

  return (
    <WriteArticleForm
      id={articleId}
      title={articleInfo?.title}
      content={articleInfo?.content}
      typeCode={articleInfo?.typeCode}
      isUpdate={true}
    />
  );
}
