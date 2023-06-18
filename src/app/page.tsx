import { cookies } from 'next/headers';
import { getCategories } from '@/services/getCategories';

export default async function Page() {
  // const { data: freeArticleList } = await getArticles({ order: 'DESC', page: 1, take: 10, categoryId: 1 });
  // const { data: anonymousArticleList } = await getArticles({ order: 'DESC', page: 1, take: 10, categoryId: 2 });
  // const { data: noticeArticleList } = await getArticles({ order: 'DESC', page: 1, take: 10, categoryId: 4 });
  // const { data: feedbackArticleList } = await getArticles({ order: 'DESC', page: 1, take: 10, categoryId: 5 });
  // const { data: jobArticleList } = await getArticles({ order: 'DESC', page: 1, take: 10, categoryId: 7 });

  return (
    <>
      <h1>Rookies 홈이지롱!!</h1>

      <div className='flex gap-3'>
        <CategoryList />
      </div>
    </>
  );
}

async function CategoryList() {
  const cookieHeader = cookies().toString();
  const categoryList = await getCategories({ cookieHeader });

  return (
    <>
      {categoryList.map(({ id, name }) => (
        <ul key={id}>
          <li>{id}</li>
          <li>{name}</li>
        </ul>
      ))}
    </>
  );
}
