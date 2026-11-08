import styled from "@emotion/styled";

export const PageTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Message = styled.p`
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  text-align: center;
`;
