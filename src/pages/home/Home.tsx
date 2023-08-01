import Hero from "./content/Hero"
import Latest from "./content/Latest"
import OnSale from "./content/OnSale"

const Home = () => {
  return (
    <main className='px-8'>
      <Hero/>
      <Latest/>
      <OnSale/>
    </main>
  )
}

export default Home
