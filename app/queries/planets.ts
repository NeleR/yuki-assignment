export const planetsQuery = () => ({
  queryKey: ["planets"],
  queryFn: async () => {
    const res = await fetch("https://swapi.info/api/planets");
    const planets = await res.json();
    return planets;
  },
});

export const planetDetailQuery = (id: string) => ({
  queryKey: ["planets", "detail", id],
  queryFn: async () => {
    const res = await fetch(`https://swapi.info/api/planets/${id}`);
    const planet = await res.json();
    return planet;
  },
});
