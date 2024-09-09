'use client';
import styled from '@emotion/styled';
import MenuBar from '@/components/MenuBar';

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <Container>
      <MenuBar />
      <main className={'content-layout'}>{children}</main>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
  min-height: 100vh;

  .content-layout {
    //max-width: 1400px;
    min-height: calc(100vh - 5rem);
    //transform: translateX(-50%);
    padding: 0 4rem;
    background-color: rgba(223, 229, 234, 1);
  }
`;
