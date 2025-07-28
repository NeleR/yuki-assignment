import Card from "../base/Card";

export default function PlanetListSkeleton() {
  const emptyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <p className="italic text-sm mb-2">Loading planets...</p>
      <ol
        role="status"
        className="animate-pulse grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
      >
        {emptyArray.map((_, index) => (
          <li key={index}>
            <Card hoverable={true}>
              <div className="h-6"></div>
            </Card>
          </li>
        ))}
      </ol>
    </>
  );
}
