import WriteArticleForm from '@/components/customer/WriteArticleForm';

export default function WriteArticlePage() {
  return <WriteArticleForm />;
}

// 게시판종류 (select), 제목, 파일업로드, 에디터(textarea)
// table or div
// submit으로 보내줄 데이터 -> 게시판종류, 제목, 파일데이터, 본문 & image
// 각 페이지에는 render list << 공통 컴포넌트로 리스트 뿌려주기 - react query
