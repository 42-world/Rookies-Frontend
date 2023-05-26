export async function getMyComments() {
  const res = await fetch("https://api-alpha.42world.kr/users/me/comments", {
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
