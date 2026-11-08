import type { Post } from '../types/post';
import { formatDate } from '../utils/format';
import * as S from './PostCard.styles';

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <S.Card to={`/posts/${post.id}`}>
      <article>
        <S.Title>{post.title}</S.Title>
        <S.Content>{post.content}</S.Content>
        <S.Meta>
          <S.Author>{post.author}</S.Author>
          <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
        </S.Meta>
      </article>
    </S.Card>
  );
}

export default PostCard;
