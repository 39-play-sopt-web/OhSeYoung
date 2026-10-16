import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { colors } from "../styles/colors";

// 누른 칸 민트색으로 깜빡
const flash = keyframes`
  0% {
    background-color: ${colors.primaryDark};
    transform: scale(0.94);
  }
  100% {
    background-color: ${colors.white};
    transform: scale(1);
  }
`;

// 빈칸 될 때도 깜빡이게
const emptyFlash = keyframes`
  0% {
    background-color: ${colors.primaryDark};
    transform: scale(0.94);
  }
  100% {
    background-color: transparent;
    transform: scale(1);
  }
`;

export const Cell = styled.button`
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  background-color: ${colors.white};
  color: ${colors.text};
  font-size: 24px;
  font-weight: 700;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  animation: ${({ isClicked }) => (isClicked ? flash : "none")} 0.3s ease-out;

  &:hover {
    background-color: #f2fffb;
  }

  &:active {
    background-color: ${colors.primaryDark};
    transform: scale(0.94);
  }
`;

export const EmptyCell = styled.div`
  border: 1px dashed #d6d6d6;
  border-radius: 10px;
  background-color: transparent;
  animation: ${({ isClicked }) => (isClicked ? emptyFlash : "none")} 0.3s
    ease-out;
`;
