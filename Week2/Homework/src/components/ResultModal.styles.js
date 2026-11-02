import styled from "@emotion/styled";
import { colors } from "../styles/colors";

// 리뷰 반영: 일반 div 대신 dialog와 ::backdrop을 사용해 모달을 구현
export const Box = styled.dialog`
  width: min(360px, calc(100% - 32px));
  padding: 28px;
  border: none;
  border-radius: 10px;
  background-color: ${colors.white};
  text-align: center;
  color: ${colors.gray};

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.35);
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  color: ${colors.text};
`;

export const Time = styled.strong`
  display: block;
  margin: 22px 0;
  font-size: 32px;
  color: ${colors.text};
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background-color: ${colors.primary};
  color: ${colors.text};
  font-weight: 700;

  &:hover {
    background-color: ${colors.primaryDark};
  }
`;
