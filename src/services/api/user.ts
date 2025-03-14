// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 登录 POST /api/v1/users/admin-login */
export async function postAdminLogin(
  body: {
    username: string;
    /** 详情 */
    password: string;
  },
  options?: { [key: string]: any },
) {
  return request<{ code: number; msg: string; data: { id: number } }>(
    '/api/v1/users/admin-login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}