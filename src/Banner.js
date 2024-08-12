function Banner() {
    return (
        <div className="banner">
            {/* left banner */}
            <div className="left">
                <img src="https://www.police.gov.bd/storage/upload/poster/lBCgBZQO2pttAyv8Kgy3Lz7XvWKVreSsd02L67In.jpg" alt="" className="" />
            </div>
            {/* right banner */}
            <div className="right">
                <img src="https://www.police.gov.bd/storage/upload/file/PSIAgoFSgkTWdSU2RAiia5SsEZRI0IrQ2zcVK63x.png" alt="" className="" />
                <h5 className="">Md. Mainul Islam, ndc
                    Inspector General</h5>
                <a href="#igpmessages" className="">Massages from IGP {">>"}</a>
            </div>
        </div>
    )
}

export default Banner;