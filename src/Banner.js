import "./Banner.css";
function Banner() {
    return (
        <div className="banner">
            <div className="container">
                {/* left banner */}
            <div className="left">
                <img src="https://www.police.gov.bd/storage/upload/poster/lBCgBZQO2pttAyv8Kgy3Lz7XvWKVreSsd02L67In.jpg" alt="" className="imgLeft" />
            </div>
            {/* right banner */}
            <div className="right">
                {/* img */}
                <img src="https://www.police.gov.bd/storage/upload/file/PSIAgoFSgkTWdSU2RAiia5SsEZRI0IrQ2zcVK63x.png" alt="" className="igpImg" />
                {/* IGP name */}
                <h5 className="igpName">Md. Mainul Islam, ndc <br />
                    Inspector General</h5>
                <a href="#igpmessages" className="igpMassege">Massages from IGP {">>"}</a>
            </div>
            </div>
        </div>
    )
}

export default Banner;