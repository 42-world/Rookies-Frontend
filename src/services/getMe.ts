import { Article, Comment, WithPageMeta } from '@/interfaces/article';
import { User } from '@/interfaces/user';
import { api } from '@/libs/fetch';

interface Params {
  order?: 'ASC' | 'DESC';
  page?: number;
  take?: number;
}

async function getMyData<T extends Article | Comment>(
  params: Params,
  path: string,
  config?: RequestInit,
): Promise<WithPageMeta<T[]>> {
  const { data: dataList, meta } = await api.get<WithPageMeta<T[]>>(
    `/users/me/${path}?${new URLSearchParams(params as Record<string, string>)}`,
    config,
  );

  return {
    data: dataList.map((data) => ({
      ...data,
      createdAt: new Date(data.createdAt),
      updatedAt: new Date(data.updatedAt),
    })),
    meta,
  };
}

export async function getMe(option: { cookieHeader?: string } = {}) {
  const headers: Record<string, string> = option.cookieHeader ? { Cookie: option.cookieHeader } : {};

  return await api.get<User>('/users/me', { headers });
}

export async function getMyComments(
  params: Params = {},
  option: { cookieHeader?: string } = {},
): Promise<WithPageMeta<Comment[]>> {
  const headers: Record<string, string> = option.cookieHeader ? { Cookie: option.cookieHeader } : {};

  return getMyData<Comment>(params, 'comments', { headers });
}

export async function getMyArticles(
  params: Params = {},
  option: { cookieHeader?: string } = {},
): Promise<WithPageMeta<Article[]>> {
  const headers: Record<string, string> = option.cookieHeader ? { Cookie: option.cookieHeader } : {};

  return getMyData<Article>(params, 'articles', { headers });
}

export async function getMyLikedArticles(
  params: Params = {},
  option: { cookieHeader?: string } = {},
): Promise<WithPageMeta<Article[]>> {
  const headers: Record<string, string> = option.cookieHeader ? { Cookie: option.cookieHeader } : {};

  return getMyData<Article>(params, 'like-articles', { headers });
}
