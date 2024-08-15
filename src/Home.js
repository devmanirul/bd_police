import "./Home.css";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Carojol from "./Carojol";
import ContentArea from "./ContentArea";
function Home() {
  return (
    <>
      {/* Header area */}
      <TopHeader />
      {/* Navbar area */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {/* Carojol */}
      <Carojol />
      {/* content area */}
      <ContentArea/> 
    </>
  );
}

export default Home;
