import Product from "../../../components/Product"

const Latest = () => {
  return (
    <section className=" flex flex-col">
      <div className="flex justify-between items-baseline px-12">
        <h1 className=" text-5xl text-center text-gray-400 mt-16 font-light mb-16">
          Latest Arrivals
        </h1>
        <a href="#" className=" flex justify-center text-xl font-thin underline decoration-from-font">
          Shop All Latest Arrivals
        </a>
      </div>
      <div className="flex justify-evenly">
        <Product
          title="Seamless Delight High Neck Bra"
          price={74.99}
          isTrending={true}
          image={'/images/new arrivals/seamless_delight_high_neck_bra_na.png'}
          tags={["Women", "Tops", "Casual"]}
        />
        <Product
          title="Triumph Muscle Tank"
          price={59.99}
          isTrending={false}
          image={'/images/new arrivals/triumph_muscle_tank_na.png'}
          tags={["Men", "Tops", "Fitness"]}
        />
        <Product
          title="Alosoft Courtside Tennis Dress"
          price={64.99}
          isTrending={false}
          image={'/images/new arrivals/tennis_dress_na.png'}
          tags={["Women", "Tops", "Fitness"]}
        />
        <Product
          title="Accolade Hoodie"
          price={69.99}
          isTrending={true}
          image={'/images/new arrivals/accolade_hoodie_na.png'}
          tags={["Men", "Tops", "Casual"]}
        />
      </div>
    </section>
  )
}

export default Latest
