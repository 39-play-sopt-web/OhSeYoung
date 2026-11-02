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
  /* 리뷰 반영: 각 레벨의 행과 열을 균등하게 배치해서 빈칸이 생겨도 셀 크기를 유지 */
  grid-template-columns: repeat(${({ boardSize }) => boardSize}, minmax(0, 1fr));
  grid-template-rows: repeat(${({ boardSize }) => boardSize}, minmax(0, 1fr));
  gap: 10px;
  width: 470px;
  max-width: 100%;
  aspect-ratio: 1;
  margin: 0 auto;
`;
