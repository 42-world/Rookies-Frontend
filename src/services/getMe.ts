import { Article, Comment, WithPageMeta } from "@/interfaces/article";
import { api } from "@/libs/fetch";

interface Params {
  order?: "ASC" | "DESC";
  page?: number;
  take?: number;
}

export async function getMe() {
  // TODO: axios로 변경
  const res = await fetch("https://api-alpha.42world.kr/users/me", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = res.json();

  if (res.status !== 200) {
    throw new Error();
  }

  return data;
}

async function getMyData<T extends Article | Comment>(
  params: Params,
  path: string
): Promise<WithPageMeta<T[]>> {
  const { data: dataList, meta } = await api.get<WithPageMeta<T[]>>(
    `https://api-alpha.42world.kr/users/me/${path}${new URLSearchParams(
      params as Record<string, string>
    )}`
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

export async function getMyComments(
  params: Params = {}
): Promise<WithPageMeta<Comment[]>> {
  return getMyData<Comment>(params, "comments");
}

export async function getMyArticles(
  params: Params = {}
): Promise<WithPageMeta<Article[]>> {
  return getMyData<Article>(params, "articles");
}

export async function getMyLikedArticles(
  params: Params = {}
): Promise<WithPageMeta<Article[]>> {
  return getMyData<Article>(params, "like-articles");
}
