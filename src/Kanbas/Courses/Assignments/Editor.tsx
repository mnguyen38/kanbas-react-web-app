import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a) => a._id === aid);

  // Edge case
  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="assignmentName" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="assignmentName"
          value={assignment.title} />
      </div>

      <div className="mb-3 row">
        <div className="col-sm">
          <textarea
            className="form-control"
            id="description"
            rows={10}
            value={assignment.description}
          />
        </div>
      </div>

      <div className="mb-3 row justify-content-end">
        <label
          htmlFor="points"
          className="col-sm-3 col-form-label text-end"
          style={{ whiteSpace: "nowrap" }}> Points
        </label>
        <div className="col-sm-6">
          <input
            type="number"
            className="form-control"
            id="points"
            value={assignment.points} />
        </div>
      </div>

      <div className="mb-3 row justify-content-end">
        <label
          htmlFor="assignmentGroup"
          className="col-sm-3 col-form-label text-end"
          style={{ whiteSpace: "nowrap" }}> Assignment Group
        </label>
        <div className="col-sm-6">
          <select className="form-select" id="assignmentGroup">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row justify-content-end">
        <label
          htmlFor="displayGrade"
          className="col-sm-3 col-form-label text-end"
          style={{ whiteSpace: "nowrap" }}> Display Grade as
        </label>
        <div className="col-sm-6">
          <select className="form-select" id="displayGrade">
            <option>Percentage</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row justify-content-end">
        <label
          htmlFor="submissionType"
          className="col-sm-3 col-form-label text-end"
          style={{ whiteSpace: "nowrap" }}> Submission Type
        </label>
        <div className="col-sm-6">
          <div className="border rounded p-3">
            <div className="col-sm-6">
              <select className="form-select" id="submissionType">
                <option>Online</option>
              </select>
              <div className="border rounded p-3 mt-2">
                <label className="form-label fw-bold"> Online Entry Options
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="textEntry"/>
                  <label className="form-check-label" htmlFor="textEntry"> Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="websiteURL"
                    checked />
                  <label className="form-check-label" htmlFor="websiteURL"> Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="mediaRecordings" />
                  <label
                    className="form-check-label" htmlFor="mediaRecordings"> Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="studentAnnotation" />
                  <label
                    className="form-check-label"
                    htmlFor="studentAnnotation">
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="fileUploads" />
                  <label className="form-check-label" htmlFor="fileUploads"> File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3 row justify-content-end">
        <label
          htmlFor="assignmentDetails"
          className="col-sm-3 col-form-label text-end"
          style={{ whiteSpace: "nowrap" }}> Assign </label>
        <div className="col-sm-6">
          <div className="border rounded p-3">
            <div className="mb-3">
              <label htmlFor="assignTo" className="form-label fw-bold"> Assign to
              </label>
              <div>
                <select className="form-select" id="assignTo">
                  <option> Everyone </option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="dueDate" className="form-label fw-bold"> Due
              </label>
              <input
                type="datetime-local"
                className="form-control"
                id="dueDate"
                value={new Date(assignment.end_date)
                  .toISOString()
                  .slice(0, 16)} />
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-sm-6">
                  <label
                    htmlFor="availableFrom"
                    className="form-label fw-bold"> Available from
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="availableFrom"
                    value={new Date(assignment.start_date)
                      .toISOString()
                      .slice(0, 16)} />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="until" className="form-label fw-bold">
                    Until
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="until"
                    value={new Date(assignment.end_date)
                      .toISOString()
                      .slice(0, 16)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-secondary btn-lg me-2"> Cancel
        </Link>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-danger btn-lg"> Save
        </Link>
      </div>
    </div>
  );
}
