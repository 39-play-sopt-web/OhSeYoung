import { useNavigate } from 'react-router';
import { useAuthStore } from '../stores/authStore';
import * as S from './Header.styles';

function Header() {
  const part = useAuthStore((state) => state.part);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/', { replace: true });
  }

  return (
    <S.Header>
      <S.Left>
        <S.Logo to="/posts">
          PLAY SOPT <span>BOARD</span>
        </S.Logo>
        {part && <S.PartBadge>{part} 파트</S.PartBadge>}
      </S.Left>

      <S.Nav>
        <S.NavItem to="/posts" end>
          게시글 목록
        </S.NavItem>
        <S.NavItem to="/posts/new">글쓰기</S.NavItem>
        <S.LogoutButton type="button" onClick={handleLogout}>
          로그아웃
        </S.LogoutButton>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
