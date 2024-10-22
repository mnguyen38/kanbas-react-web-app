import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import * as db from "../../Database";
import AssignmentControls from "./AssignmentControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import TotalBadge from "./TotalBadge";
import GreenBook from "./GreenBook";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams(); 
  const assignments = db.assignments;
  const filteredAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div>
      <AssignmentControls />
      <br />
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
            {filteredAssignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 ps-1">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <span className="me-3">
                    <GreenBook />
                  </span>
                </div>
                <div className="flex-grow-1 ms-3">
                  <Link
                    className="wd-assignment-link"
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    style={{ textDecoration: "none", color: "inherit" }}>
                    <h5 className="mb-0 fs-5">{assignment.title}</h5>
                    <span className="text-danger fs-6">Multiple Modules</span> |{" "}
                    <span className="text-muted fs-6">Not available until{" "}
                      {new Date(assignment.start_date).toLocaleString("en-US", {
                        // Pretty cool that it auto-converts to local timezone by default
                        timeZone : "UTC",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </span>
                    <br />
                    <span className="text-muted fs-6"><b>Due</b>{" "}
                      {new Date(assignment.end_date).toLocaleString("en-US", {
                        timeZone : "UTC",
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}{" "}
                      | {assignment.points} pts
                    </span>
                  </Link>
                </div>
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
