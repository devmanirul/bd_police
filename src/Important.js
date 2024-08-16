import "./Important.css";
import ImportantLinkItems from "./ImportantLinkItems";

const Important = () => {
    return (
        <div className="important-area">
            {/* Important link */}
            <div className="important-links">
                <ImportantLinkItems />
                <ImportantLinkItems />
                <ImportantLinkItems />
                <ImportantLinkItems />
                <ImportantLinkItems />
                <ImportantLinkItems />
                <ImportantLinkItems />
                <ImportantLinkItems />
            </div>
            {/* Notice Board */}
            <div className="notice-board">Notice Board</div>
        </div>
    )
}

export default Important;