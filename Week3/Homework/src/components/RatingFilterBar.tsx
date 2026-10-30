import { RATING_FILTERS } from '../constants/ratingFilters';
import type { RatingFilter } from '../types/movie';
import * as S from './RatingFilterBar.styles';

interface RatingFilterBarProps {
  selected: RatingFilter;
  onSelect: (filter: RatingFilter) => void;
}

function RatingFilterBar({ selected, onSelect }: RatingFilterBarProps) {
  return (
    <S.FilterList aria-label="별점 필터">
      {RATING_FILTERS.map((filter) => {
        const isSelected = filter.label === selected.label;
        return (
          <S.FilterButton
            key={filter.label}
            isSelected={isSelected}
            aria-pressed={isSelected} // 선택된 버튼인지 스크린리더도 알 수 있게 (2주차 리뷰 반영)
            onClick={() => onSelect(filter)}
          >
            {filter.label}
          </S.FilterButton>
        );
      })}
    </S.FilterList>
  );
}

export default RatingFilterBar;
