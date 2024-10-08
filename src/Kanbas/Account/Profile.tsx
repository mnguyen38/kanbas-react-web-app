import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-4">
      <h3 className="mb-3">Profile</h3>
      <div className="mb-3">
        <input defaultValue="alice" placeholder="Username" className="form-control"/>
      </div>
      <div className="mb-3">
        <input defaultValue="123" placeholder="Password" type="password" className="form-control"
        />
      </div>
      <div className="mb-3">
        <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="form-control"/>
      </div>
      <div className="mb-3">
        <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="form-control"/>
      </div>
      <div className="mb-3">
        <input defaultValue="2000-01-01" type="date" id="wd-dob" className="form-control"/>
      </div>
      <div className="mb-3">
        <input defaultValue="alice@wonderland.com" type="email" id="wd-email" className="form-control"/>
      </div>
      <div className="mb-3">
        <select defaultValue="USER" id="wd-role" className="form-select">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
      </div>
      <Link
        to="/Kanbas/Account/Signin"
        className="btn btn-danger w-100">
        Signout
      </Link>
    </div>
  );
}