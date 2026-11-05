import styled from "@emotion/styled";

export const PageTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
`;

export const MovieGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`;

export const Message = styled.p`
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  text-align: center;
`;
