'use client';
import {keepPreviousData, useQuery} from '@tanstack/react-query';
import Apis from '@/apis';
import {IGetArticleList} from '@/types/customer/requestTypes';

export const useFetchArticleList = (searchInfo: IGetArticleList) => {
  return useQuery({
    queryKey: [
      searchInfo.typeCode,
      searchInfo.searchType,
      searchInfo.keyword,
      searchInfo.page,
      searchInfo.size,
    ],
    queryFn: async () => {
      try {
        const data = await Apis.CustomerApi.getArticleList(searchInfo);
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
