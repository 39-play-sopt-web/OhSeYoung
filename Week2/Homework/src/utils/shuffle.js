// sort(() => Math.random() - 0.5)는 고르게 안 섞인다고 해서 찾아보고 이 방식 씀
export function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }

  return result;
}

export function makeNumbers(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
