import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import BasicInformations from "./components/register/BasicInformations";
import ProgressStepper from "./components/register/ProgressStepper";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/changePassword" element={<ChangePassword />} />
    <Route path="/basicinformation" element=<BasicInformations />/>
        </Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <BasicInformations />
    // </>
  );
}
