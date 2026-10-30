import styled from "@emotion/styled";

export const FilterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const FilterButton = styled.button<{ isSelected: boolean }>`
  padding: 8px 16px;
  border-radius: 20px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.button};
  color: ${({ theme, isSelected }) => (isSelected ? theme.colors.black : theme.colors.subText)};
  font-size: 14px;
  font-weight: ${({ isSelected }) => (isSelected ? 700 : 500)};
`;
