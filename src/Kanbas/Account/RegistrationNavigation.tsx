import { Link,} from "react-router-dom";
import "./styles.css";

export default function RegistrationNavigation() {
  return (
<div id="wd-courses-navigation" className="position-fixed wd list-group fs-6 rounded-0 d-none d-md-block"
      style={{ fontSize: '8px' }}>
      <Link to={`/Kanbas/Account/Signin`} id="wd-course-home-link"
        className="list-group-item active border border-0"> Signin </Link>
      <Link to={`/Kanbas/Account/Signup`} id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"> Signup </Link>
      <Link to={`/Kanbas/Account/Profile`} id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"> Profile </Link>
    </div>
  );
}
