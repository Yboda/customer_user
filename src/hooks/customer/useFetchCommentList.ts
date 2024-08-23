'use client';
import {keepPreviousData, useQuery} from '@tanstack/react-query';
import Apis from '@/apis';
import {IComment, IList} from '@/types/customer/responseTypes';

export const useFetchCommentList = (articleId: number, page = 0) => {
  return useQuery({
    queryKey: ['comment', articleId, page],
    queryFn: async () => {
      try {
        const data: IList<IComment> = await Apis.CustomerApi.getCommentList(articleId, page);
        return data;
      } catch (e) {
        console.log(e);
      }
    },
    placeholderData: keepPreviousData,
  });
};
