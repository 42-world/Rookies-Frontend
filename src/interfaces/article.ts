import type { User } from "./user";

export interface Category {
  id: number;
  name: string;
  isArticleWritable: boolean;
  isArticleReadable: boolean;
  isCommentWritable: boolean;
  isCommentReadable: boolean;
  isReactionable: boolean;
  isAnonymous: boolean;
}

export interface Article {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  categoryId: number;
  category: Category;
  writerId: number;
  write: User;
  commentCount: number;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  isSelf: boolean;
}

export interface PageMeta {
  page: number;
  take: number;
  totalCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface WithPageMeta<T> {
  data: T;
  meta: PageMeta;
}
