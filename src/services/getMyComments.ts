export async function getMyComments() {
  const res = await fetch("https://localhost:3001/api/users/me/comments", {
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
