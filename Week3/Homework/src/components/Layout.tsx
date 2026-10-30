import { Outlet } from 'react-router';
import * as S from './Layout.styles';

// 모든 페이지 위에 헤더 붙이는 공통 레이아웃
function Layout() {
  return (
    <>
      <S.Header>
        <S.Logo to="/">
          PLAY SOPT <span>MOVIE</span>
        </S.Logo>
      </S.Header>
      <S.Main>
        <Outlet />
      </S.Main>
    </>
  );
}

export default Layout;
