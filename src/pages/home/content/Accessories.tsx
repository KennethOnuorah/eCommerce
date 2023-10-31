import Product from "../../../components/Product"

const Accessories = () => {
  return (
    <section className='flex flex-col'>
      <div className="flex justify-between items-baseline px-12">
        <h1 className=" text-5xl text-center text-gray-400 mt-16 font-light mb-16">
          Accessories
        </h1>
        <a href="#" className=" flex justify-center text-xl font-thin underline decoration-from-font">
          Shop All Accessories
        </a>
      </div>
      <div className="flex justify-evenly">
        <Product
          title="Chill Sunglasses"
          price={99.99}
          isTrending={true}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/products/A0306W_04816_b1_a1_750x.jpg?v=1666665631'}
          tags={["Accessories", "Eyewear", "Outdoors"]}
        />
        <Product
          title="Black Onyx Mala Bracelet"
          price={59.99}
          isTrending={true}
          isAlmostGone={true}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/products/JSM0002_030700800_b1_a1_750x.jpg?v=1605153628'}
          tags={["Accessories", "Wristwear"]}
        />
        <Product
          title="Cool Skies Earflap Beanie"
          price={109.99}
          isTrending={false}
          isAlmostGone={false}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/products/A0415U_03299_b1_a1_223fc42d-f4ea-4d40-8d53-46e0f87bb37d_750x.jpg?v=1666629035'}
          tags={["Accessories", "Hats", "Outdoors", "Winter"]}
        />
        <Product
          title="Rose Quartz Mala Necklace"
          price={149.99}
          isTrending={false}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/products/JSM0005_03777_b1_s1_a1__1_3_750x.jpg?v=1605153627'}
          tags={["Accessories", "Women", "Neckwear"]}
        />
      </div>
    </section>
  )
}

export default Accessories
