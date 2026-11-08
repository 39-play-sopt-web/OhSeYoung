import styled from "@emotion/styled";
import { Link } from "react-router";

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.subText};
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Message = styled.p`
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  text-align: center;
`;

export const Article = styled.article`
  padding: 28px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.card};
`;

export const ArticleHeader = styled.header`
  padding-bottom: 16px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.h1`
  margin-bottom: 8px;
  font-size: 24px;
  word-break: break-all;
`;

export const Meta = styled.div`
  display: flex;
  gap: 8px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 13px;
`;

export const Author = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const Content = styled.p`
  min-height: 120px;
  color: ${({ theme }) => theme.colors.subText};
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-all;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`;
