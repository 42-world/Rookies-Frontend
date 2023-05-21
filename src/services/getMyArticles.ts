export async function getMyArticles() {
  const res = await fetch("http://localhost:8888/users/me/articles", {
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
