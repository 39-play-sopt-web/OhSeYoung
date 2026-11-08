import styled from "@emotion/styled";
import { Link } from "react-router";

export const Card = styled(Link)`
  display: block;
  padding: 16px 20px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.card};
  transition: border-color 0.2s, background-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.cardHover};
  }
`;

export const Title = styled.h2`
  overflow: hidden;
  margin-bottom: 6px;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Content = styled.p`
  overflow: hidden;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.subText};
  font-size: 13px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Meta = styled.div`
  display: flex;
  gap: 8px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
`;

export const Author = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;
