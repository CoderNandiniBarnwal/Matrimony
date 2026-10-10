import Layout from "./components/Layout";
import BasicInformations from "./components/register/BasicInformations";
import EducationQualification from "./components/register/EducationQualification";
import FoodLifestyle from "./components/register/FoodLifestyle";
import Holoscope from "./components/register/Holoscope";
import Successful from "./components/register/Successful";
import UploadPhoto from "./components/register/UploadPhoto";
import RegisterLayout from "./components/RegisterLayout";

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
          <Route
            path="/forgotPassword"
            element={<ForgotPassword />}
          />
          <Route
            path="/changePassword"
            element={<ChangePassword />}
          />

          {/* Common layout for all 5 registration pages */}
          <Route element={<RegisterLayout/>}>
            <Route
              path="/basicinformation"
              element={<BasicInformations />}
            />
            <Route
              path="/education"
              element={<EducationQualification />}
            />
            <Route
              path="/foodLifestyle"
              element={<FoodLifestyle />}
            />
            <Route
              path="/horoscope"
              element={<Holoscope />}
            />
            <Route
              path="/upload"
              element={<UploadPhoto />}
            />
          </Route>

          <Route path="/successful" element={<Successful />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}