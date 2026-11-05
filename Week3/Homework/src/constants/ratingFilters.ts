import type { RatingFilter } from '../types/movie';

// 별점 필터 버튼 목록 (gte: 이상, lte: 미만 / lte가 10이면 이하)
// API에는 lte 그대로 보내고, 미만 처리는 목록 페이지에서 한 번 더 거름
export const RATING_FILTERS: RatingFilter[] = [
  { label: '전체', gte: 0, lte: 10 },
  { label: '9점 이상', gte: 9, lte: 10 },
  { label: '8 ~ 9점', gte: 8, lte: 9 },
  { label: '7 ~ 8점', gte: 7, lte: 8 },
  { label: '6 ~ 7점', gte: 6, lte: 7 },
  { label: '6점 미만', gte: 0, lte: 6 },
];
