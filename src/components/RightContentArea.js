import "./ImportantLinkRight.css";
import "./RightContentArea.css";
import ImportantLinkRight from "./ImportantLinkRight";
import { importantLinkRightData } from "../importantLinkData";

const RightContentArea = () => {
  return (
    <div className="totalRight">
      <div className="right-content-area">
        {importantLinkRightData.map((item) => (
          <ImportantLinkRight
            key={item.id}
            logo={item.img}
            title={item.title}
          />
        ))}
      </div>
      <div className="right-services">
        
      </div>
    </div>
  );
};

export default RightContentArea;