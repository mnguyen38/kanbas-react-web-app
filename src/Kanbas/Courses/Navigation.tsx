import { Link, useParams, useLocation } from "react-router-dom";
import "./styles.css";
export default function CoursesNavigation() {
  const { cid } = useParams(); 
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="position-fixed wd list-group fs-6 rounded-0 d-none d-md-block"
      style={{ fontSize: '8px' }}>

      {links.map((linkLabel) => (
        <Link key={linkLabel} to={`/Kanbas/Courses/${cid}/${linkLabel}`}
          id={`wd-course-${linkLabel.toLowerCase()}-link`}
          className={`list-group-item border border-0 ${
            pathname.includes(linkLabel) ? "active" : "text-danger"
          }`}>
          {linkLabel}
        </Link>
      ))}

    </div>
  );
}
