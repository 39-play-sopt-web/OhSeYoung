import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getPostDetail, getPosts } from '../apis/post';

export const usePostList = (keyword: string) => {
  return useInfiniteQuery({
    queryKey: ['posts', keyword],
    queryFn: ({ pageParam }) => getPosts({ keyword, cursor: pageParam }),
    initialPageParam: null as number | null,
    // 다음 페이지 없으면 undefined
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
  });
};

export const usePostDetail = (postId: number) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostDetail(postId),
  });
};
