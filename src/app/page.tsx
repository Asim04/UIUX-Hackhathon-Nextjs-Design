
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Aboutus from "./Components/About-us/Aboutus";
import Our from "./Components/Our-profile/Our";
import Menu_section from "./Components/Menu-Section/Menu_section";
import Footer from "./Components/Footer/Footer";
import Mobilebar from "./Components/Mobilebar/Mobilebar";

export default function Home() {
  return (
    
    <div  >

      <div className="hidden lg:block sticky top-0 z-10">
        <Header  />
      </div>

      <div className="lg:hidden">
          <Mobilebar />
      </div>
      
      <Hero />
      <Aboutus />
      <Our />
      <Menu_section />

      <div className="fiexd bottom-0 left-0">
      <Footer />
      </div>


    </div>
  );
}
