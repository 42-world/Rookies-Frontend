import { cookies } from 'next/headers';
import { dehydrate } from '@tanstack/query-core';
import { getMe } from '@/services';
import getQueryClient from '@/libs/getQueryClient';
import Hydrate from '@/libs/hydrate.client';

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata({ params, searchParams }: Props, parent?: ResolvingMetadata): Promise<Metadata> {
//   // read route params
//   const id = params.id;

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   };
// }

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['hydrate-me'], () =>
    getMe({
      cookieHeader: cookies().toString(),
    }),
  );
  const dehydratedState = dehydrate(queryClient);

  queryClient.getQueryData(['hydrate-me']);

  return <Hydrate state={dehydratedState}>{/* <Profile /> */}</Hydrate>;
}
