import { cookies } from 'next/headers';
import { getCategories } from '@/services/getCategories';

export default async function Page() {
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
