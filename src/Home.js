import "./Home.css";
import TopHeader from "./TopHeader";
import Navbar from "./Carojol";
import Banner from "./Banner";
import Carojol from "./Carojol";
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
      <Carojol/>
    </>
  );
}

export default Home;
