import Product from "../../../components/Product"

const OnSale = () => {
  return (
    <section className=' flex flex-col'>
    <div className="flex justify-between items-baseline px-12">
      <h1 className=" text-5xl text-center text-gray-400 mt-16 font-light mb-16">
        On Sale Now
      </h1>
      <a href="#" className=" flex justify-center text-xl font-thin underline decoration-from-font">
        Shop All Discount Items
      </a>
    </div>
    <div className="flex justify-evenly">
      <Product
        title="Accolade Sweatpants"
        price={54.99}
        priceBeforeDiscount={74.99}
        image="https://cdn.shopify.com/s/files/1/2185/2813/files/U5013RG_04831_b1_s3_a1_1_m148_750x.jpg?v=1685157807"
        isTrending={true}
        tags={["Men", "Bottoms", "Casual"]}
      />
      <Product
        title="Cropped Status Blazer"
        price={74.99}
        priceBeforeDiscount={99.99}
        image="https://cdn.shopify.com/s/files/1/2185/2813/files/W4489R_01_b1_s1_a1_1_m89_0172a92e-27a9-4b84-a4d0-b7090808c2ef_750x.jpg?v=1690583057"
        isTrending={true}
        isAlmostGone={true}
        tags={["Women", "Tops", "Formal"]}
      />
      <Product
        title="Faux Fur Urbanite Bomber"
        price={89.99}
        priceBeforeDiscount={124.99}
        image="https://cdn.shopify.com/s/files/1/2185/2813/products/W4495R_04699_b1_s3_a1_1_m93_750x.jpg?v=1672355491"
        isTrending={false}
        tags={["Men", "Tops", "Casual"]}
      />
      <Product
        title="Renown Heavy Weight Crew Neck Pullover"
        price={79.99}
        priceBeforeDiscount={109.99}
        image="https://cdn.shopify.com/s/files/1/2185/2813/products/U3014R_01_b1_s3_a1_1_m92_750x.jpg?v=1646857579"
        isTrending={false}
        tags={["Men", "Tops", "Casual"]}
      />
    </div>
    </section>
  )
}

export default OnSale
