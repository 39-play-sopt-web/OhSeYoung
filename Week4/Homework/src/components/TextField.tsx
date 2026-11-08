import * as S from './TextField.styles';

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  maxLength: number;
  placeholder?: string;
  isTextarea?: boolean;
  onChange: (value: string) => void;
}

function TextField({
  id,
  label,
  value,
  maxLength,
  placeholder,
  isTextarea = false,
  onChange,
}: TextFieldProps) {
  // maxLength 걸면 더 못 쳐서 에러를 못 보여줌
  const isOver = value.length > maxLength;

  return (
    <S.Field>
      <S.Label htmlFor={id}>{label}</S.Label>
      {isTextarea ? (
        <S.Textarea
          id={id}
          value={value}
          placeholder={placeholder}
          isError={isOver}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <S.Input
          id={id}
          value={value}
          placeholder={placeholder}
          isError={isOver}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      <S.Bottom>
        {isOver && (
          <S.ErrorMessage>최대 {maxLength}자까지 입력할 수 있어요.</S.ErrorMessage>
        )}
        <S.Count isError={isOver}>
          {value.length} / {maxLength}
        </S.Count>
      </S.Bottom>
    </S.Field>
  );
}

export default TextField;
