'use client';
import {useQuery} from '@tanstack/react-query';
import Apis from '@/apis';
import {IArticle} from '@/types/share/responseTypes';

export const useFetchArticleDetail = (id?: number) => {
  return useQuery({
    queryKey: ['article', id],
    queryFn: async () => {
      try {
        const data: IArticle = await Apis.ShareApi.getArticleDetail();
        return data;
      } catch (e) {
        console.log(e);
      }
    },
  });
};
