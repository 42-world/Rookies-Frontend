export async function getMyLikedArticles() {
  const res = await fetch(
    "https://api-alpha.42world.kr/users/me/like-articles",
    {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = res.json();

  if (res.status !== 200) {
    throw new Error();
  }

  return data;
}
