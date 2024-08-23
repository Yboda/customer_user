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
    position: absolute;
    top: 5rem;
    left: 50%;
    width: 100%;
    max-width: 1400px;
    height: auto;
    transform: translateX(-50%);
  }
`;
