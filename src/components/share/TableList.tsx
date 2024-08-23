import Link from 'next/link';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styled from '@emotion/styled';
import Image from 'next/image';
import {IArticle} from '@/types/share/responseTypes';

export default function TableList({articles}: {articles: IArticle[]}) {
  return (
    <STable>
      {/*<div className={'table-row header'}>*/}
      {/*  <div className={'table-column'}>번호</div>*/}
      {/*  <div className={'table-column full'}>제목</div>*/}
      {/*  <div className={'table-column'}>작성일</div>*/}
      {/*  <div className={'table-column'}>첨부</div>*/}
      {/*</div>*/}
      {articles.map((article: IArticle) => (
        <div className={'table-row'} key={article.id}>
          <div className={'table-column'}>{article.id}</div>
          <div className={'table-column'}>
            <div className={'table-thumb'}>
              <Image src={''} alt={'thumb'} />
            </div>
          </div>
          <div className={'table-column full alignLeft'}>
            <div className={'content-container'}>
              <Link href={`/share/article/${article.id}`} className={'content-link'}>
                <span className={'content-category'}>{'마약류'}</span>
                <div className={'content-body'}>
                  <div className={'content-title'}>
                    <span className={'title'}>{article.title}</span>
                    {article.badge && <div className={'badge'}>NEW</div>}
                  </div>
                  <div className={'content-info'}>
                    <span>담당부서: {'마약정책과'}</span>
                    <span>담당자: {'홍길동'}</span>
                    <span>조회수: {'2973'}</span>
                    <span>작성일: {article.createTm}</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={'table-column'}>
            {article.fileDTOList && article.fileDTOList.length > 0 && <AttachFileIcon />}
          </div>
        </div>
      ))}
    </STable>
  );
}

const STable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border-top: 1px solid #bbb;
  border-bottom: 1px solid #bbb;

  .table {
    &-row {
      display: flex;
      border-bottom: 1px solid #ccc;
      &:last-of-type {
        border-bottom: none;
      }

      &.header {
        text-align: center;
        font-weight: bold;
        border-color: #bbb;
      }
    }
    &-column {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 10rem;
      font-size: 1.4rem;

      &.full {
        width: 100%;
        flex-shrink: unset;
        min-width: 0;
      }
      &.alignBase {
        margin-top: 1rem;
        align-self: baseline;
      }
      &.alignLeft {
        justify-content: left;
      }

      .MuiSvgIcon-root {
        width: 2rem;
        height: 2rem;
      }
    }
    &-thumb {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;
      aspect-ratio: 1/1;

      & img {
        width: 100%;
        height: 100%;
        //aspect-ratio: 1/1;
        object-fit: contain;
        background-color: #ddd;
      }
    }
    &-empty {
      padding: 10rem 0;
      text-align: center;
    }
  }
  .content {
    &-container {
      display: flex;
      min-width: 0;
    }
    &-link {
      padding: 1rem 1rem 1rem 0;
      display: flex;
      font-size: 1.4rem;
      min-width: 0;
    }
    &-category {
      flex-shrink: 0;
      padding: 0 3rem;
      font-size: 1.4rem;
    }
    &-body {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      min-width: 0;
    }
    &-title {
      display: flex;
      width: auto;
      min-width: 0;

      .title {
        display: inline-block;
        width: auto;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
        overflow: hidden;
        font-weight: bold;
        font-size: 1.4rem;
      }
      .badge {
        display: inline-block;
        text-align: center;
        width: 4rem;
        margin-left: 1rem;
        padding: 0.3rem;
        background-color: #000;
        color: #fff;
        font-size: 1.1rem;
        flex-shrink: 0;
      }
    }

    &-info {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      span {
        font-size: 1.4rem;
      }
    }
  }
`;
