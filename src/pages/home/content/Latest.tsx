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
          image={'https://cdn.shopify.com/s/files/1/2185/2813/products/W9536R_04681_b2_s1_a1_m140_750x.jpg?v=1676675720'}
          tags={["Women", "Tops", "Casual"]}
        />
        <Product
          title="Triumph Muscle Tank"
          price={59.99}
          isTrending={false}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/products/M2033R_01347_b1_s3_a1_1_m93_750x.jpg?v=1665013610'}
          tags={["Men", "Tops", "Fitness"]}
        />
        <Product
          title="Alosoft Courtside Tennis Dress"
          price={64.99}
          isTrending={false}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/products/W8176R_01_b1_s1_a1_1_m54_750x.jpg?v=1687906487'}
          tags={["Women", "Tops", "Fitness"]}
        />
        <Product
          title="Accolade Hoodie"
          price={69.99}
          isTrending={true}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/files/U3032RG_00_b1_s3_a1_1_m108_750x.jpg?v=1686095297'}
          tags={["Men", "Tops", "Casual"]}
        />
      </div>
    </section>
  )
}

export default Latest
