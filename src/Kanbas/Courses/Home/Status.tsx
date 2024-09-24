export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div className="button-group">
        <button className="status-button">Unpublish</button>
        <button className="status-button">Publish</button>
      </div> <br />
      <div className="button-stack">
        <button className="status-button">Import Existing Content</button> <br />
        <button className="status-button">Import from Commons</button> <br />
        <button className="status-button">Choose Home Page</button> <br />
        <button className="status-button">View Course Stream</button> <br />
        <button className="status-button">New Announcement</button> <br />
        <button className="status-button">New Analytics</button> <br />
        <button className="status-button">View Course Notifications</button>
      </div>
    </div>
  );
}
export {};