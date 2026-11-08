import { useNavigate, useParams } from 'react-router';
import { usePostDetail } from '../hooks/usePostQueries';
import { useDeletePost } from '../hooks/usePostMutations';
import { useAuthStore } from '../stores/authStore';
import { LineButton, PrimaryButton } from '../styles/button';
import { getErrorMessage } from '../utils/error';
import { formatDate } from '../utils/format';
import * as S from './PostDetailPage.styles';

function PostDetailPage() {
  const postId = Number(useParams().postId);
  const navigate = useNavigate();
  const authorizationCode = useAuthStore((state) => state.authorizationCode);
  const { data: post, isPending, isError } = usePostDetail(postId);
  const { mutate: deletePost, isPending: isDeleting } = useDeletePost();

  function handleDelete() {
    // 삭제는 라우트 가드가 없어서 여기서 막음
    if (!authorizationCode) {
      alert('회원 코드를 먼저 발급받아 주세요.');
      return;
    }
    if (!confirm('정말 삭제할까요?')) return;

    deletePost(postId, {
      onSuccess: () => {
        alert('게시글이 삭제되었어요.');
        navigate('/posts', { replace: true });
      },
      onError: (error) => {
        alert(getErrorMessage(error, '게시글 삭제에 실패했어요.'));
      },
    });
  }

  return (
    <section>
      <S.BackLink to="/posts">← 목록으로</S.BackLink>

      {isPending && <S.Message>게시글을 불러오는 중이에요...</S.Message>}
      {isError && <S.Message>게시글을 불러오지 못했어요.</S.Message>}

      {post && (
        <S.Article>
          <S.ArticleHeader>
            <S.Title>{post.title}</S.Title>
            <S.Meta>
              <S.Author>{post.author}</S.Author>
              <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
            </S.Meta>
          </S.ArticleHeader>

          <S.Content>{post.content}</S.Content>

          <S.Buttons>
            <LineButton type="button" onClick={() => navigate(`/posts/${postId}/edit`)}>
              수정
            </LineButton>
            <PrimaryButton type="button" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? '삭제 중...' : '삭제'}
            </PrimaryButton>
          </S.Buttons>
        </S.Article>
      )}
    </section>
  );
}

export default PostDetailPage;
