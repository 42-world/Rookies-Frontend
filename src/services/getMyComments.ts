import { Comment, WithPageMeta } from "@/interfaces/article";
import { api } from "@/libs/fetch";

interface Params {
  order?: "ASC" | "DESC";
  page?: number;
  take?: number;
}

type GetCommentsResponse = WithPageMeta<Comment[]>;

export async function getMyComments(
  params: Params
): Promise<GetCommentsResponse> {
  const { data, meta } = await api.get<GetCommentsResponse>(
    `https://api-alpha.42world.kr/users/me/comments${new URLSearchParams(
      params as Record<string, string>
    )}`
  );

  return {
    data: data.map((comment) => ({
      ...comment,
      createdAt: new Date(comment.createdAt),
      updatedAt: new Date(comment.updatedAt),
    })),
    meta,
  };
}
