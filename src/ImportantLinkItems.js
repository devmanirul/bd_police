import "./ImportantLinkItems.css";

const ImportantLinkItems = ({ logo, title }) => {
  return (
    <a href="#" className="card1">
      <img src={logo} alt="" className="imgcard1" />
      <p className="">{title}</p>
    </a>
  );
};

export default ImportantLinkItems;
