import styled from '@emotion/styled';

type Props = {
  categories: string[];
  categoryState: string;
  setCategoryState: React.Dispatch<React.SetStateAction<string>>;
};

export default function CategoryList({categories, categoryState, setCategoryState}: Props) {
  return (
    <Container>
      {categories.map((category, i) => (
        <div
          key={category}
          className={`category ${category === categoryState ? 'active' : ''}`}
          onClick={() => setCategoryState(category)}
        >
          {category}
        </div>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1rem 0;

  .category {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 10rem;
    padding: 0.5rem;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    color: #000;
    font-size: 1.3rem;
    font-weight: 500;
    cursor: pointer;

    &.active {
      background-color: #000;
      color: #fff;
      font-weight: 700;
    }
  }
`;
