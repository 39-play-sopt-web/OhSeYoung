import * as S from './RatingBadge.styles';

interface RatingBadgeProps {
  rating: number;
}

// 카드랑 상세 페이지 둘 다 써서 따로 뺌
function RatingBadge({ rating }: RatingBadgeProps) {
  return <S.Badge>★ {rating.toFixed(1)}</S.Badge>;
}

export default RatingBadge;
