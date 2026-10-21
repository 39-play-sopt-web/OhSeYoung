import styled from "@emotion/styled";
import { colors } from "../styles/colors";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.35);
`;

export const Box = styled.div`
  width: 360px;
  padding: 28px;
  border-radius: 10px;
  background-color: ${colors.white};
  text-align: center;
  color: ${colors.gray};
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
