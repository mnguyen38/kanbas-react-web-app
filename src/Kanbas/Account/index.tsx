import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import RegistrationNavigation from "./RegistrationNavigation";
export default function Account() {
  return (
    <div className="wd-account">
      <RegistrationNavigation />
      <div className="wd-course-content-offset">
        <Routes>
          <Route path="/"
            element={<Navigate to="/Kanbas/Account/Signin" />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}
