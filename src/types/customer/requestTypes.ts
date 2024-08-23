export interface IGetArticleList {
  typeCode: string;
  page: number;
  size: number;
  keyword: string;
  searchType: string;
}

export interface ICreateArticle {
  typeCode: string;
  title: string;
  content: string;
}

export interface IUpdateArticle {
  id: number;
  title: string;
  content: string;
  typeCode: string;
}

export interface ICreateComment {
  articleId: number;
  content: string;
  upperId?: number;
}

export interface IUpdateComment {
  articleId: number;
  content: string;
}
