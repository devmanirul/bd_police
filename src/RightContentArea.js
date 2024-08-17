import './RightContentArea.css';
import "./Important.css";
import ImportantLinkItems from "./ImportantLinkItems";
import press from "./assets/images/Achievement.png"

const RightContentArea = () => {
    return (
        <div className="right-area">
             {/* Important link */}
            <div className="important-links">
                {/* 1 */}
                <ImportantLinkItems logo={press} title={"Online Police Clearance"} />
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
                <ImportantLinkItems logo={BPWN} title={"BPWN Annual Training Workshop"} />
                {/* 8 */}
                <ImportantLinkItems logo={Achivement} title={"Achievement & Success"} />
            </div>
        </div>
        )
}

export default RightContentArea;