import { css } from "@emotion/react";
import type { Theme } from "@emotion/react";
import styled from "@emotion/styled";

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.subText};
  font-size: 13px;
`;

const inputStyle = (theme: Theme, isError: boolean) => css`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${isError ? theme.colors.error : theme.colors.border};
  border-radius: 8px;
  background-color: ${theme.colors.card};
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${isError ? theme.colors.error : theme.colors.primary};
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }
`;

export const Input = styled.input<{ isError: boolean }>`
  ${({ theme, isError }) => inputStyle(theme, isError)}
`;

export const Textarea = styled.textarea<{ isError: boolean }>`
  ${({ theme, isError }) => inputStyle(theme, isError)}
  height: 200px;
  line-height: 1.6;
  resize: none;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
`;

export const Count = styled.span<{ isError: boolean }>`
  margin-left: auto;
  color: ${({ theme, isError }) => (isError ? theme.colors.error : theme.colors.gray)};
`;
