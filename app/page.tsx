import Header from "@/components/header";
import Navlinks from "@/components/header/Navlinks";
 function Home() {
  function setIsModalOpen(){

  }
  return (
  <div className="flex justify-center shadow-md ">
   <Header showNavbar={true}/>
   {/* <Navlinks isMobileview={true} setIsModalOpen={setIsModalOpen} /> */}
   </div>
  )
}
export default Home
