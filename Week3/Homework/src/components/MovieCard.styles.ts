import styled from "@emotion/styled";
import { Link } from "react-router";

// hover하면 살짝 위로 올라가고 테두리 민트색
export const Card = styled(Link)`
  display: block;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.card};
  transition: all 0.2s;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  }
`;

// 포스터 비율 2:3 고정 (이미지 늦게 떠도 카드 높이 안 흔들리게)
export const PosterBox = styled.div`
  position: relative;
  aspect-ratio: 2 / 3;
  background-color: ${({ theme }) => theme.colors.cardHover};
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NoPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
`;

export const BadgeBox = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
`;

export const Info = styled.div`
  padding: 12px;
`;

export const Title = styled.h3`
  overflow: hidden;
  margin-bottom: 4px;
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ReleaseDate = styled.p`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 13px;
`;

// 줄거리는 3줄까지만
export const Overview = styled.p`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: ${({ theme }) => theme.colors.subText};
  font-size: 12px;
  line-height: 1.6;
`;
