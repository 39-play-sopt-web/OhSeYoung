import { apiClient } from './apiClient';
import type { ApiResponse } from '../types/api';
import type { AuthorizationCodeResponse, Part } from '../types/member';

export const issueAuthorizationCode = async (part: Part) => {
  const res = await apiClient.post<ApiResponse<AuthorizationCodeResponse>>(
    '/members/authorization-code',
    { part },
  );
  return res.data.data.authorizationCode;
};
