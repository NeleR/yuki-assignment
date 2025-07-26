type PlanetProps = { id: string; planet: { name: string } };

export default function Planet({ id, planet }: PlanetProps) {
  return `I am planet ${planet.name} (${id})`;
}
