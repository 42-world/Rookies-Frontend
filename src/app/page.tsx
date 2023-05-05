"use client";

import { useQuery } from "@tanstack/react-query";

async function getMe() {
  // TODO: axios로 변경
  const res = await fetch("http://localhost:8888/users/me", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = res.json();

  if (res.status !== 200) {
    throw new Error();
  }

  return data;
}

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
