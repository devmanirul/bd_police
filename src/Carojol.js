import "./Carojol.css";
function Carojol() {
    return (
        <div className="Carojol">
             {/* img1 */}
            <div className="CarojolOne">
           
                <img
                    src="https://www.police.gov.bd/storage/upload/gallery/kdXeIE3xgKUnP4b4JzJb0PVDSwhPLIit3j3ernoR.jpg"
                    alt=""
                    className="IgpImage"
                        />
                <h3 className="igpSpece">নভাগত আইজিপি মহোদয়ের প্রেস বিজ্ঞপ্তি</h3>    
            </div>
             {/* img2 */}
            <div className="CarojolTwo">
           
                <img
                    src="https://www.police.gov.bd/storage/upload/gallery/QBYZ7c6P75XVQ8u2MuhxFKCTXWYqzt9GhBR4nsyU.jpg"
                    alt=""
                    className="IgpImage"
                        />
                <h3 className="igpAddress">মহামান্য রাষ্ট্রপতির সাথে নবাগত আইজিপি মহোদয়  সাক্ষাৎ করেন।</h3>    
            </div>
      </div>
    );
}

export default Carojol;