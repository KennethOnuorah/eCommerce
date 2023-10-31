import Product from "../../../components/Product"

const Women = () => {
  return (
    <section className=" flex flex-col">
      <div className="flex justify-between items-baseline px-12">
        <h1 className=" text-5xl text-center text-gray-400 mt-16 font-light mb-16">
          Women
        </h1>
        <a href="#" className=" flex justify-center text-xl font-thin underline decoration-from-font">
          Shop All Women's Clothing
        </a>
      </div>
      <div className="flex justify-evenly">
        <Product
          title="Accolade Crew Neck Pullover"
          price={109.99}
          isTrending={false}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/files/U3031RG_04989_b1_s1_a1_1_m18_750x.jpg?v=1691599560'}
          tags={["Women", "Tops", "Casual"]}
        />
        <Product
          title="Aspen Love Puffer Jacket"
          price={249.99}
          isTrending={false}
          isAlmostGone={true}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/files/W4433R_01_b1_s1_a1_1_m89_aacb9033-7e7c-4d25-8d67-9c540534678c_750x.jpg?v=1693340616'}
          tags={["Women", "Tops", "Casual", "Rain & Winter"]}
        />
        <Product
          title="Airbrush High-Waist Flutter Legging"
          price={99.99}
          isTrending={true}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/files/W5946R_01_b1_s1_a1_1_m54_378ca61c-5bf9-4614-b462-d9a99949cac1_750x.jpg?v=1696526326'}
          tags={["Women", "Bottoms", "Formal"]}
        />
        <Product
          title="Accolade Straight Leg Sweatpant"
          price={104.99}
          isTrending={false}
          image={'https://cdn.shopify.com/s/files/1/2185/2813/products/U5012RG_02910_b1_s1_a1_1_m89_750x.jpg?v=1681412473'}
          tags={["Women", "Bottoms", "Fitness"]}
        />
      </div>
    </section>
  )
}

export default Women
