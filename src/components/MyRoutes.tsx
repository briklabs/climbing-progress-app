import RouteCard from "./RouteCard";

export default function MyRoutes() {
  return (
    <div>
      <h2 className="mb-4">My Routes</h2>
      <div className=" overflow-auto">
        <div className="flex space-x-4">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <RouteCard id={i} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}
