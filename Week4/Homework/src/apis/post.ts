import { apiClient, getAuthHeaders } from './apiClient';
import { PAGE_SIZE } from '../constants/post';
import type { ApiResponse } from '../types/api';
import type {
  CreatePostRequest,
  Post,
  PostListResponse,
  UpdatePostRequest,
} from '../types/post';

// 게시글 목록
export const getPosts = async ({ keyword, cursor }: { keyword: string; cursor: number | null }) => {
  const res = await apiClient.get<ApiResponse<PostListResponse>>('/posts', {
    params: {
      keyword: keyword || undefined,
      cursor: cursor ?? undefined,
      size: PAGE_SIZE,
    },
  });
  return res.data.data;
};

// 게시글 상세
export const getPostDetail = async (postId: number) => {
  const res = await apiClient.get<ApiResponse<Post>>(`/posts/${postId}`);
  return res.data.data;
};

// 게시글 작성
export const createPost = async (body: CreatePostRequest) => {
  const res = await apiClient.post<ApiResponse<Post>>('/posts', body, {
    headers: getAuthHeaders(),
  });
  return res.data.data;
};

// 게시글 수정
export const updatePost = async ({ postId, body }: { postId: number; body: UpdatePostRequest }) => {
  const res = await apiClient.put<ApiResponse<Post>>(`/posts/${postId}`, body, {
    headers: getAuthHeaders(),
  });
  return res.data.data;
};

// 게시글 삭제
export const deletePost = async (postId: number) => {
  await apiClient.delete(`/posts/${postId}`, {
    headers: getAuthHeaders(),
  });
};
