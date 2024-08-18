import "./ImportantLinkRight.css";
import "./RightContentArea.css";
import ImportantLinkRight from "./ImportantLinkRight";
import press from "../assets/images/Press.png";
import Recruitment from "../assets/images/Recruitment.png";
import procurement from "../assets/images/Procurement.png";
import legal from "../assets/images/Legal.png";
import detective from "../assets/images/Detective.png";
import diabetis from "../assets/images/Diabetis.png";
import exsm from "../assets/images/Exam.jpeg";
import Accident from "../assets/images/Accident.jpeg";

const RightContentArea = () => {
  return (
    <div className="right-content-area">
      {/* 1 */}
      <ImportantLinkRight title={"Press Release"} logo={press} />
      {/* 2 */}
      <ImportantLinkRight
        title={"Recruitment Information"}
        logo={Recruitment}
      />
      {/* 3 */}
      <ImportantLinkRight
        title={"Procurement/Tender Notice"}
        logo={procurement}
      />
      {/* 4 */}
      <ImportantLinkRight title={"Legal Instrument"} logo={legal} />
      {/* 5 */}
      <ImportantLinkRight title={"Detective Magazine"} logo={detective} />
      {/* 6 */}
      <ImportantLinkRight title={"Diabetis-Covid19"} logo={diabetis} />
      {/* 7 */}
      <ImportantLinkRight title={"Exam Result"} logo={exsm} />
      {/* 8 */}
      <ImportantLinkRight title={"Accident Info"} logo={Accident} />
    </div>
  );
};

export default RightContentArea;
