import { FiLoader } from "react-icons/fi";

function LoadingSpinner() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <FiLoader className="h-8 w-8 animate-spin" />
    </div>
  );
}

export default LoadingSpinner;
