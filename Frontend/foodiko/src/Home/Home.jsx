import { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  const Itempage = lazy(() => import("./Itempage"));

  return (
    <div className="home-container1">
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Itempage />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
