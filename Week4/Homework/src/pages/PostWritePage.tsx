import { useState } from 'react';
import { useNavigate } from 'react-router';
import TextField from '../components/TextField';
import { MAX_LENGTH } from '../constants/post';
import { useCreatePost } from '../hooks/usePostMutations';
import { ButtonGroup, LineButton, PrimaryButton } from '../styles/button';
import type { CreatePostRequest } from '../types/post';
import { getErrorMessage } from '../utils/error';
import * as S from './PostWritePage.styles';

const STEPS = [
  { name: 'title', label: '제목', placeholder: '제목을 입력하세요', isTextarea: false },
  { name: 'content', label: '본문', placeholder: '본문을 입력하세요', isTextarea: true },
  { name: 'author', label: '작성자', placeholder: '작성자 이름을 입력하세요', isTextarea: false },
] as const;

function PostWritePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<CreatePostRequest>({ title: '', content: '', author: '' });
  const navigate = useNavigate();
  const { mutate, isPending } = useCreatePost();

  const currentStep = STEPS[step];
  const value = form[currentStep.name];
  const maxLength = MAX_LENGTH[currentStep.name];
  const isLastStep = step === STEPS.length - 1;
  const isDisabled = !value.trim() || value.length > maxLength || isPending;

  function handleChange(newValue: string) {
    setForm((prev) => ({ ...prev, [currentStep.name]: newValue }));
  }

  function handleNext() {
    if (!isLastStep) {
      setStep((prev) => prev + 1);
      return;
    }

    mutate(form, {
      onSuccess: (post) => {
        alert(`${post.author}님의 게시글이 작성되었어요!`);
        navigate('/posts');
      },
      onError: (error) => {
        alert(getErrorMessage(error, '게시글 작성에 실패했어요.'));
      },
    });
  }

  return (
    <section>
      <S.PageTitle>글쓰기</S.PageTitle>

      <TextField
        id={currentStep.name}
        label={currentStep.label}
        value={value}
        maxLength={maxLength}
        placeholder={currentStep.placeholder}
        isTextarea={currentStep.isTextarea}
        onChange={handleChange}
      />

      <ButtonGroup>
        <LineButton type="button" onClick={() => navigate('/posts')}>
          목록으로
        </LineButton>
        <PrimaryButton type="button" onClick={handleNext} disabled={isDisabled}>
          {isLastStep ? (isPending ? '작성 중...' : '작성') : '다음'}
        </PrimaryButton>
      </ButtonGroup>
    </section>
  );
}

export default PostWritePage;
