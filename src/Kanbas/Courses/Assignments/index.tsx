import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import TotalBadge from "./TotalBadge";
import GreenBook from "./GreenBook";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div>
      <AssignmentControls /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <GoTriangleDown className="me-2 fs-3" />
              <span>ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="badge bg-light text-dark me-2">40% of Total</span>
              <TotalBadge />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="me-3">
                  <GreenBook />
                </span>
              </div>
              <div className="flex-grow-1 ms-3">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h5 className="mb-0 fs-5">A1</h5>
                  <span className="text-danger fs-6">Multiple Modules</span> |
                  <span className="text-muted fs-6"> Not available until May 6 at 12:00am</span><br />
                  <span className="text-muted fs-6"><b>Due</b> May 13 at 11:59pm | 100 pts</span>
                </a>
              </div>
              <div className="d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>

            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="me-3">
                  <GreenBook />
                </span>
              </div>
              <div className="flex-grow-1 ms-3">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123" style={{ textDecoration: 'none', color: 'inherit' }} >
                  <h5 className="mb-0 fs-5">A2</h5>
                  <span className="text-danger fs-6">Multiple Modules</span> |
                  <span className="text-muted fs-6"> Not available until May 13 at 12:00am</span><br />
                  <span className="text-muted fs-6"><b>Due</b> May 20 at 11:59pm | 100 pts</span>
                </a>
              </div>
              <div className="d-flex align-items-center">
                <LessonControlButtons />
              </div>
            </li>

            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span className="me-3">
                  <GreenBook />
                </span>
              </div>
              <div className="flex-grow-1 ms-3">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h5 className="mb-0 fs-5">A3</h5>
                  <span className="text-danger fs-6">Multiple Modules</span> |
                  <span className="text-muted fs-6"> Not available until May 20 at 12:00am</span><br />
                  <span className="text-muted fs-6"><b>Due</b> May 27 at 11:59pm | 100 pts</span>
                </a>
              </div>
              <div className="d-flex align-items-center">
                <LessonControlButtons />s
              </div>
            </li>

          </ul>
        </li>
      </ul>
    </div>
  );
}
