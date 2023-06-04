import { Article, Comment, WithPageMeta } from '@/interfaces/article';
import { User } from '@/interfaces/user';
import { api } from '@/libs/fetch';

interface Params {
  order?: 'ASC' | 'DESC';
  page?: number;
  take?: number;
}

async function getMyData<T extends Article | Comment>(params: Params, path: string): Promise<WithPageMeta<T[]>> {
  const { data: dataList, meta } = await api.get<WithPageMeta<T[]>>(
    `/users/me/${path}?${new URLSearchParams(params as Record<string, string>)}`,
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
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (option.cookieHeader) {
    headers['Cookie'] = option.cookieHeader;
  }

  return await api.get<User>('/users/me', {
    headers,
  });
}

export async function getMyComments(params: Params = {}): Promise<WithPageMeta<Comment[]>> {
  return getMyData<Comment>(params, 'comments');
}

export async function getMyArticles(params: Params = {}): Promise<WithPageMeta<Article[]>> {
  return getMyData<Article>(params, 'articles');
}

export async function getMyLikedArticles(params: Params = {}): Promise<WithPageMeta<Article[]>> {
  return getMyData<Article>(params, 'like-articles');
}
