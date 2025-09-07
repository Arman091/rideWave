import Header from "@/components/header";
import HeroSection from "@/containers/homepage/herosection";
import FeaturesSection from "@/containers/homepage/fetaures";
import TestimonialsSection from "@/containers/homepage/testimonials";
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
      {/* <TestimonialsSection/> */}
     </div>
    </div>
  )
}
export default Home
