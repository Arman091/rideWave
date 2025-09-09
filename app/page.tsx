import Header from "@/components/header";
import HeroSection from "@/containers/homepage/herosection";
import FeaturesSection from "@/containers/homepage/fetaures";
import TestimonialsSection from "@/containers/homepage/testimonials";
import Footer from "@/components/footer";
function Home() {
  function setIsModalOpen() {

  }
  return (
    <div>
      <div className="flex justify-center shadow-md ">
        <Header showNavbar={true} />
      </div>
      <div>
       <HeroSection />
      </div>
      <div>
        <FeaturesSection/>
      </div>
     <div>
      <TestimonialsSection/>
     </div>
     <Footer/>
    </div>
  )
}
export default Home
