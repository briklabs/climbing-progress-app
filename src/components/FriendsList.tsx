import { FiUser } from "react-icons/fi";

export default function FriendsList() {
  return (
    <div>
      <h2 className="mb-4">My Friends</h2>
      <div className=" overflow-auto">
        <div className="flex space-x-4">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="h-16 w-16 bg-gray-100 text-gray-400 rounded-full border-2 shrink-0 flex items-center justify-center"
              >
                <FiUser className="h-6 w-6" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
