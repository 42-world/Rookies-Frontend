import { useInfiniteQueryWithMeta } from "@/hooks/useInfiniteQueryWithMeta";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { getArticles } from "@/services/getArticles";

export const ArticleList = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQueryWithMeta(
      ["articles"],
      ({ pageParam = 1 }) =>
        getArticles({
          order: "ASC",
          page: pageParam,
          take: 10,
          categoryId: 1,
        }),
      {
        suspense: true,
      }
    );

  const { ref: observerRef } = useIntersectionObserver<HTMLButtonElement>({
    onIntersect: () => {
      if (hasNextPage && !isFetching && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  return (
    <>
      {data?.pages.map((page) =>
        page.data.map((article) => (
          <li
            key={article.id}
            style={{
              padding: "50px",
              display: "flex",
            }}
          >
            <div>
              <span>{article.createdAt.toDateString()}</span>
              <span>{article.writer.nickname}</span>
            </div>
            <h2>{article.title}</h2>
            <div>
              <span>{article.likeCount}</span>
              <span>{article.commentCount}</span>
            </div>
          </li>
        ))
      )}
      <button ref={observerRef}>
        {isFetching
          ? "가져오는 중..."
          : hasNextPage
          ? "게시글 더 가져오기"
          : "더 이상 게시글이 없습니다"}
      </button>
    </>
  );
};
