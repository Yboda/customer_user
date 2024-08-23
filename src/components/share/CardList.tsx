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
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #bbb;
  @media (max-width: 1400px) {
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
  }
`;
