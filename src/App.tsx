import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import OtpVerify from "./components/OtpVerify";

const App = () => {
  return (
    <>
      <Navbar />
      <OtpVerify />
      <Outlet />
    </>
  );
};

export default App;
