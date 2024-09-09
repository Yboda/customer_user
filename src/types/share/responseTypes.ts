export interface IArticle {
  id: number;
  title: string;
  content: string;
  count?: number;
  writer: string;
  createTm: string;
  typeName: string;
  fileDTOList?: any[] | null;
  // category: string;
  badge: boolean;
  department: string;
  manager: string;
  thumbnail?: any;
}
