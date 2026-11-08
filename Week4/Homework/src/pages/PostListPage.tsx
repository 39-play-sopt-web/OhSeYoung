import { useEffect, useRef, useState } from 'react';
import PostCard from '../components/PostCard';
import { usePostList } from '../hooks/usePostQueries';
import * as S from './PostListPage.styles';

function PostListPage() {
  const [inputValue, setInputValue] = useState('');
  const [keyword, setKeyword] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const { data, isPending, isError, hasNextPage, isFetchingNextPage, fetchNextPage } =
    usePostList(keyword);

  const posts = data?.pages.flatMap((page) => page.posts) ?? [];

  useEffect(() => {
    if (!bottomRef.current || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });
    observer.observe(bottomRef.current);

    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setKeyword(inputValue.trim());
  }

  function handleChange(value: string) {
    setInputValue(value);
    // 다 지우면 전체 목록으로
    if (!value.trim()) setKeyword('');
  }

  return (
    <section>
      <S.SearchForm onSubmit={handleSearch} role="search">
        <S.SearchInput
          type="search"
          aria-label="제목 검색"
          placeholder="제목으로 검색"
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
        />
        <S.SearchButton type="submit" disabled={!inputValue.trim()}>
          검색
        </S.SearchButton>
      </S.SearchForm>

      {isPending && <S.Message>게시글을 불러오는 중이에요...</S.Message>}
      {isError && <S.Message>게시글을 불러오지 못했어요.</S.Message>}
      {!isPending && !isError && posts.length === 0 && (
        <S.Message>{keyword ? `'${keyword}' 검색 결과가 없어요.` : '아직 게시글이 없어요.'}</S.Message>
      )}

      <S.PostList>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </S.PostList>

      {isFetchingNextPage && <S.Message>더 불러오는 중...</S.Message>}
      <div ref={bottomRef} />
    </section>
  );
}

export default PostListPage;
