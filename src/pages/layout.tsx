import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default layout;
