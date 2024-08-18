import "./Home.css";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Carojol from "./components/Carojol";
import ContentArea from "./components/ContentArea";

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
      <ContentArea />
    </>
  );
}

export default Home;
