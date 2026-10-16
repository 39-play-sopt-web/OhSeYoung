import styled from "@emotion/styled";
import { colors } from "../styles/colors";

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 12px 28px;
  background-color: ${colors.white};
  border-bottom: 1px solid #eee;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 19px;
  color: ${colors.text};
`;

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
`;

export const MenuButton = styled.button`
  padding: 9px 18px;
  border: none;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? colors.primary : "transparent")};
  color: ${({ isActive }) => (isActive ? colors.text : colors.gray)};
  font-weight: 600;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 14px;
  min-height: 36px;
`;

export const Select = styled.select`
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: ${colors.white};
`;

export const Timer = styled.span`
  min-width: 82px;
  padding: 8px 10px;
  border-radius: 6px;
  background-color: ${colors.primary};
  color: ${colors.text};
  text-align: center;
  font-weight: 700;
`;
