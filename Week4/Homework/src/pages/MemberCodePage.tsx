import { useState } from 'react';
import { useNavigate } from 'react-router';
import { PARTS } from '../constants/member';
import { useIssueCode } from '../hooks/useIssueCode';
import { useAuthStore } from '../stores/authStore';
import type { Part } from '../types/member';
import * as S from './MemberCodePage.styles';

function MemberCodePage() {
  const [part, setPart] = useState<Part | ''>('');
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const { mutate, isPending, isError } = useIssueCode();

  function handleIssue() {
    if (!part) return;
    mutate(part, {
      onSuccess: (authorizationCode) => {
        login(authorizationCode, part);
        navigate('/posts');
      },
    });
  }

  return (
    <S.Wrapper>
      <S.Title>PLAY SOPT 게시판</S.Title>
      <S.Description>파트를 선택하면 회원 코드가 발급됩니다.</S.Description>

      <S.Row>
        <S.Select
          aria-label="파트 선택"
          value={part}
          onChange={(e) => setPart(e.target.value as Part)}
        >
          <option value="" disabled>
            파트를 선택하세요
          </option>
          {PARTS.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </S.Select>
        <S.IssueButton type="button" onClick={handleIssue} disabled={!part || isPending}>
          {isPending ? '발급 중...' : '코드 발급받기'}
        </S.IssueButton>
      </S.Row>

      {isError && <S.ErrorMessage>코드 발급에 실패했어요. 잠시 후 다시 시도해 주세요.</S.ErrorMessage>}

      <S.ListButton type="button" onClick={() => navigate('/posts')}>
        게시판 목록 보기
      </S.ListButton>
    </S.Wrapper>
  );
}

export default MemberCodePage;
