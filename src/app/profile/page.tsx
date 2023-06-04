import { cookies } from 'next/headers';
import { dehydrate } from '@tanstack/query-core';
import { Profile } from './profile';
import { getMe } from '@/services';
import getQueryClient from '@/libs/getQueryClient';
import Hydrate from '@/libs/hydrate.client';

export default async function Hydation() {
  const cookieStore = cookies();

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['hydrate-me'], () =>
    getMe({
      cookieHeader: cookieStore.toString(),
    }),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Profile />
    </Hydrate>
  );
}
