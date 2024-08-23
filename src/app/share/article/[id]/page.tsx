'use client';
import styled from '@emotion/styled';
import {Save as SaveIcon, AttachFile as AttachFileIcon} from '@mui/icons-material';
import {useParams, usePathname, useRouter} from 'next/navigation';
import {Button} from '@mui/material';
import {useFetchArticleDetail} from '@/hooks/share/useFetchArticleDetail';

const DetailPage = () => {
  const router = useRouter();
  const path = usePathname();
  const articleId = Number(useParams()?.id as string);

  const {data: article} = useFetchArticleDetail();

  return (
    <Container>
      <h3>게시글상세</h3>
      <div className={'detail-header'}>
        <div className={'detail-info'}>
          <span className={'detail-category'}>{article?.category}</span>
          <div className={'detail-titleWrap'}>
            <div className={'detail-title'}>
              <span className={'title'}>
                {article?.title}
                {article?.badge && <div className={'badge'}>NEW</div>}
              </span>
            </div>
            <div className={'detail-more'}>
              <span>담당부서: {article?.department}</span>
              <span>담당자: {article?.manager}</span>
              <span>조회수: {article?.count}</span>
              <span>작성일: {article?.createTm}</span>
            </div>
          </div>
        </div>
        <div className={'detail-headerIcon'}>
          {article?.fileDTOList && article.fileDTOList.length > 0 && <SaveIcon />}
        </div>
      </div>
      <div className={'detail-content'}>
        <div dangerouslySetInnerHTML={{__html: article?.content!}} />
      </div>
      <div className={'detail-fileArea'}>
        {article?.fileDTOList?.map(file => (
          <div key={file.id} className={'detail-file'}>
            <AttachFileIcon />
            <span>{file.fileName}</span>
          </div>
        ))}
      </div>
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
    &-header {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
      border-top: 1px solid #bbb;
      border-bottom: 1px solid #bbb;
    }
    &-content {
      width: 100%;
      padding: 2rem;
      * {
        font-size: 1.3rem;
      }
    }
    &-info {
      display: flex;
    }

    &-category {
      flex-shrink: 0;
      padding: 0 3rem;
      font-size: 1.4rem;
    }

    &-titleWrap {
      display: flex;
      flex-direction: column;
      gap: 1rem;
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
        flex: 0;
      }
    }
    &-more {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      span {
        font-size: 1.3rem;
      }
    }
    &-headerIcon {
      .MuiSvgIcon-root {
        width: 2rem;
        height: 2rem;
        margin: 0 2rem;
      }
    }
    &-fileArea {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 1rem;
      padding: 2rem;
      background-color: #ddd;
    }

    &-file {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      width: fit-content;
      cursor: pointer;
      span {
        font-size: 1.3rem;
      }
      .MuiSvgIcon-root {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    &-btnWrap {
      display: flex;
      justify-content: center;
      padding-top: 2rem;
      border-top: 1px solid #bbb;

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
