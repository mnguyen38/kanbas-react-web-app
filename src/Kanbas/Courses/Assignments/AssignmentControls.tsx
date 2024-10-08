import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="d-flex flex-wrap justify-content-between align-items-center mb-1">
      <div className="d-flex me-3">
        <div className="input-group" style={{ width: '450px', height: '47px' }}>
          <span className="input-group-text bg-white" style={{ height: '100%' }}>
            <FaSearch className="text-muted" />
          </span>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search..." 
          />
        </div>
      </div>
      <div className="d-flex">
        <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 my-1 float-end">
          <FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />
          Group</button>
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 my-1 float-end">
          <FaPlus className="position-relative me-1" style={{ bottom: "1px" }} />
          Assignment</button>
      </div>
    </div>
  );
}
