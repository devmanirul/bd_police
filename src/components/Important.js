import "./Important.css";
import ImportantLinkItems from "./ImportantLinkItems";
import clearance from "../assets/images/clearance.png";
import helpline from "../assets/images/helpline.png";
import expatriate from "../assets/images/Expatriate.png";
import opinion from "../assets/images/Opinion.png";
import Hotline from "../assets/images/Hotline.png";
import PIMS from "../assets/images/PIMS.png";
import BPWN from "../assets/images/BPWN.png";
import Achivement from "../assets/images/Achievement.png";
const Important = () => {
  return (
    <div className="important-area">
      {/* Important link */}
      <div className="important-links">
        {/* 1 */}
        <ImportantLinkItems
          logo={clearance}
          title={"Online Police Clearance"}
        />
        {/* 2 */}
        <ImportantLinkItems logo={helpline} title={"BD Police Help line"} />
        {/* 3 */}
        <ImportantLinkItems logo={expatriate} title={"Expatriate Cell"} />
        {/* 4 */}
        <ImportantLinkItems logo={opinion} title={"Opinion or Complaint"} />
        {/* 5 */}
        <ImportantLinkItems logo={Hotline} title={"Hot line Number"} />
        {/* 6 */}
        <ImportantLinkItems logo={PIMS} title={"PIMS"} />
        {/* 7 */}
        <ImportantLinkItems
          logo={BPWN}
          title={"BPWN Annual Training Workshop"}
        />
        {/* 8 */}
        <ImportantLinkItems logo={Achivement} title={"Achievement & Success"} />
      </div>
      {/* Notice Board */}
    </div>
  );
};

export default Important;
