 import Navbar from "../components/Navbar";
 import Footer from "../components/Footer";
 import Hero from "../sections/Hero";
 import Explore from "../sections/Explore";
 import About from "../sections/About";
 import GetStarted from "../sections/GetStarted";
 import WhatsNew from "../sections/WhatsNew";
 import World from "../sections/World";
 import Insights from "../sections/Insights";
 import Feedback from "../sections/Feedback";

 const Page = () => (
   <div className="bg-primary-black overflow-hidden">
     <Navbar />
     <Hero />
     <About />
     <Explore />
     <GetStarted />
     <World />
     <Insights />
     <Feedback />
     <WhatsNew />
     <Footer />
   </div>
 );

 export default Page;
