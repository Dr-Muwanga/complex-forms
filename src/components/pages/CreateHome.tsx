import { groups, data } from "@/data/data";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const CreateHome = () => {
  
  const createData = { groups, data };
  return (
    <div className="flex h-full w-full flex-col bg-card dark:bg-secondary">
      <Navbar />
      <div className="flex h-full w-full flex-col items-center">
        <section className="mx-auto mt-3 w-full max-w-3xl md:mx-3 lg:mt-5">
          <Outlet context={createData} />
        </section>
      </div>
    </div>
  );
};

export default CreateHome;
