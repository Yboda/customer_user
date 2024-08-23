'use client';
import {keepPreviousData, useQuery} from '@tanstack/react-query';
import Apis from '@/apis';
import {IGetArticleList} from '@/types/share/requestTypes';

export const useFetchArticleList = (searchInfo: IGetArticleList) => {
  return useQuery({
    queryKey: [
      searchInfo.typeCode,
      searchInfo.searchType,
      searchInfo.keyword,
      searchInfo.page,
      searchInfo.size,
      searchInfo.category,
    ],
    queryFn: async () => {
      try {
        const data = await Apis.ShareApi.getArticleList(searchInfo);
        return data;
      } catch (e) {
        console.log(e);
      }
    },

    staleTime: 0,
    refetchOnMount: true,
    placeholderData: keepPreviousData,
  });
};
