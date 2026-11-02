import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import * as S from './ResultModal.styles';

// 리뷰 반영: createPortal은 유지하고 native dialog의 showModal()로 모달 접근성 개선
function ResultModal({ record, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();

    return () => dialog.close();
  }, []);

  function handleCancel(event) {
    // 리뷰 반영: Escape로 dialog만 닫혀 React의 result 상태와 어긋나는 상황 방지
    event.preventDefault();
  }

  return createPortal(
    <S.Box
      ref={dialogRef}
      aria-labelledby="result-title"
      onCancel={handleCancel}
    >
      <S.Title id="result-title">🎉 Level {record.level} 클리어!</S.Title>
      <S.Time>{record.playTime.toFixed(2)}초</S.Time>
      <S.Button type="button" autoFocus onClick={onClose}>확인</S.Button>
    </S.Box>,
    document.body,
  );
}

export default ResultModal;
