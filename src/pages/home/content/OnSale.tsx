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
        image="/images/on sale/accolade_sweatpant_sale.png"
        isTrending={true}
        tags={["Men", "Bottoms", "Casual"]}
      />
      <Product
        title="Cropped Status Blazer"
        price={74.99}
        priceBeforeDiscount={99.99}
        image="/images/on sale/cropped_status_blazer_sale.png"
        isTrending={true}
        tags={["Women", "Tops", "Formal"]}
      />
      <Product
        title="Renown Heavy Weight Crew Neck Pullover"
        price={79.99}
        priceBeforeDiscount={109.99}
        image="/images/on sale/renown_heavy_weight_crew_neck_pullover_sale.png"
        isTrending={false}
        tags={["Men", "Tops", "Casual"]}
      />
      <Product
        title="Accolade Sweatpants"
        price={54.99}
        priceBeforeDiscount={74.99}
        image="/images/on sale/accolade_sweatpant_sale.png"
        isTrending={true}
        tags={["Men", "Bottoms", "Casual"]}
      />
    </div>
    </section>
  )
}

export default OnSale
