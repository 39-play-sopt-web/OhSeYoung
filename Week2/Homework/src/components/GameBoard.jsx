import { useState } from 'react';
import NumberCell from './NumberCell';
import { shuffle, makeNumbers } from '../utils/shuffle';
import * as S from './GameBoard.styles';

const LEVELS = {
  1: { size: 3, maxNumber: 18 },
  2: { size: 4, maxNumber: 32 },
  3: { size: 5, maxNumber: 50 },
};

function GameBoard({ level, onStart, onFinish }) {
  const { size, maxNumber } = LEVELS[level];
  const half = maxNumber / 2;

  // 처음엔 앞 절반만 보여주고, 누를 때마다 뒤 절반에서 하나씩 꺼내서 채움
  const [cells, setCells] = useState(() => shuffle(makeNumbers(1, half)));
  const [nextNumbers, setNextNumbers] = useState(() => shuffle(makeNumbers(half + 1, maxNumber)));
  const [nextNumber, setNextNumber] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(null); // 깜빡임 효과용

  function handleClick(number, index) {
    if (isFinished || number !== nextNumber) return;

    if (number === 1) onStart();

    const newCells = [...cells];
    newCells[index] = nextNumbers.length > 0 ? nextNumbers[0] : null; // 남은 숫자 없으면 빈칸
    setCells(newCells);
    setNextNumbers(nextNumbers.slice(1));
    setNextNumber(nextNumber + 1);
    setClickedIndex(index);

    if (number === maxNumber) {
      setIsFinished(true);
      onFinish();
    }
  }

  return (
    <S.Container>
      <S.Progress>
        다음 숫자 <strong>{isFinished ? maxNumber : nextNumber}</strong> (
        {isFinished ? maxNumber : nextNumber} / {maxNumber})
      </S.Progress>

      <S.Board boardSize={size}>
        {cells.map((number, index) => (
          <NumberCell
            key={`${index}-${number}`} // 숫자 바뀔 때 애니메이션 다시 나오게
            number={number}
            isClicked={index === clickedIndex}
            disabled={isFinished}
            onClick={() => handleClick(number, index)}
          />
        ))}
      </S.Board>
    </S.Container>
  );
}

export default GameBoard;
