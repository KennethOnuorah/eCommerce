import Product from "../../../components/Product"

const Men = () => {
  return (
    <section className=" flex flex-col">
      <div className="flex justify-between items-baseline px-12">
        <h1 className=" text-5xl text-center text-gray-400 mt-16 font-light mb-16">
          Men
        </h1>
        <a href="#" className=" flex justify-center text-xl font-thin underline decoration-from-font">
          Shop All Men's Clothing
        </a>
      </div>
      <div className="flex justify-evenly">
        <Product
          title="Chill Sleeveless Hoodie"
          price={79.99}
          isTrending={true}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/files/M3209R_03040_b1_s3_a1_1_m108_726611ca-79dc-46e8-8cb3-2afddb95c1a4_750x.jpg?v=1691091441'}
          tags={["Men", "Tops", "Casual", "Fitness"]}
        />
        <Product
          title="Conquer React Performance Pant"
          price={114.99}
          isTrending={false}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/files/M5142R_02125_b1_s3_a1_1_m93_8d3b52db-ea11-4ac7-96d8-8966c9608201_750x.jpg?v=1684789239'}
          tags={["Men", "Bottoms", "Fitness"]}
        />
        <Product
          title="Conquer Revitalize Pant"
          price={109.99}
          isTrending={true}
          isAlmostGone={true}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/products/M5070R_01_b1_s3_a1_1_m92_750x.jpg?v=1656015758'}
          tags={["Men", "Bottoms", "Casual"]}
        />
        <Product
          title="Core Hooded Runner"
          price={64.99}
          isTrending={false}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/products/M3156R_01_b1_s3_a1_1_m93_750x.jpg?v=1664319785'}
          tags={["Men", "Tops", "Casual", "Fitness"]}
        />
      </div>
    </section>
  )
}

export default Men
