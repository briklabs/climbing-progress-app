import { Button } from "antd";
import AppBI from "../components/AppBI";
import { Link } from "react-router-dom";

export default function SplashPage() {
  return (
    <main className="flex flex-col py-8 gap-8 sm:flex-row items-center justify-center">
      <section className=" order-last">
        <div className="text-center space-y-4">
          <p>Track your Climbing</p>
          <p>Progressive improvment with insight</p>
          <p>Flash your next Beta!</p>
          <AppBI />
          <div>
            <Button disabled>Mobile app coming soon...</Button>
          </div>
          <div>
            <Link to="/terms" className=" text-sm underline underline-offset-2">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
      <aside className=" text-center space-y-4">
        <div className="w-80 overflow-hidden rounded-3xl mx-auto shadow-2xl">
          <img src="/demo.gif" />
        </div>
      </aside>
    </main>
  );
}
