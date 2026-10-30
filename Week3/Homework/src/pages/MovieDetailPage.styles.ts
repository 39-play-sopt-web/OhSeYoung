import styled from "@emotion/styled";
import { Link } from "react-router";

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
`;

export const Message = styled.p`
  padding: 40px 0;
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
`;

// 배경 이미지 위에 어두운 그라데이션을 깔아서 글자가 잘 보이게
export const Top = styled.div<{ backdrop: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.card};
  background-image: linear-gradient(90deg, rgba(28, 28, 36, 0.95), rgba(28, 28, 36, 0.5)),
    url(${({ backdrop }) => backdrop});
  background-size: cover;
  background-position: center;
`;

export const Poster = styled.img`
  width: 200px;
  border-radius: 10px;
`;

export const TopInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 14px;
  min-width: 240px;
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const Tagline = styled.p`
  color: ${({ theme }) => theme.colors.subText};
  font-style: italic;
`;

export const MetaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 14px;
  color: ${({ theme }) => theme.colors.subText};
  font-size: 14px;
`;

export const Status = styled.span`
  padding: 4px 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text};
`;

export const GenreList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Genre = styled.li`
  padding: 5px 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.cardHover};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
`;

export const SubTitle = styled.h3`
  margin: 40px 0 14px;
  font-size: 20px;
`;

export const Overview = styled.p`
  color: ${({ theme }) => theme.colors.subText};
  line-height: 1.8;
`;

export const InfoGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
`;

export const InfoCard = styled.li`
  padding: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.card};
`;

export const InfoLabel = styled.p`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
`;

export const InfoValue = styled.p`
  font-weight: 600;
  line-height: 1.5;
`;
