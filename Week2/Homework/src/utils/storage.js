const STORAGE_KEY = 'ranking';

export function getRecords() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveRecord(record) {
  const records = getRecords();
  // 리뷰 반영: 새 기록마다 고유 ID를 추가해서 랭킹의 React key로 사용
  const newRecord = {
    ...record,
    id: crypto.randomUUID(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...records, newRecord]));
}

export function clearRecords() {
  localStorage.removeItem(STORAGE_KEY);
}
