import { createPortal } from 'react-dom';
import * as S from './ResultModal.styles';

// alert 대신 createPortal로 body에 바로 띄우는 모달
function ResultModal({ record, onClose }) {
  return createPortal(
    <S.Overlay>
      <S.Box>
        <S.Title>🎉 Level {record.level} 클리어!</S.Title>
        <S.Time>{record.playTime.toFixed(2)}초</S.Time>
        <S.Button onClick={onClose}>확인</S.Button>
      </S.Box>
    </S.Overlay>,
    document.body,
  );
}

export default ResultModal;
