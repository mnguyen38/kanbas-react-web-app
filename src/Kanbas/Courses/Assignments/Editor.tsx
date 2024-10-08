export default function AssignmentEditor() {
  return (
    <div className="container mt-4">s
      <div className="mb-3">
        <label htmlFor="assignmentName" className="form-label">Assignment Name</label>
        <input type="text" className="form-control" id="assignmentName" value="A1" />
      </div>

      <div className="mb-3 row">
        <div className="col-sm">
          <textarea className="form-control" id="description" rows={10} value="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, link to the Kanbas application, links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page." />
        </div>
      </div>

      <div className="mb-3 row justify-content-end">
        <label htmlFor="points" className="col-sm-3 col-form-label text-end" style={{ whiteSpace: 'nowrap' }}>Points</label>
        <div className="col-sm-6">
          <input type="number" className="form-control" id="points" value="100" />
        </div>
      </div>

      <div className="mb-3 row justify-content-end">
        <label htmlFor="assignmentGroup" className="col-sm-3 col-form-label text-end" style={{ whiteSpace: 'nowrap' }}>Assignment Group</label>
        <div className="col-sm-6">
          <select className="form-select" id="assignmentGroup">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row justify-content-end">
        <label htmlFor="displayGrade" className="col-sm-3 col-form-label text-end" style={{ whiteSpace: 'nowrap' }}>Display Grade as</label>
        <div className="col-sm-6">
          <select className="form-select" id="displayGrade">
            <option>Percentage</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row justify-content-end">
        <label htmlFor="submissionType" className="col-sm-3 col-form-label text-end" style={{ whiteSpace: 'nowrap' }}>Submission Type</label>
        <div className="col-sm-6">
          <div className="border rounded p-3">
            <div className="col-sm-6">
              <select className="form-select" id="submissionType">
                <option>Online</option>
              </select>
              <div className="border rounded p-3 mt-2">
                <label className="form-label fw-bold">Online Entry Options</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="textEntry" />
                  <label className="form-check-label" htmlFor="textEntry">Text Entry</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="websiteURL" checked />
                  <label className="form-check-label" htmlFor="websiteURL">Website URL</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="mediaRecordings" />
                  <label className="form-check-label" htmlFor="mediaRecordings">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="studentAnnotation" />
                  <label className="form-check-label" htmlFor="studentAnnotation">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="fileUploads" />
                  <label className="form-check-label" htmlFor="fileUploads">File Uploads</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="mb-3 row justify-content-end">
        <label htmlFor="assignmentDetails" className="col-sm-3 col-form-label text-end" style={{ whiteSpace: 'nowrap' }}>Assign</label>
        <div className="col-sm-6">
          <div className="border rounded p-3">
            <div className="mb-3">
              <label htmlFor="assignTo" className="form-label fw-bold">Assign to</label>
              <div>
                <select className="form-select" id="assignTo">
                  <option>Everyone</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="dueDate" className="form-label fw-bold">Due</label>
              <input type="datetime-local" className="form-control" id="dueDate" value="2024-05-13T23:59" />
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="availableFrom" className="form-label fw-bold">Available from</label>
                  <input type="datetime-local" className="form-control" id="availableFrom" value="2024-05-06T12:00" />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="until" className="form-label fw-bold">Until</label>
                  <input type="datetime-local" className="form-control" id="until" value="2024-05-13T23:59" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <button className="btn btn-secondary btn-lg me-2">Cancel</button>
        <button className="btn btn-danger btn-lg">Save</button>
      </div>
    </div>
  );
}
