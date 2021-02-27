import HeroCarousel from "../components/sections/HeroCarousel"

// Dummy data
import { results } from "../../movie.json"

export default function Home() {
   return (
      <>
         <HeroCarousel posts={results.slice(0, 5)} />
      </>
   )
}

Home.title = "Home Page"
