import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getMovieDetail } from '../apis/movie';
import RatingBadge from '../components/RatingBadge';
import { IMAGE_BASE_URL } from '../constants/image';
import type { MovieDetail } from '../types/movie';
import { formatDate, formatLanguage, formatMoney, formatRuntime } from '../utils/format';
import * as S from './MovieDetailPage.styles';

function MovieDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!movieId) return;
      try {
        const data = await getMovieDetail(movieId);
        setMovie(data);
      } catch (error) {
        console.error('영화 정보를 불러오지 못했습니다.', error);
        setIsError(true);
      }
    };
    fetchMovie();
  }, [movieId]);

  if (isError) {
    return (
      <>
        <S.BackLink to="/">← 목록으로 돌아가기</S.BackLink>
        <S.Message>영화 정보를 불러오지 못했어요.</S.Message>
      </>
    );
  }

  if (!movie) return <S.Message>불러오는 중...</S.Message>;

  // 기본 정보 카드 6개는 map으로 그리려고 배열로 만듦
  const infoList = [
    { label: '원제', value: movie.original_title },
    { label: '원어', value: formatLanguage(movie.original_language) },
    {
      label: '제작 국가',
      value: movie.production_countries.map((country) => country.name).join(', ') || '정보 없음',
    },
    {
      label: '사용 언어',
      value:
        movie.spoken_languages.map((language) => language.name || language.english_name).join(', ') ||
        '정보 없음',
    },
    { label: '예산', value: formatMoney(movie.budget) },
    { label: '수익', value: formatMoney(movie.revenue) },
  ];

  return (
    <>
      <S.BackLink to="/">← 목록으로 돌아가기</S.BackLink>

      <S.Top
        backdrop={movie.backdrop_path ? `${IMAGE_BASE_URL}/w1280${movie.backdrop_path}` : ''}
      >
        {movie.poster_path && (
          <S.Poster src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`} alt={movie.title} />
        )}
        <S.TopInfo>
          <S.Title>{movie.title}</S.Title>
          {movie.tagline && <S.Tagline>{movie.tagline}</S.Tagline>}
          <S.MetaList>
            <RatingBadge rating={movie.vote_average} />
            <span>{formatDate(movie.release_date)}</span>
            <span>{formatRuntime(movie.runtime)}</span>
            <span>투표 {movie.vote_count.toLocaleString()}명</span>
            <S.Status>{movie.status}</S.Status>
          </S.MetaList>
          <S.GenreList>
            {movie.genres.map((genre) => (
              <S.Genre key={genre.id}>{genre.name}</S.Genre>
            ))}
          </S.GenreList>
        </S.TopInfo>
      </S.Top>

      <S.SubTitle>줄거리</S.SubTitle>
      <S.Overview>{movie.overview || '등록된 줄거리가 없습니다.'}</S.Overview>

      <S.SubTitle>기본 정보</S.SubTitle>
      <S.InfoGrid>
        {infoList.map((info) => (
          <S.InfoCard key={info.label}>
            <S.InfoLabel>{info.label}</S.InfoLabel>
            <S.InfoValue>{info.value}</S.InfoValue>
          </S.InfoCard>
        ))}
      </S.InfoGrid>
    </>
  );
}

export default MovieDetailPage;
