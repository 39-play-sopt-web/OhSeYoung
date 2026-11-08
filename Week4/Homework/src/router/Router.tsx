import { createBrowserRouter, Navigate } from 'react-router';
import Layout from '../components/Layout';
import AuthGuard from '../components/AuthGuard';
import MemberCodePage from '../pages/MemberCodePage';
import PostListPage from '../pages/PostListPage';
import PostWritePage from '../pages/PostWritePage';
import PostDetailPage from '../pages/PostDetailPage';
import PostEditPage from '../pages/PostEditPage';

export const router = createBrowserRouter([
  { path: '/', Component: MemberCodePage },
  {
    Component: Layout,
    children: [
      { path: '/posts', Component: PostListPage },
      { path: '/posts/:postId', Component: PostDetailPage },
      {
        Component: AuthGuard,
        children: [
          { path: '/posts/new', Component: PostWritePage },
          { path: '/posts/:postId/edit', Component: PostEditPage },
        ],
      },
    ],
  },
  { path: '*', element: <Navigate to="/posts" replace /> },
]);
