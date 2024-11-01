import Brands from "./ui/brands/Brands"
import Collection from "./ui/collection/Collection"
import Hero from "./ui/hero/Hero"
import New from "./ui/new/New"
import Season from "./ui/season/Season"



const Home = () => {
  return (
    <div >
      <Hero />
      <Season />
      <Collection />
      <New/>
      <Brands />
    </div>
  )
}

export default Home