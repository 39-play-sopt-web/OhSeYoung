import * as S from './Header.styles';

function Header({ menu, onMenuChange, level, onLevelChange, time }) {
  return (
    <S.Header>
      <S.Logo>🔢 숫자 클릭 게임</S.Logo>

      <S.Nav>
        <S.MenuButton isActive={menu === 'game'} onClick={() => onMenuChange('game')}>
          게임
        </S.MenuButton>
        <S.MenuButton isActive={menu === 'ranking'} onClick={() => onMenuChange('ranking')}>
          랭킹
        </S.MenuButton>
      </S.Nav>

      <S.Right>
        {menu === 'game' && (
          <>
            {/* value가 문자열로 넘어와서 Number로 바꿈 */}
            <S.Select value={level} onChange={(e) => onLevelChange(Number(e.target.value))}>
              <option value={1}>Level 1</option>
              <option value={2}>Level 2</option>
              <option value={3}>Level 3</option>
            </S.Select>
            <S.Timer>{time.toFixed(2)}초</S.Timer>
          </>
        )}
      </S.Right>
    </S.Header>
  );
}

export default Header;
