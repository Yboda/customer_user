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
          {article.thumbnail ? (
            <Image src={article.thumbnail} alt={'thumb'} width={293} height={164} />
          ) : (
            <div className={'empty'}>
              <Image src={'/assets/empty-image.svg'} alt={'thumb'} width={42} height={27} />
            </div>
          )}
          {article.badge && <div className={'badge'}>NEW</div>}
        </div>
        <div className={'card-body'}>
          <div className={'card-category'}>
            <span>{article.department}</span>
          </div>
          <div className={'card-contentBox'}>
            <div className={`card-title ${article.badge ? 'new' : ''}`}>{article.title}</div>
            <div className={'card-info'}>
              <div className={'detail'}>
                <Image src={'/assets/person.svg'} alt={'person'} width={14} height={14} />
                <span>{article.manager}</span>
              </div>
              <div className={'detail'}>
                <Image src={'/assets/view.svg'} alt={'view'} width={14} height={14} />
                <span>{article.count}</span>
              </div>
              <span className={'detail'}>
                <Image src={'/assets/calendar.svg'} alt={'calendar'} width={14} height={14} />
                <span>{article.createTm}</span>
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
  border-radius: 10px;
  overflow: hidden;

  &:hover {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.15);
  }

  .card {
    &-link {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      height: 100%;
    }
    &-img {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      //aspect-ratio: 136/79;
      overflow: hidden;
      background-color: #dbe2ed;

      & img {
        width: 100%;
        height: 100%;
        //aspect-ratio: 1/1;
        object-fit: cover;
      }
      .empty {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 4.2rem;
          height: 2.7rem;
        }
      }

      .badge {
        position: absolute;
        top: 1.2rem;
        left: 1.2rem;
        display: inline-flex;
        text-align: center;
        width: auto;
        padding: 0.2rem 0.6rem;
        background-color: #ff5151;
        color: #fff;
        font-size: 1.4rem;
        font-weight: 600;
        flex-shrink: 0;
        border-radius: 3px;
      }
    }
    &-body {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.2rem 1.6rem;
      flex-grow: 1;
      background-color: #fff;
    }
    &-category {
      display: flex;
      align-items: center;

      & span {
        font-size: 1.5rem;
        font-weight: 600;
        color: rgba(10, 15, 56, 0.72);
      }
    }
    &-contentBox {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.6rem;
      height: 100%;
    }
    &-title {
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: 1.6rem;
      font-weight: 700;
      color: rgba(10, 15, 56, 0.9);
      min-height: 3.8rem;

      &.new {
        color: #045fc9;
      }
    }
    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem 0;

      .detail {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        font-size: 1.4rem;
        font-weight: 500;
        color: rgba(10, 15, 56, 0.72);
        img {
          width: 1.4rem;
          height: 1.4rem;
        }
      }
    }
  }
`;
