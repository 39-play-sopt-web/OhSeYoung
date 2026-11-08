import styled from "@emotion/styled";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 360px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin-bottom: 8px;
  font-size: 28px;
`;

export const Description = styled.p`
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.subText};
  font-size: 14px;
`;

export const Row = styled.div`
  display: flex;
  gap: 8px;
`;

export const Select = styled.select`
  flex: 1;
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.card};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const IssueButton = styled.button`
  padding: 10px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  font-weight: 700;
  transition: background-color 0.3s;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.error};
  font-size: 13px;
`;

export const ListButton = styled.button`
  margin-top: 12px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.subText};
  font-size: 14px;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.subText};
    color: ${({ theme }) => theme.colors.text};
  }
`;
