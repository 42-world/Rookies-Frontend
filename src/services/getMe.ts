export async function getMe(cookies?: string) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (cookies) {
    headers["Cookie"] = cookies;
  }

  // TODO: axios로 변경
  const res = await fetch("https://localhost:3001/api/users/me", {
    credentials: "include",
    headers,
  });
  const data = res.json();

  if (res.status !== 200) {
    throw new Error("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  }

  return data;
}
