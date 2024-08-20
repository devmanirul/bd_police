import Important from "./ImportantLinkLeft";
import "./LeftContentArea.css";
import Services from "./Services/Services";

const LeftContentArea = () => {
  return (
    <div className="left-area">
      {/* important */}
      <Important />
      <Services />
    </div>
  );
};

export default LeftContentArea;
