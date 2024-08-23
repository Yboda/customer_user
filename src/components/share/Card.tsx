import styled from '@emotion/styled';
import Image from 'next/image';
import {Person as PersonIcon, Visibility as VisibilityIcon, Create as CreateIcon} from '@mui/icons-material';
import Link from 'next/link';
import {PackageJson} from 'type-fest';
import {IArticle} from '@/types/share/responseTypes';

export default function Card({article}: {article: IArticle}) {
  return (
    <Container>
      <Link href={`/share/article/${article.id}`} className={'card-link'}>
        <div className={'card-img'}>
          <Image src={''} alt={article.title} />
        </div>
        <div className={'card-body'}>
          <div className={'card-category'}>
            <span>{'분야1'}</span>
            <span>{'마약정책과'}</span>
          </div>
          <div className={'card-contentBox'}>
            <div className={'card-title'}>{article.title}</div>
            <div className={'card-info'}>
              <span className={'detail'}>
                <PersonIcon />
                {'홍길동'}
              </span>
              <span className={'detail'}>
                <VisibilityIcon />
                {'98,765'}
              </span>
              <span className={'detail'}>
                <CreateIcon />
                {article.createTm}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .card {
    &-link {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 100%;
      padding: 1rem;
      border: 1px solid #bbb;
    }
    &-img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;
      aspect-ratio: 1/1;

      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background-color: #ddd;
      }
    }
    &-body {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      flex-grow: 1;
    }
    &-category {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & span {
        padding: 0.5rem;
        font-size: 1.3rem;
        border: 1px solid #bbb;
      }
    }
    &-contentBox {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
      height: 100%;
    }
    &-title {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: 1.5rem;
      font-weight: bold;
    }
    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1.3rem;

      .detail {
        display: inline-flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 1.2rem;
      }
    }
  }
`;
