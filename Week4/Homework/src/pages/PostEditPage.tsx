import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import TextField from '../components/TextField';
import { MAX_LENGTH } from '../constants/post';
import { usePostDetail } from '../hooks/usePostQueries';
import { useUpdatePost } from '../hooks/usePostMutations';
import { ButtonGroup, LineButton, PrimaryButton } from '../styles/button';
import type { Post } from '../types/post';
import { getErrorMessage } from '../utils/error';
import * as S from './PostEditPage.styles';

function PostEditPage() {
  const postId = Number(useParams().postId);
  const { data: post, isPending, isError } = usePostDetail(postId);

  if (isPending) return <S.Message>게시글을 불러오는 중이에요...</S.Message>;
  if (isError) return <S.Message>게시글을 불러오지 못했어요.</S.Message>;

  // 기존 값을 useState 초기값으로 넣으려고 데이터 받은 뒤에 폼 렌더링
  return <EditForm post={post} />;
}

function EditForm({ post }: { post: Post }) {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const navigate = useNavigate();
  const { mutate, isPending } = useUpdatePost();

  const isInvalid =
    !title.trim() ||
    !content.trim() ||
    title.length > MAX_LENGTH.title ||
    content.length > MAX_LENGTH.content;

  function handleSubmit() {
    mutate(
      { postId: post.id, body: { title, content } },
      {
        onSuccess: () => {
          alert('게시글이 수정되었어요.');
          navigate(`/posts/${post.id}`);
        },
        onError: (error) => {
          alert(getErrorMessage(error, '게시글 수정에 실패했어요.'));
        },
      },
    );
  }

  return (
    <section>
      <S.PageTitle>게시글 수정</S.PageTitle>

      <S.Fields>
        <TextField
          id="title"
          label="제목"
          value={title}
          maxLength={MAX_LENGTH.title}
          onChange={setTitle}
        />
        <TextField
          id="content"
          label="본문"
          value={content}
          maxLength={MAX_LENGTH.content}
          isTextarea
          onChange={setContent}
        />
      </S.Fields>

      <ButtonGroup>
        <LineButton type="button" onClick={() => navigate(`/posts/${post.id}`)}>
          취소
        </LineButton>
        <PrimaryButton type="button" onClick={handleSubmit} disabled={isInvalid || isPending}>
          {isPending ? '수정 중...' : '수정 완료'}
        </PrimaryButton>
      </ButtonGroup>
    </section>
  );
}

export default PostEditPage;
