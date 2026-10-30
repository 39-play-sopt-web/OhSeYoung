import styled from "@emotion/styled";
import { Link } from "react-router";

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 20px 24px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: 800;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Main = styled.main`
  max-width: 1160px;
  margin: 0 auto;
  padding: 40px 24px 80px;
`;
