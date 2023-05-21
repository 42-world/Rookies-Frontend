"use client";

import { useQuery } from "@tanstack/react-query";

import { getMe } from "@/services";

export default function Page() {
  const { data, isError } = useQuery(["me"], () => getMe(), {
    retry: false,
  });

  return (
    <div>
      <h1>Rookies 홈이지롱!!</h1>
      {isError ? (
        <pre>에러 ㅋ</pre>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}
