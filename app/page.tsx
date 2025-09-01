import Header from "@/components/header";
import Navlinks from "@/components/header/Navlinks";
 function Home() {
  function setIsModalOpen(){

  }
  return (
    <div className="flex justify-center bg-gray-primary-100">
   <Header showNavbar={true}/>
   {/* <Navlinks isMobileview={true} setIsModalOpen={setIsModalOpen} /> */}
   </div>
  )
}
export default Home
