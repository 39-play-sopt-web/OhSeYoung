import { useMutation } from '@tanstack/react-query';
import { issueAuthorizationCode } from '../apis/member';

export const useIssueCode = () => {
  return useMutation({
    mutationFn: issueAuthorizationCode,
  });
};
