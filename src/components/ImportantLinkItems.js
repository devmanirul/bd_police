


import "./ImportantLinkItems.css";

const ImportantLinkItems = ({ title, logo }) => {
  return (
    <div className="">
      <a href="#" className="card1">
      <img src={logo} alt="" className="imgcard1" />
      <p className="">{title}</p>
    </a>
    </div>
  );
};

export default ImportantLinkItems;