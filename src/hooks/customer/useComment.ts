'use client';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import Apis from '@/apis';
import {ICreateComment, IUpdateComment} from '@/types/customer/requestTypes';

export const useComment = {
  Create: () => {
    const client = useQueryClient();
    return useMutation({
      mutationFn: (commentInfo: ICreateComment) => Apis.CustomerApi.createComment(commentInfo),
      onSuccess: data => {
        console.log(data);
        client.invalidateQueries({queryKey: ['comment', data?.articleId, 0]});
      },
      onError: err => console.log(err),
    });
  },
  Update: () => {
    const client = useQueryClient();
    return useMutation({
      mutationFn: (commentInfo: IUpdateComment) => Apis.CustomerApi.updateComment(commentInfo),
      onSuccess: data => {
        client.invalidateQueries({queryKey: ['comment', data.articleId]});
      },
      onError: err => console.log(err),
    });
  },
  Delete: () => {
    const client = useQueryClient();
    return useMutation({
      // 필요 정보 : 댓글 id
      mutationFn: (commentId: number) => Apis.CustomerApi.deleteComment(commentId),
      onSuccess: data => {
        client.invalidateQueries({queryKey: ['comment', data.articleId]});
      },
      onError: err => console.log(err),
    });
  },
};
