export default function RouteCard({ id }: { id: number }) {
  return (
    <div className="border bg-white p-2 rounded-xl">
      <div className="h-36 w-64 bg-gray-50 border-2 rounded-xl relative">
        <div className="absolute top-2 right-2 bg-gray-600 text-gray-200 rounded-xl p-2">
          icon
        </div>
        <div className=" absolute bottom-2 left-2 bg-gray-600 text-gray-200 rounded-xl p-2 text-xs">
          Some text
        </div>
      </div>
      <div className="py-2">
        <h3 className=" font-semibold">Route #{id}</h3>
        <p>Location name</p>
      </div>
    </div>
  );
}
