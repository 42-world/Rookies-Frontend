'use client';

import { useQueries } from '@tanstack/react-query';
import { getMe } from '@/services';

async function getArticles() {
  const res = await fetch('http://localhost:3000/api/articles?order=DESC&page=1&take=10&categoryId=1', {
    credentials: 'include',
  });

  const data = res.json();

  if (res.status !== 200) {
    throw new Error();
  }

  return data;
}

export default function Page() {
  const [{ data: myData, isError }, { data: articleData }] = useQueries({
    queries: [
      { queryKey: ['me'], queryFn: () => getMe() },
      {
        queryKey: ['articles'],
        queryFn: () => getArticles(),
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
