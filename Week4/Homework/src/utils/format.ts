// 서버가 UTC 시각을 Z 없이 줘서 그대로 쓰면 9시간 느리게 나옴 → Z 붙여서 한국 시간으로 표시
export const formatDate = (dateString: string) => {
  const utcString = dateString.endsWith('Z') ? dateString : `${dateString}Z`;

  return new Date(utcString).toLocaleString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};
