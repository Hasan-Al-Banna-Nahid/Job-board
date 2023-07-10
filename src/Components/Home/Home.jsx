import Header from "../Home/Header/Header";
import Banner from "./Banner/Banner";
import Candidates from "./Candidates/Candidates";
import FeaturedCompanies from "./Featured Companies/FeaturedCompanies";
import FeaturedJobs from "./Featured Jobs/FeaturedJobs";
import Footer from "./Footer/Footer";
import Testimonial from "./Testimonial/Testimonial";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FeaturedJobs />
      <FeaturedCompanies />
      <Testimonial />
      <Candidates />
      <Footer />
    </div>
  );
};

export default Home;
