import { isAxiosError } from 'axios';
import type { ApiResponse } from '../types/api';

export const getErrorMessage = (error: Error, defaultMessage: string) => {
  if (isAxiosError<ApiResponse<null>>(error) && error.response?.data?.message) {
    return error.response.data.message;
  }
  return defaultMessage;
};
