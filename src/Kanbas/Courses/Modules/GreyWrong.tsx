import { RxCrossCircled } from "react-icons/rx";
export default function GreyWrong() {
  return (
    <span className="me-1 position-relative">
      <RxCrossCircled style={{ top: "2px" }}
        className="text-grey me-1 position-absolute fs-5" />
      <RxCrossCircled className="text-white me-1 fs-6" />
    </span>
);}
