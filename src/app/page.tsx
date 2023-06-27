import { cookies } from 'next/headers';
import { Card } from '@42world/design-core';
import { getCategories } from '@/services/getCategories';

export default async function Page() {
  return (
    <>
      <h1>뚜비두밥 뚜비두밥 뚜비두밥</h1>

      <div className='flex gap-3'>
        <CategoryList />
        <CardList />
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

async function CardList() {
  const cardList = await getCardData();

  return (
    <ul>
      {cardList.map(({ id, image, createdBy, createdAt, title }) => (
        <Card key={id} imageSrc={image} primary={createdBy} secondary={createdAt.toLocaleTimeString()} title={title} />
      ))}
    </ul>
  );
}

async function getCardData(): Promise<Card[]> {
  const dummyFactory = (title: string): Card => ({
    id: Math.random().toString(36).substring(7),
    image: 'https://picsum.photos/200',
    createdBy: '뚜비두밥',
    createdAt: new Date(),
    title,
  });

  return [
    dummyFactory('새로운 프레임워크로 더 나은 프론트엔드 머시기 야호'),
    dummyFactory('백엔드 개발자를 위한 최신 웹 보안 기술 머시기 야호'),
    dummyFactory('프로젝트 관리를 위한 협업 툴 추천 머시기 야호'),
    dummyFactory('주니어 개발자를 위한 프로그래밍 기초 강의 머시기 야호'),
    dummyFactory('개발자를 위한 클라우드 컴퓨팅 기술 소개 머시기 야호'),
    dummyFactory('IT 업계 최신 취업 트렌드 파악하기 머시기 야호'),
  ];
}

type Card = {
  id: string;
  image: string;
  createdBy: string;
  createdAt: Date;
  title: string;
};
