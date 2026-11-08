import styled from "@emotion/styled";

export const SearchForm = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.card};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const SearchButton = styled.button`
  padding: 0 18px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 700;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Message = styled.p`
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  text-align: center;
`;
