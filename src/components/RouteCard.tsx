import { FiBookmark, FiMapPin, FiImage, FiCamera } from "react-icons/fi";

export default function RouteCard({ id }: { id: number }) {
  return (
    <div className="border bg-white p-2 rounded-xl">
      <div className="h-36 w-64 bg-gray-50 border-2 rounded-xl flex items-center justify-center relative">
        <div className="absolute top-2 right-2 bg-gray-600 text-gray-200 rounded-xl p-2">
          <FiBookmark />
        </div>
        <div className="flex items-center absolute bottom-2 left-2 bg-gray-600 text-gray-200 rounded-xl p-2 text-xs">
          <FiCamera className="mr-2" /> Some text
        </div>
        <FiImage className="h-6 w-6 text-gray-400" />
      </div>
      <div className="py-2">
        <h3 className=" font-semibold">Route #{id}</h3>
        <p className="flex gap-1 items-center text-sm">
          <FiMapPin /> Location name
        </p>
      </div>
    </div>
  );
}
