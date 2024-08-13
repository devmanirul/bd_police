import "./Carojol.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carojol() {
    return (
        <div className="Carojol">
            <div className="container">
                <Slider {...settings}>
                    <div className="CarojolOne">
                        {/* img1 */}
                        <div className="slide">
                            <img
                            src="https://www.police.gov.bd/storage/upload/gallery/QBYZ7c6P75XVQ8u2MuhxFKCTXWYqzt9GhBR4nsyU.jpg"
                            alt=""
                            className="IgpImage"
                                />
                            <p className="igpSpece">মহামান্য রাষ্ট্রপতির সাথে নবাগত আইজিপি মহোদয়  সাক্ষাৎ করেন।</p> 
                        </div> 
                        {/* img2 */}
                        <div className="slide">
                            <img
                            src="https://www.police.gov.bd/storage/upload/gallery/kdXeIE3xgKUnP4b4JzJb0PVDSwhPLIit3j3ernoR.jpg"
                            alt=""
                            className="IgpImage"
                                />
                            <p className="igpSpece">নভাগত আইজিপি মহোদয়ের প্রেস বিজ্ঞপ্তি</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Carojol;