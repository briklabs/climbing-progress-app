import AppBI from "../components/AppBI";
import { Link } from "react-router-dom";
import BetaTesterApplicationCTA from "../components/BetaTesterApplicationCTA";
import { Typography } from "antd";

export default function SplashPage() {
  return (
    <main className="flex flex-col py-8 gap-8 sm:flex-row items-center justify-center">
      <section className=" order-last">
        <div className="text-center">
          <AppBI />
          <Typography>Track your Climbing</Typography>
          <div className="my-8 p-4 pb-2 transition hover:shadow-2xl hover:-translate-y-1 rounded-xl bg-white">
            <Typography style={{ marginBottom: 12, maxWidth: 280 }}>
              By submitting this form, you are applying to be a beta tester for
              our application. We appreciate your interest!
            </Typography>
            <BetaTesterApplicationCTA />
          </div>
          <div>
            <Link to="/terms" className=" text-sm underline underline-offset-2">
              Terms & Conditions
            </Link>
            <p>
              <small>Brik Labs LLC © 2024</small>
            </p>
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
