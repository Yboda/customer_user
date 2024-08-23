import {IGetArticleList} from '@/types/share/requestTypes';
import {request, ResponseType} from '@/apis/index';
import {testArticle, testArticleList} from '@/constants/testArticle';
import {IArticle} from '@/types/customer/responseTypes';

export const ShareApi = {
  getArticleList: async ({typeCode, page, size, keyword, searchType, category}: IGetArticleList) => {
    let Url = `/article/list/${typeCode}?page=${page}&size=${size}`;
    if (searchType) {
      Url += `&searchType=${searchType}`;
    }
    if (keyword) {
      Url += `&keyword=${keyword}`;
    }
    if (category) {
      Url += `&category=${category}`;
    }
    try {
      // const res = await request.get<ResponseType<any>>(Url);
      // console.log('getArticleListRes---->', res.data);
      // return res.data;
      return testArticleList;
    } catch (e) {
      console.log(e);
    }
  },
  getArticleDetail: async (id?: number) => {
    try {
      // const res = await request.get<ResponseType<IArticle>>(`/article/${id}`);
      // console.log('articleDetailRes---->', res.data);
      // return res.data;
      return testArticle;
    } catch (e) {
      console.log(e);
    }
  },
};
