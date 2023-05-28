async function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  const res = await fetch(
    (process.env.NEXT_PUBLIC_BASE_URL ?? "https://api-alpha.42world.kr") + url,
    config
  );
  return await res.json();
}

export const api = {
  get: <TResponse>(url: string, config?: RequestInit) =>
    request<TResponse>(url, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      ...config,
    }),
  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, {
      method: "POST",
      body,
    }),
};
