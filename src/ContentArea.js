import './ContentArea.css';
import LeftContentArea from './LeftContentArea';
import RightContentArea from './RightContentArea';

const ContentArea = () => {
    return (
        <div className="cantent-area">
            {/* left */}
            <LeftContentArea />
            {/* right */}
            <RightContentArea />
        </div>
    )
}

export default ContentArea;