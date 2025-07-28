export const urlQuery = (url: string) => ({
  queryKey: [url],
  queryFn: async () => {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  },
});
