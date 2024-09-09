import {IArticle} from '@/types/share/responseTypes';
import {IList} from '@/types/customer/responseTypes';

const testArticle = {
  title: '하수역학 기반 마약류 실태조사 결과 상세 데이터2 하수역학 기반 마약류 실태조사 결과 상세 데이터2',
  department: '마약정책과',
  manager: '홍길동',
  count: 0,
  createTm: '2024-08-21',
  content: '<div>안녕하세유</div>',
  fileDTOList: [
    {id: 1, fileName: '123.txt'},
    {id: 2, fileName: '11111122222.pdf'},
  ],
  badge: true,
  writer: '보라',
  typeName: '지식공유',
  thumbnail: null,
};

const testArticle2 = {
  title: '하수역학 기반 마약류 실태조사 결과 상세 데이터2',
  department: '마약정보',
  manager: '윤보라',
  count: 5,
  createTm: '2024-08-21',
  content: '<div>졸피뎀 권장용량 등</div>',
  fileDTOList: null,
  badge: false,
  writer: '보라',
  typeName: '지식공유',
  thumbnail: '/assets/images/thumbnail.png',
};

const getTestArticleList = (): IList<IArticle> => {
  let articles = [];
  for (let i = 0; i < 12; i++) {
    articles.push(
      i % 2
        ? {
            ...testArticle,
            id: i,
          }
        : {
            ...testArticle2,
            id: i,
          },
    );
  }

  return {
    size: 12,
    total: 20,
    page: 1,
    list: articles,
  };
};

const testArticleList = getTestArticleList();

export {testArticle, testArticleList};
