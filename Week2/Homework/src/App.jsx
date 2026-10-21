import { useState } from 'react';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import Ranking from './components/Ranking';
import ResultModal from './components/ResultModal';
import useTimer from './hooks/useTimer';
import { saveRecord } from './utils/storage';

function App() {
  const [menu, setMenu] = useState('game');
  const [level, setLevel] = useState(1);
  const [round, setRound] = useState(0); // 다시 시작할 때마다 +1
  const [result, setResult] = useState(null);
  const { time, startTimer, stopTimer, resetTimer } = useTimer();

  // key가 바뀌면 GameBoard가 아예 새로 만들어진다고 해서 이걸로 초기화함
  function resetGame() {
    resetTimer();
    setResult(null);
    setRound((prev) => prev + 1);
  }

  function handleMenuChange(nextMenu) {
    if (menu === nextMenu) return;
    resetGame();
    setMenu(nextMenu);
  }

  function handleLevelChange(nextLevel) {
    setLevel(nextLevel);
    resetGame();
  }

  function handleFinish() {
    const playTime = stopTimer(); // 멈춘 시간 받아오기
    const record = {
      playedAt: new Date().toLocaleString('ko-KR'),
      level,
      playTime,
    };
    saveRecord(record);
    setResult(record);
  }

  return (
    <div>
      <Header
        menu={menu}
        onMenuChange={handleMenuChange}
        level={level}
        onLevelChange={handleLevelChange}
        time={time}
      />
      <main>
        {menu === 'game' ? (
          <GameBoard
            key={`${level}-${round}`}
            level={level}
            onStart={startTimer}
            onFinish={handleFinish}
          />
        ) : (
          <Ranking />
        )}
      </main>
      {result && <ResultModal record={result} onClose={resetGame} />}
    </div>
  );
}

export default App;
