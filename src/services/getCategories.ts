import { Category } from '@/interfaces/article';
import { api } from '@/libs/fetch';

export async function getCategories(option: { cookieHeader?: string } = {}): Promise<Category[]> {
  const headers: Record<string, string> = option.cookieHeader ? { Cookie: option.cookieHeader } : {};

  return await api.get<Category[]>('/categories', { headers });
}
