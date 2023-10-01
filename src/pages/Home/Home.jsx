import About from "../../components/About";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import HeroSection from "../../components/HeroSection";
import NavBar from "../../components/NavBar";


const Home = () => {
  return (
    <div className="bg-[#F4F6F8]">
      <NavBar />
      <HeroSection />
      <Features />
      <About />
      <Footer />
    </div>
  )
}

export default Home;