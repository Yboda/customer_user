'use client';
import styled from '@emotion/styled';
import {Save as SaveIcon, AttachFile as AttachFileIcon} from '@mui/icons-material';
import {useParams, usePathname, useRouter} from 'next/navigation';
import {Button} from '@mui/material';
import {useFetchArticleDetail} from '@/hooks/share/useFetchArticleDetail';
import Image from 'next/image';

const DetailPage = () => {
  const router = useRouter();
  const path = usePathname();
  const articleId = Number(useParams()?.id as string);

  const {data: article} = useFetchArticleDetail(Number(articleId));

  return (
    <Container>
      <h3>게시글상세</h3>
      <div className={'detail-topArea'}>
        <div className={'detail-header'}>
          <div className={'detail-header-titleWrap'}>
            <div className={'detail-header-title'}>
              <span className={`title ${article?.badge ? 'new' : ''}`}>
                {article?.title}
                {article?.badge && <div className={'badge'}>NEW</div>}
              </span>
            </div>
            <div className={'detail-header-info'}>
              <div className={'info-wrap'}>
                <div className={'info-item'}>
                  <Image src={'/assets/person.svg'} alt={'person'} width={14} height={14} />
                  <span className={'info-title'}>담당부서</span>
                  <span>{article?.department}</span>
                </div>
                <div className={'info-item'}>
                  <Image src={'/assets/person.svg'} alt={'person'} width={14} height={14} />
                  <span className={'info-title'}>담당자</span>
                  <span>{article?.manager}</span>
                </div>
              </div>
              <div className={'info-item'}>
                <Image src={'/assets/view.svg'} alt={'view'} width={14} height={14} />
                <span className={'info-title'}>조회수</span>
                <span>{article?.count}</span>
              </div>
              <div className={'info-item'}>
                <Image src={'/assets/calendar.svg'} alt={'calendar'} width={14} height={14} />
                <span className={'info-title'}>작성일</span>
                <span>{article?.createTm}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={'detail-content'}>
          <div dangerouslySetInnerHTML={{__html: article?.content!}} />
        </div>
      </div>
      {article?.fileDTOList && (
        <div className={'detail-fileArea'}>
          {article?.fileDTOList?.map(file => (
            <div key={file.id} className={'detail-file'}>
              <Image src={'/assets/file-link.svg'} alt={'file'} width={12} height={12} />
              <span>{file.fileName}</span>
            </div>
          ))}
        </div>
      )}
      <div className={'detail-btnWrap'}>
        <Button onClick={() => router.back()}>목록</Button>
      </div>
    </Container>
  );
};

export default DetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    display: none;
  }

  .detail {
    &-topArea {
      border-radius: 18px;
      overflow: hidden;
      background-color: rgba(255, 255, 255, 0.45);
    }
    &-header {
      display: flex;
      padding: 1.6rem;
      background-color: #fff;

      &-titleWrap {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
      }

      &-title {
        display: flex;
        width: auto;

        .title {
          display: -webkit-box;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          font-weight: bold;
          font-size: 1.4rem;
          color: rgba(10, 15, 56, 0.9);

          &.new {
            color: #045fc9;
          }
        }
        .badge {
          display: inline-flex;
          text-align: center;
          width: auto;
          margin-left: 0.5rem;
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
        align-items: center;
        gap: 3.2rem;
        .info {
          &-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
          }
          &-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
            color: rgba(10, 15, 56, 0.72);
            font-size: 1.4rem;
            font-weight: 500;

            img {
              width: 1.4rem;
              height: 1.4rem;
            }
          }
          &-title {
            font-weight: 700;
          }
        }
      }
    }

    &-content {
      width: 100%;
      padding: 2.4rem;
      font-size: 1.5rem;
      color: rgba(10, 15, 56, 0.9);
      * {
      }
    }

    &-fileArea {
      display: flex;
      flex-direction: column;
      background-color: #c9d6e4;
      border-radius: 8px;
      margin-top: 1.7rem;
      color: #223475;
      font-size: 1.4rem;
      font-weight: 600;
    }

    &-file {
      display: inline-flex;
      align-items: center;
      padding: 0.8rem;
      gap: 0.4rem;
      width: fit-content;
      cursor: pointer;
      span {
        font-size: 1.3rem;
      }
      img {
        width: 1.12rem;
        height: 1.12rem;
        padding: 0.64rem;
        flex-shrink: 0;
      }
    }
    &-btnWrap {
      display: flex;
      justify-content: center;
      padding: 2rem 0;

      button {
        background-color: #000;
        color: #fff;
        font-size: 1.3rem;
        &:hover {
          background-color: rgba(0, 0, 0, 0.7);
        }
      }
    }
  }
`;
