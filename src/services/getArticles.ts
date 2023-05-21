import { api } from "@/libs/fetch";
import type { Article, WithPageMeta } from "@/interfaces/article";

interface GetArticlesParams {
  order?: "ASC" | "DESC";
  page: number;
  take: number;
  categoryId: number;
}

type GetArticlesResponse = WithPageMeta<Article[]>;

export async function getArticles(params: GetArticlesParams) {
  const data = await api.get<GetArticlesResponse>(
    `http://localhost:8888/articles?${new URLSearchParams(params)}`,
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return data;
}
