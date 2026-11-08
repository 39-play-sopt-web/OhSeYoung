import styled from "@emotion/styled";
import { Link, NavLink } from "react-router";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 800;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const PartBadge = styled.span`
  padding: 4px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
  font-weight: 500;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 14px;
`;

export const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.subText};
  transition: color 0.2s;

  &:hover,
  &[aria-current='page'] {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LogoutButton = styled.button`
  background: none;
  color: ${({ theme }) => theme.colors.subText};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
