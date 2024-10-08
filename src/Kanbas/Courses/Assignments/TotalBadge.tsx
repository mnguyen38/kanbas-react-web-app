import { BsPlus } from "react-icons/bs"; 
import { IoEllipsisVertical } from "react-icons/io5";

export default function TotalBadge() {
  return (
    <div className="d-flex align-items-center justify-content-end">
      
      <BsPlus className="fs-4 mx-2" /> 
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
