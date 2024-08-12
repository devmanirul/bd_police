import "./Home.css";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Banner from "./Banner";
function Home() {
  return (
    <>
      {/* Header area */}
      <TopHeader />
      {/* Navbar area */}
      <Navbar />
      {/* Banner */}
      <Banner />
    </>
  );
}

export default Home;
