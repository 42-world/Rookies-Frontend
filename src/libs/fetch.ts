async function request<TResponse>(path: string, config: RequestInit = {}): Promise<TResponse> {
  const baseUrl = 'https://api-alpha.42world.kr' + path;

  const res = await fetch(baseUrl, config);

  if (res.status !== 200) {
    throw new Error(`${res.status}`);
  }
  return await res.json();
}

export const api = {
  get: <TResponse>(url: string, config?: RequestInit) =>
    request<TResponse>(url, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    }),
  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, {
      method: 'POST',
      body,
    }),
};
