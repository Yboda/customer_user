export interface IArticle {
  id: number;
  title: string;
  content: string;
  count?: number;
  writer: string;
  createTm: string;
  typeName: string;
  fileDTOList?: [];
}

export interface IComment {
  id: number;
  upperId: number | null;
  articleId: number;
  content: string;
  writer: string;
  createTm: string;
  reReplyList: IComment[];
}

export interface IList<T> {
  size: number;
  total: number;
  page: number;
  list: T[];
}
