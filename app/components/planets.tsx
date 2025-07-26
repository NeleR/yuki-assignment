type PlanetsProps = { planets: any[] };

export default function Planets({ planets }: PlanetsProps) {
  return `I am the planet overview page. There are ${planets.length} planets available`;
}
