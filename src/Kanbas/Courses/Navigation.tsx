import { Link, useParams } from "react-router-dom";
import "./styles.css";
export default function CoursesNavigation() {
  const { cid } = useParams(); 
  return (
    <div id="wd-courses-navigation" className="position-fixed wd list-group fs-6 rounded-0 d-none d-md-block"
      style={{ fontSize: '8px' }}>
      <Link to={`/Kanbas/Courses/${cid}/Home`} id="wd-course-home-link"
        className="list-group-item active border border-0"> Home </Link>
      <Link to={`/Kanbas/Courses/${cid}/Modules`} id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"> Modules </Link>
      <Link to={`/Kanbas/Courses/${cid}/Piazza`} id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"> Piazza </Link>
      <Link to={`/Kanbas/Courses/${cid}/Zoom`} id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0"> Zoom </Link>
      <Link to={`/Kanbas/Courses/${cid}/Assignments`} id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"> Assignments </Link>
      <Link to={`/Kanbas/Courses/${cid}/Quizzes`} id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0"> Quizzes </Link>
      <Link to={`/Kanbas/Courses/${cid}/People`} id="wd-course-people-link"
        className="list-group-item text-danger border border-0" > People </Link>
    </div>
  );
}
