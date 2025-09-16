import "./App.css";
import Banner from "./components/Banner";
import CompanyStats from "./components/CompanyStats";
import CTA from "./components/CTA";
import DevelopedProject from "./components/DevelopedProject";
import DigitalMarketting from "./components/DigitalMarketting";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurProducts from "./components/OurProducts";
import OurServices from "./components/OurServices";
import TechnologyUsed from "./components/TechnologyUsed";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Banner />
      <CompanyStats />
      <OurServices />
      <OurProducts />
      <DevelopedProject />
      <DigitalMarketting />
      <TechnologyUsed />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
