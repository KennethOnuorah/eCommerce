import CurrentEvents from "./content/CurrentEvents"
import RewardsProgram from "./content/RewardsProgram"
import Latest from "./content/Latest"
import OnSale from "./content/OnSale"
import Men from "./content/Men"
import Women from "./content/Women"
import Accessories from "./content/Accessories"

const Home = () => {
  return (
    <section>
      <CurrentEvents/>
      <Latest/>
      <OnSale/>
      <RewardsProgram/>
      <Men/>
      <Women/>
      <Accessories/>
    </section>
  )
}

export default Home
