'use client';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import Apis from '@/apis';
import {ICreateArticle, IUpdateArticle} from '@/types/customer/requestTypes';

export const useArticle = {
  Create: () => {
    const client = useQueryClient();
    return useMutation({
      mutationFn: (articleInfo: ICreateArticle) => Apis.CustomerApi.createArticle(articleInfo),
      onSuccess: data => {
        console.log(data);
        client.invalidateQueries({queryKey: [`${data.typeCode}`]});
      },
      onError: err => console.log(err),
    });
  },
  Update: () => {
    const client = useQueryClient();
    return useMutation({
      mutationFn: (articleInfo: IUpdateArticle) => Apis.CustomerApi.updateArticle(articleInfo),
      onSuccess: (data, variables) => {
        // console.log('data=====>', data);
        client.invalidateQueries({queryKey: ['article', Number(variables.id)]});
      },
      onError: err => console.log(err),
    });
  },
  Delete: () => {
    const client = useQueryClient();
    return useMutation({
      mutationFn: (id: number) => Apis.CustomerApi.deleteArticle(id),
      onSuccess: data => {
        console.log('onSuccess------>', data);
      },
      onError: err => console.log(err),
    });
  },
};
