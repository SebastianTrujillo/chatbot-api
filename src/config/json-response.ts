import { JsonResponse } from '../interfaces/json-response';

export const SUCCESS: JsonResponse = {
  status: 200,
  message: 'SUCCESS',
  description: 'Service executed successfully',
  data: {}
};

export const BAD_REQUEST: JsonResponse = {
  status: 400,
  message: 'BAD_REQUEST',
  description: 'Some params are missing',
  data: {}
};

export const UNAUTHORIZED: JsonResponse = {
  status: 401,
  message: 'UNAUTHORIZED',
  description: 'Permission denied',
  data: {}
};

export const FORBIDDEN: JsonResponse = {
  status: 403,
  message: 'FORBIDDEN',
  description: 'User role without permissions',
  data: {}
};

export const INTERNAL_SERVER_ERROR: JsonResponse = {
  status: 500,
  message: 'INTERNAL_SERVER_ERROR',
  description: 'Internal server error',
  data: {}
};
