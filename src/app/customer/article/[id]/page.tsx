'use client';
import styled from '@emotion/styled';
import {Box, Button, Pagination, TextField, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import {useParams, usePathname, useRouter} from 'next/navigation';
import {useFetchCommentList} from '@/hooks/customer/useFetchCommentList';
import {useFetchArticleDetail} from '@/hooks/customer/useFetchArticleDetail';
import CustomPagination from '@/components/CustomPagination';
import {useComment} from '@/hooks/customer/useComment';
import {useArticle} from '@/hooks/customer/useArticle';
import {IArticle, IComment, IUpdateArticle} from '@/types/customer/responseTypes';
import {articleTypeName} from '@/types/customer/constants';
import {IUser, useAuthStore} from '@/store/authStore';
import {ICreateComment} from '@/types/customer/requestTypes';

const DetailPage = () => {
  const [comment, setComment] = useState<string>('');
  const [targetId, setTargetId] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);

  const router = useRouter();
  const path = usePathname();
  const articleId = Number(useParams()?.id as string);

  const createCommentInfo = {articleId, content: comment};
  const {data: articleInfo} = useFetchArticleDetail(articleId);
  const {data: commentList} = useFetchCommentList(articleId, page - 1);

  const deleteArticleMutation = useArticle.Delete();
  const createCommentMutation = useComment.Create();

  const user = useAuthStore(state => state.user);

  const deleteArticleHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteArticleMutation.mutate(articleId, {
        onSuccess: data => {
          alert('삭제가 완료되었습니다.');
          router.back();
        },
      });
    }
  };

  const handleCreateComment = (e: React.FormEvent<HTMLFormElement>, createCommentInfo: ICreateComment) => {
    e.preventDefault();
    createCommentMutation.mutate(createCommentInfo, {
      onSuccess: data => {
        console.log('createMutationSuccess-------->', data);
      },
    });
  };

  const commentSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    handleCreateComment(e, createCommentInfo);
    setComment('');
  };

  return (
    <div>
      <h3>{articleTypeName[`${articleInfo?.typeCode}`]} 상세</h3>
      <qnaDetailStyle.Container>
        {/* Title */}
        <qnaDetailStyle.TitleWrapper>
          <qnaDetailStyle.Title>{articleInfo?.title}</qnaDetailStyle.Title>
          <qnaDetailStyle.TitleInfoWrap>
            <qnaDetailStyle.TitleInfo>
              <div>등록일 : {articleInfo?.createTm?.split('T')[0]}</div>
              <div>작성자 : {articleInfo?.writer}</div>
            </qnaDetailStyle.TitleInfo>
            {user?.name === articleInfo?.writer && (
              <qnaDetailStyle.TitleInfo>
                <Button type={'button'} size={'small'} onClick={() => router.push(`${path}/write`)}>
                  수정하기
                </Button>
                <Button type={'button'} size={'small'} onClick={deleteArticleHandler}>
                  삭제하기
                </Button>
              </qnaDetailStyle.TitleInfo>
            )}
          </qnaDetailStyle.TitleInfoWrap>
        </qnaDetailStyle.TitleWrapper>
        {/* Content */}
        <qnaDetailStyle.Content>
          <div dangerouslySetInnerHTML={{__html: articleInfo?.content}} />
        </qnaDetailStyle.Content>
        {/* comment */}
        <qnaDetailStyle.CommentsContainer>
          <h4>Comments</h4>
          <form onSubmit={commentSubmitHandler}>
            <qnaDetailStyle.CreateCommentBox>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={3}
                value={comment}
                onChange={e => setComment(e.target.value)}
                fullWidth
              />
              <Button type='submit' variant={'outlined'}>
                등록
              </Button>
            </qnaDetailStyle.CreateCommentBox>
          </form>
          <qnaDetailStyle.CommentList>
            {commentList?.list?.map(comment => (
              <RenderComment
                key={comment.id}
                comment={comment}
                targetId={targetId}
                setTargetId={setTargetId}
                paddingLeft={0}
                handleCreateComment={handleCreateComment}
                me={user}
              />
            ))}
          </qnaDetailStyle.CommentList>
          <CustomPagination
            total={commentList?.total}
            size={commentList?.size}
            page={page}
            setPage={setPage}
          />
        </qnaDetailStyle.CommentsContainer>
      </qnaDetailStyle.Container>
    </div>
  );
};

export default DetailPage;

type props = {
  comment: IComment;
  targetId: number | null;
  setTargetId: React.Dispatch<React.SetStateAction<number | null>>;
  paddingLeft: number;
  handleCreateComment?: (e: React.FormEvent<HTMLFormElement>, createCommentInfo: ICreateComment) => void;
  isReply?: boolean;
  me: IUser | null;
};

const RenderComment = ({
  comment,
  targetId,
  setTargetId,
  paddingLeft,
  handleCreateComment,
  isReply = false,
  me,
}: props) => {
  const [replyComment, setReplyComment] = useState<string>('');
  const [editedComment, setEditedComment] = useState<string>(comment.content);
  const [isEditMode, setIsEditMode] = useState(false);
  const createCommentInfo = {articleId: comment.articleId, content: replyComment, upperId: comment.id};
  const updateCommentInfo = {id: comment.id, content: editedComment};

  const updateCommentMutation = useComment.Update();
  const deleteCommentMutation = useComment.Delete();

  const commentSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    handleCreateComment(e, createCommentInfo);
    setTargetId(null);
    setReplyComment('');
  };

  const updateCommentHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, updateCommentInfo) => {
    console.log(updateCommentInfo);
    updateCommentMutation.mutate(updateCommentInfo, {
      onSuccess: data => {
        console.log(data);
      },
    });
  };

  const deleteCommentHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, commentId) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteCommentMutation.mutate(commentId, {
        onSuccess: data => {
          alert('삭제가 완료되었습니다.');
        },
      });
    }
  };

  return (
    <>
      <qnaDetailStyle.CommentPaddingBox key={comment.id} paddingLeft={paddingLeft}>
        {/*<SubdirectoryArrowRightIcon />*/}
        <qnaDetailStyle.Comment>
          <div className={'author'}>{comment.writer}</div>
          {isEditMode ? (
            <div className={'content'}>
              <TextField
                id='outlined-multiline-static'
                // multiline
                // rows={2}
                value={editedComment}
                onChange={e => setEditedComment(e.target.value)}
                fullWidth
              />
              <div>
                <Button
                  onClick={e => {
                    updateCommentHandler(e, updateCommentInfo);
                    setIsEditMode(false);
                  }}
                >
                  완료
                </Button>
                <Button onClick={() => setIsEditMode(false)}>취소</Button>
              </div>
            </div>
          ) : (
            <div className={'content'}>
              {comment.content}
              <div>
                {!isReply && (
                  <Button
                    type={'button'}
                    onClick={() => {
                      setTargetId(comment.id);
                    }}
                  >
                    댓글달기
                  </Button>
                )}
                {me?.name === comment.writer && (
                  <>
                    <Button onClick={() => setIsEditMode(true)}>수정</Button>
                    <Button onClick={e => deleteCommentHandler(e, comment.id)}>삭제</Button>
                  </>
                )}
              </div>
            </div>
          )}
          <div className={'date'}>{comment.createTm}</div>
        </qnaDetailStyle.Comment>
      </qnaDetailStyle.CommentPaddingBox>
      {/* 대댓글입력창 */}
      {comment.id === targetId && (
        <qnaDetailStyle.CommentPaddingBox paddingLeft={paddingLeft}>
          <form onSubmit={commentSubmitHandler}>
            <qnaDetailStyle.CreateCommentBox>
              <TextField
                id='outlined-multiline-static'
                multiline
                rows={2}
                value={replyComment}
                onChange={e => setReplyComment(e.target.value)}
                fullWidth
              />
              <div>
                <Button type='submit' variant={'outlined'}>
                  등록
                </Button>
                <Button type={'button'} onClick={() => setTargetId(null)}>
                  취소
                </Button>
              </div>
            </qnaDetailStyle.CreateCommentBox>
          </form>
        </qnaDetailStyle.CommentPaddingBox>
      )}
      {/* 대댓글 목록 */}
      {comment.reReplyList?.map(reply => (
        <RenderComment
          key={reply.id}
          comment={reply}
          targetId={targetId}
          setTargetId={setTargetId}
          paddingLeft={paddingLeft + 15}
          isReply={true}
          me={me}
        />
      ))}
    </>
  );
};

const qnaDetailStyle = {
  Container: styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px',
    borderTop: 'solid 1px #000',
    borderBottom: 'solid 1px #000',
  }),
  TitleWrapper: styled(Box)({
    padding: '20px',
    borderBottom: 'solid 1px #ccc',
  }),
  Title: styled(Typography)({
    fontWeight: 'bold',
  }),
  TitleInfoWrap: styled(Box)({
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  TitleInfo: styled(Box)({
    display: 'flex',
    gap: '20px',
    fontSize: '12px',
    // color: '#aaa',
  }),
  ButtonWrap: styled(Box)({}),
  Content: styled(Box)({
    padding: '20px',
  }),
  CreateCommentBox: styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '10px',
    '& button': {
      alignSelf: 'flex-end',
    },
  }),
  CommentsContainer: styled(Box)({
    marginTop: '30px',
    padding: '20px',
    borderTop: 'solid 1px #ccc',
  }),

  CommentList: styled('ul')({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
    padding: '20px',
    borderTop: 'solid 1px #ccc',
    fontSize: '14px',
    listStyle: 'none',
  }),
  CommentPaddingBox: styled('li')<{paddingLeft: any}>(({paddingLeft}) => ({
    paddingLeft: `${paddingLeft}px`,
  })),
  Comment: styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
    padding: '10px',
    '& .author': {
      width: '100px',
      fontWeight: 'bold',
      flexShrink: 0,
    },
    '& .content': {
      width: '100%',
    },
    '& .date': {
      width: '100px',
      textAlign: 'end',
      flexShrink: 0,
    },
  }),
};
