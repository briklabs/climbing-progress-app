import LoginButton from "../components/LoginButton";
import AppBI from "../components/AppBI";
import { Link } from "react-router-dom";

export default function SplashPage() {
  return (
    <div className="p-4 flex flex-col h-screen w-screen justify-evenly items-center text-center">
      <p>Track your Climbing</p>
      <p>Progressive improvment with insight</p>
      <p>Flash your next Beta!</p>
      <AppBI />
      <LoginButton />
      <Link to="/terms" className=" text-sm underline underline-offset-2">
        Terms & Conditions
      </Link>
    </div>
  );
}
