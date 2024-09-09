import Link from 'next/link';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styled from '@emotion/styled';
import Card from '@/components/share/Card';
import {IArticle} from '@/types/share/responseTypes';

export default function CardList({articles}: {articles: IArticle[]}) {
  return (
    <>
      {articles.length > 0 ? (
        <Container>
          {articles.map(article => (
            <Card key={article.id} article={article} />
          ))}
        </Container>
      ) : (
        <div className={'table-empty'}>
          <p>등록된 게시글이 없습니다.</p>
        </div>
      )}
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1150px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  //
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  //@media (max-width: 576px) {
  //  grid-template-columns: 1fr;
  //}
`;
