import { useEffect, useRef, useState } from 'react';
import { getMovies } from '../apis/movie';
import MovieCard from '../components/MovieCard';
import RatingFilterBar from '../components/RatingFilterBar';
import { RATING_FILTERS } from '../constants/ratingFilters';
import type { Movie, RatingFilter } from '../types/movie';
import * as S from './MovieListPage.styles';

function MovieListPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filter, setFilter] = useState<RatingFilter>(RATING_FILTERS[0]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // 필터나 페이지가 바뀌면 영화 목록 불러오기
  useEffect(() => {
    let ignore = false; // 필터 빨리 바꾸면 이전 필터 응답이 늦게 와서 섞이길래 넣음

    const fetchMovies = async () => {
      try {
        const data = await getMovies(page, filter.gte, filter.lte);
        if (ignore) return;

        if (page === 1) {
          setMovies(data.results);
        } else {
          // 다음 페이지에 같은 영화가 또 오는 경우가 있어서 (key 중복 경고 뜸) 이미 있는 건 빼고 추가
          setMovies((prev) => [
            ...prev,
            ...data.results.filter((movie) => !prev.some((item) => item.id === movie.id)),
          ]);
        }
        setHasMore(page < data.total_pages && page < 500); // TMDB는 500페이지까지만 됨
      } catch (error) {
        if (ignore) return;
        console.error('영화 목록을 불러오지 못했습니다.', error);
        setIsError(true);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };

    fetchMovies();

    return () => {
      ignore = true;
    };
  }, [filter, page]);

  // 무한 스크롤: 맨 아래 빈 div가 화면에 보이면 다음 페이지
  // 로딩 끝날 때마다 다시 붙여야 화면이 덜 찼을 때도 계속 불러옴
  useEffect(() => {
    if (!bottomRef.current || isLoading || isError || !hasMore) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsLoading(true);
        setPage((prev) => prev + 1);
      }
    });
    observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, [isLoading, isError, hasMore]);

  // 필터 바꾸면 목록이랑 페이지 처음으로 돌리고 1페이지부터 다시 불러옴
  function handleSelectFilter(newFilter: RatingFilter) {
    if (newFilter.label === filter.label) return; // 같은 필터 다시 누르면 무시
    setFilter(newFilter);
    setPage(1);
    setMovies([]);
    setHasMore(true);
    setIsLoading(true);
    setIsError(false);
    window.scrollTo(0, 0);
  }

  return (
    <section>
      <S.PageTitle>영화 둘러보기</S.PageTitle>
      <RatingFilterBar selected={filter} onSelect={handleSelectFilter} />

      <S.MovieGrid>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </S.MovieGrid>

      {isLoading && <S.Message>영화를 불러오는 중이에요...</S.Message>}
      {isError && <S.Message>영화를 불러오지 못했어요.</S.Message>}
      {!isLoading && !isError && movies.length === 0 && (
        <S.Message>조건에 맞는 영화가 없어요.</S.Message>
      )}

      <div ref={bottomRef} />
    </section>
  );
}

export default MovieListPage;
