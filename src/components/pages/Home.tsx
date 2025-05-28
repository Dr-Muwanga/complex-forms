import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div className="flex h-screen w-full flex-col bg-card">
      <Navbar />
      <main className="flex flex-1 overflow-x-hidden">
        <div className="custom-scrollbar h-full w-full">
          <div className="min-h-full w-full">
            <section className="mx-auto w-full max-w-7xl px-2 py-4 sm:px-4 md:px-6 md:py-6 lg:px-8 lg:py-8">
              <Outlet />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
