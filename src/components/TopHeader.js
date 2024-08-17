import "./TopHeader.css";
function TopHeader() {
    return (
        <div className="TopHeader">
            {/* container */}
            <div className="container">
                {/* left */}
                <div className="left">
                    <img src="https://www.police.gov.bd/storage/upload/logo/en.png" alt="" className="img"/>
                </div>
                {/* mid */}
                <h1 className="mid">“ দক্ষ পুলিশ, সমৃদ্ধ দেশ, <br />
                    দুর্নীতিমুক্ত বাংলাদেশ ”</h1>
                {/* right */}
                <div className="right">
                {/* Select area */}
                <select name="" id="" className="select">
                    <option value="">English</option>
                    <option value="">বাংলা</option>
                </select>
                {/* Image area */}
                <img src="https://www.police.gov.bd/asset/images/999_logo_3.png" alt="" className="e_service" />
             </div>
            </div>
        </div>
    )
}

export default TopHeader;