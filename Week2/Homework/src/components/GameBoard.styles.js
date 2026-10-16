import styled from "@emotion/styled";
import { colors } from "../styles/colors";

export const Container = styled.section`
  padding: 48px 16px;
  text-align: center;
`;

export const Progress = styled.p`
  margin: 0 0 36px;
  color: ${colors.gray};

  strong {
    margin: 0 4px;
    font-size: 30px;
    color: ${colors.text};
  }
`;

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ boardSize }) => boardSize}, 1fr);
  gap: 10px;
  width: 470px;
  max-width: 100%;
  aspect-ratio: 1;
  margin: 0 auto;
`;
