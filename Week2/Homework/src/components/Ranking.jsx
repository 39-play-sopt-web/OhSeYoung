import { useState } from 'react';
import { getRecords, clearRecords } from '../utils/storage';
import * as S from './Ranking.styles';

// 레벨 높은 순, 레벨 같으면 빠른 순
function sortRecords(records) {
  return [...records].sort((a, b) => {
    if (a.level !== b.level) return b.level - a.level;
    return a.playTime - b.playTime;
  });
}

function Ranking() {
  const [records, setRecords] = useState(() => sortRecords(getRecords()));

  function handleReset() {
    clearRecords();
    setRecords([]);
  }

  return (
    <S.Container>
      <S.Top>
        <S.Title>🏆 랭킹</S.Title>
        <S.ResetButton onClick={handleReset}>초기화</S.ResetButton>
      </S.Top>

      {records.length === 0 ? (
        <S.Empty>아직 기록이 없어요.</S.Empty>
      ) : (
        <S.Table>
          <thead>
            <tr>
              <th>순위</th>
              <th>레벨</th>
              <th>플레이 시간</th>
              <th>기록 시각</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>Level {record.level}</td>
                <td>{record.playTime.toFixed(2)}초</td>
                <td>{record.playedAt}</td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      )}
    </S.Container>
  );
}

export default Ranking;
