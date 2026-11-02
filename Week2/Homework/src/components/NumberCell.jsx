import * as S from './NumberCell.styles';

function NumberCell({ number, isClicked, disabled, onClick }) {
  if (number === null) return <S.EmptyCell isClicked={isClicked} />;

  return (
    <S.Cell isClicked={isClicked} disabled={disabled} onClick={onClick}>
      {number}
    </S.Cell>
  );
}

export default NumberCell;
