import Header from "@/components/header";
import HeroSection from "@/containers/homepage/herosection";
function Home() {
  function setIsModalOpen() {

  }
  return (
    <div>
      <div className="flex justify-center shadow-md ">
        <Header showNavbar={true} />
      </div>
      <HeroSection />
      {/* <Navlinks isMobileview={true} setIsModalOpen={setIsModalOpen} /> */}
    </div>
  )
}
export default Home
