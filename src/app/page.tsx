'use client';

import { useQueries } from '@tanstack/react-query';
import { getMe } from '@/services';
import { getArticles } from '@/services/getArticles';

export default function Page() {
  const [{ data: myData, isError }, { data: articleData }] = useQueries({
    queries: [
      { queryKey: ['me'], queryFn: () => getMe() },
      {
        queryKey: ['articles'],
        queryFn: () => getArticles({ order: 'DESC', page: 1, take: 10, categoryId: 1 }),
      },
    ],
  });

  return (
    <>
      <h1>Rookies 홈이지롱!!</h1>
      {isError ? <pre>에러 ㅋ</pre> : <pre>{JSON.stringify(myData, null, 2)}</pre>}
      {articleData &&
        articleData.data.map((article: any) => (
          <ul key={article.id}>
            <li>{article.id}</li>
            <li>{article.title}</li>
            <li>{article.content}</li>
            <li>{article.createdAt}</li>
            <li>{article.updatedAt}</li>
          </ul>
        ))}
    </>
  );
}
