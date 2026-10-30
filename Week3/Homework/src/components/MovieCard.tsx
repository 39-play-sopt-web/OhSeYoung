import { IMAGE_BASE_URL } from '../constants/image';
import type { Movie } from '../types/movie';
import { formatDate } from '../utils/format';
import RatingBadge from './RatingBadge';
import * as S from './MovieCard.styles';

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <S.Card to={`/movie/${movie.id}`}>
      <S.PosterBox>
        {/* 포스터 없는 영화도 있어서 그럴 땐 회색 박스 */}
        {movie.poster_path ? (
          <S.Poster src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`} alt={movie.title} />
        ) : (
          <S.NoPoster>포스터 없음</S.NoPoster>
        )}
        <S.BadgeBox>
          <RatingBadge rating={movie.vote_average} />
        </S.BadgeBox>
      </S.PosterBox>
      <S.Info>
        <S.Title>{movie.title}</S.Title>
        <S.ReleaseDate>{formatDate(movie.release_date)}</S.ReleaseDate>
        <S.Overview>{movie.overview || '등록된 줄거리가 없습니다.'}</S.Overview>
      </S.Info>
    </S.Card>
  );
}

export default MovieCard;
