'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

async function login(code: string | null) {
  const res = await fetch(`http://localhost:3000/api/auth/github/callback?code=${code}`, {
    credentials: 'include',
  });
  return res;
}

export default function Page() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const { isLoading, isError } = useQuery(['login', code], () => login(code), {
    enabled: code !== null,
  });

  if (isLoading) return <div>로그인 중</div>;
  if (isError) return <div>에러 ㅋ</div>;

  return (
    <div>
      로그인 완료
      <Link href='/'>홈</Link>
    </div>
  );
}
