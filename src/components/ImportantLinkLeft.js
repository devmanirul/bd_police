import "./ImportantLinkLeft.css";
import ImportantLinkItems from "./ImportantLinkItems";
import { importantLinkLeftData } from "../importantLinkData";
const Important = () => {
  return (
    <div className="important-area">
      {/* Important link */}
      <div className="important-links">
        {importantLinkLeftData.map((item) => (
          <ImportantLinkItems
            key={item.id}
            logo={item.img}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Important;
