import type { Article, WithPageMeta } from "@/interfaces/article";
import { api } from "@/libs/fetch";

interface GetArticlesParams {
  order?: "ASC" | "DESC";
  page: number;
  take: number;
  categoryId: number;
}

type GetArticlesResponse = WithPageMeta<Article[]>;

export async function getArticles(
  params: GetArticlesParams
): Promise<GetArticlesResponse> {
  // NOTE: Params 중 number 타입의 값은 URLSearchParams를 사용하면 자동으로 문자열로 변환됩니다.
  const { data, meta } = await api.get<GetArticlesResponse>(
    `https://localhost:3001/api/articles?${new URLSearchParams(params as any)}`
  );

  return {
    data: data.map((article) => ({
      ...article,
      createdAt: new Date(article.createdAt),
      updatedAt: new Date(article.updatedAt),
    })),
    meta,
  };
}
