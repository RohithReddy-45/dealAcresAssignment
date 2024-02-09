import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PropertyListing from "./components/PropertyListing";
import About from "./components/About";
import FAQs from "./components/FAQs";
import InterestingReads from "./components/InterestingReads";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PropertyListing />
      <About />
      <FAQs />
      <InterestingReads />
      <Footer />
    </div>
  );
}

export default App;
