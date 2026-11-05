import styled from "@emotion/styled";

export const Badge = styled.span`
  padding: 3px 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
  font-weight: 700;
`;
