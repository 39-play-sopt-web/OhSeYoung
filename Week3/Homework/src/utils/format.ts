// "2026-07-29" -> "2026년 7월 29일"
export function formatDate(date: string) {
  if (!date) return '개봉일 미정';
  const [year, month, day] = date.split('-');
  return `${year}년 ${Number(month)}월 ${Number(day)}일`; // Number로 앞에 0 없앰
}

// 94 -> "1시간 34분"
export function formatRuntime(runtime: number | null) {
  if (!runtime) return '정보 없음';
  const hour = Math.floor(runtime / 60);
  const minute = runtime % 60;
  return hour > 0 ? `${hour}시간 ${minute}분` : `${minute}분`;
}

// 75000000 -> "$75,000,000" (0이면 TMDB에 정보가 없는 거라 정보 없음)
export function formatMoney(money: number) {
  return money ? `$${money.toLocaleString()}` : '정보 없음';
}

// 원어가 "en"처럼 코드로 와서 한글로 바꿈 (목록에 없는 건 코드 그대로)
const LANGUAGE_NAMES: Record<string, string> = {
  en: '영어',
  ko: '한국어',
  ja: '일본어',
  zh: '중국어',
  fr: '프랑스어',
  de: '독일어',
  es: '스페인어',
  it: '이탈리아어',
  hi: '힌디어',
  ru: '러시아어',
};

export function formatLanguage(code: string) {
  return LANGUAGE_NAMES[code] ?? code;
}
