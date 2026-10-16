const STORAGE_KEY = 'ranking';

export function getRecords() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveRecord(record) {
  const records = getRecords();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...records, record]));
}

export function clearRecords() {
  localStorage.removeItem(STORAGE_KEY);
}
