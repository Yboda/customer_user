import Link from 'next/link';
import styled from '@emotion/styled';
import Image from 'next/image';
import {IArticle} from '@/types/share/responseTypes';

export default function TableList({articles}: {articles: IArticle[]}) {
  return (
    <STable>
      <div className={'share-table-row header'}>
        <div className={'share-table-column'}>No.</div>
        <div className={'share-table-column'}></div>
        <div className={'share-table-column full'}>제목</div>
        <div className={'share-table-column'}>첨부파일</div>
      </div>
      {articles.map((article: IArticle) => (
        <div className={'share-table-row'} key={article.id}>
          <div className={'share-table-column number'}>{article.id}</div>
          <div className={'share-table-column nonePadding'}>
            <div className={'share-table-thumb'}>
              {article.thumbnail ? (
                <Image src={article.thumbnail} alt={'thumb'} width={200} height={100} />
              ) : (
                <div className={'empty'}>
                  <Image src={'/assets/empty-image.svg'} alt={'thumb'} width={42} height={27} />
                </div>
              )}
            </div>
          </div>
          <div className={'share-table-column'}>
            <div className={'content-container'}>
              <Link href={`/share/article/${article.id}`} className={'content-link'}>
                <div className={'content-body'}>
                  <div className={'content-title'}>
                    <span className={article.badge ? 'new' : ''}>{article.title}</span>
                    {article.badge && <div className={'badge'}>NEW</div>}
                  </div>
                  <div className={'content-info'}>
                    <div className={'info-item'}>
                      <Image src={'/assets/person.svg'} alt={'person'} width={14} height={14} />
                      <span>{article.department}</span>
                      <span>{article.manager}</span>
                    </div>
                    <div className={'info-item'}>
                      <Image src={'/assets/view.svg'} alt={'view'} width={14} height={14} />
                      <span>{article.count}</span>
                    </div>
                    <div className={'info-item'}>
                      <Image src={'/assets/calendar.svg'} alt={'calendar'} width={14} height={14} />
                      <span>{article.createTm}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className={'share-table-column'}>
            {article.fileDTOList && article.fileDTOList.length > 0 && (
              <div className={'file-info'}>
                <Image src={'/assets/file-link.svg'} alt={'file'} width={14} height={14} />
                <span className={'file-count'}>{article.fileDTOList.length}</span>
              </div>
            )}
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
  //border-top: 1px solid rgba(10, 15, 56, 0.1);
  border-bottom: 1px solid rgba(10, 15, 56, 0.1);
  border-radius: 8px;
  overflow: hidden;
  font-size: 1.5rem;
  color: rgba(10, 15, 56, 0.9);

  .share-table {
    &-row {
      display: grid;
      grid-template-columns: 8rem 13.6rem auto 12rem;
      background-color: #fff;

      &:last-of-type {
        border-bottom: none;
      }

      &.header {
        background-color: #223475;
        color: #fff;
      }
    }
    &-column {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      width: auto;
      min-width: 0;
      padding: 0.6rem 1.2rem;
      border-right: 1px solid rgba(10, 15, 56, 0.1);
      border-bottom: 1px solid rgba(58, 60, 114, 0.18);

      &:last-child {
        border-right: none;
      }
      &.number {
        background-color: #dbe2ed;
        color: #223475;
        font-weight: 700;
      }
      &.nonePadding {
        padding: 0;
      }

      &.alignBase {
        margin-top: 1rem;
        align-self: baseline;
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
      height: 100%;
      //aspect-ratio: 136/79;
      background-color: rgba(58, 60, 114, 0.1);

      & img {
        width: 100%;
        height: 100%;
        //aspect-ratio: 1/1;
        object-fit: cover;
      }
      .empty {
        display: flex;
        img {
          width: 4.2rem;
          height: 2.7rem;
        }
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
      gap: 1.1rem;
      min-width: 0;
    }
    &-title {
      display: flex;
      width: auto;
      min-width: 0;

      span {
        display: inline-block;
        width: auto;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
        overflow: hidden;
        font-size: 1.6rem;
        font-weight: 700;
        color: rgba(10, 15, 56, 0.9);
      }

      .new {
        color: #045fc9;
      }
      .badge {
        display: inline-block;
        text-align: center;
        width: auto;
        margin-left: 1rem;
        padding: 0.2rem 0.6rem;
        background-color: #ff5151;
        color: #fff;
        font-size: 1.4rem;
        font-weight: 600;
        flex-shrink: 0;
        border-radius: 3px;
      }
    }

    &-info {
      display: flex;
      gap: 2.4rem;
      flex-wrap: wrap;
      color: rgba(10, 15, 56, 0.72);
      font-weight: 500;

      .info-item {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;

        img {
          width: 1.4rem;
          height: 1.4rem;
        }
      }
    }
  }
  .file-info {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    .file-count {
      color: #223475;
      font-weight: 700;
    }
  }
`;
