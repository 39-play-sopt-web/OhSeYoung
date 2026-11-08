import { Outlet } from 'react-router';
import Header from './Header';
import * as S from './Layout.styles';

function Layout() {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
    </>
  );
}

export default Layout;
