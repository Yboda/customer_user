import axios from 'axios';

import {request, ResponseType} from '@/apis/index';
import {IArticle, IComment, IList} from '@/types/customer/responseTypes';
import {ICreateArticle, ICreateComment, IGetArticleList, IUpdateComment} from '@/types/customer/requestTypes';

export const CustomerApi = {
  getArticleList: async ({typeCode, page, size, keyword, searchType}: IGetArticleList) => {
    let Url = `/article/list/${typeCode}?page=${page}&size=${size}`;
    if (searchType) {
      Url += `&searchType=${searchType}`;
    }
    if (keyword) {
      Url += `&keyword=${keyword}`;
    }
    try {
      const res = await request.get<ResponseType<IList<IArticle>>>(Url);
      console.log('getArticleListRes---->', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  getArticleDetail: async (id: number) => {
    try {
      const res = await request.get<ResponseType<IArticle>>(`/article/${id}`);
      console.log('articleDetailRes---->', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  createArticle: async (articleInfo: ICreateArticle) => {
    try {
      const res = await request.post<ResponseType<any>>(`/article`, articleInfo);
      console.log('createArticleRes---->', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  updateArticle: async (articleInfo: ICreateArticle) => {
    try {
      const res = await request.put<ResponseType<any>>(`/article`, articleInfo);
      console.log('updateArticleRes---->', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  deleteArticle: async (id: number) => {
    try {
      const res = await request.delete<ResponseType<any>>(`/article/${id}`);
      console.log('deleteArticleRes---->', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  downloadFile: async (fileId: number) => {
    try {
      const res = await request.get<ResponseType<any>>(`/file/download/${fileId}`, {
        responseType: 'blob',
      });
      console.log('DownloadFileRes---->', res);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  // Comments
  getCommentList: async (articleId: number, page: number, size = 10) => {
    try {
      const res = await request.get<ResponseType<IList<IComment>>>(
        `/reply/${articleId}?page=${page}&size=${size}`,
      );
      console.log('CommentListRes---->', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  createComment: async (commentInfo: ICreateComment) => {
    try {
      const res = await request.post<ResponseType<any>>(`/reply`, commentInfo);
      console.log('createCommentRes---->', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  updateComment: async (commentInfo: IUpdateComment) => {
    try {
      const res = await request.put<ResponseType<any>>(`/reply`, commentInfo);
      console.log('updateCommentRes---->', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  deleteComment: async (id: number) => {
    try {
      const res = await request.delete<ResponseType<any>>(`/reply/${id}`);
      console.log('deleteComment---->', res.data);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
