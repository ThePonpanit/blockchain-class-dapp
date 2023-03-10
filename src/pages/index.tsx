import { type NextPage } from "next";
// import NavBar from "@src/components/layout/Navbar";
import Body from "@src/components/home/Body";
import Footer from "@src/components/layout/footer";
const Home: NextPage = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Body />
      <Footer/>
    </div>
  );
};

export default Home;
