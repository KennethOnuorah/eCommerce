import { useState } from "react"
import CartItem from "./CartItem/CartItem"

import { 
  BsChatLeft as Help,
  BsChevronDown as Collapse
} from "react-icons/bs"
import { 
  FaAmazonPay as AmazonPay,
  FaPaypal as PayPal,
} from "react-icons/fa";
import Product from "../../components/Product";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(49.99)
  const [tax,] = useState(15.50)
  const [total, setTotal] = useState(subTotal + tax)

  return (
    <section className=' mt-24 px-12'>
      <div className=" flex items-baseline gap-16">
        <div className=" grow">
          <div className=" flex justify-between items-baseline">
            <div className=" text-2xl">
              Your Shopping Cart
            </div>
            <div className=" text-lg">
              0 Items
            </div>
          </div>
          <hr className=" mt-8 mb-8"/>
          {/* <CartItem 
            name={'***EXAMPLE CART ITEM***'} 
            image="https://cdn.shopify.com/s/files/1/2185/2813/products/W9536R_04681_b2_s1_a1_m140_750x.jpg?v=1676675720"
            quantity={1}
          /> */}
        </div>
        <div className=" flex flex-col gap-4 w-96">
          <div className=" border p-4">
            <h1 className=" font-bold text-lg text-left mb-2">
              Order Summary
            </h1>
            <div className=" flex flex-col gap-2">
              <div className=" text-sm flex justify-between">
                <div>
                  Subtotal:
                </div>
                <div className="">
                  ${subTotal}
                </div>
              </div>
              <div className=" text-sm flex justify-between">
                <div>
                  Estimated Tax:
                </div>
                <div className="">
                  ${tax.toFixed(2)}
                </div>
              </div>
              <div className=" text-sm flex justify-between">
                <div>
                  Shipping:
                </div>
                <div className="">
                  Free
                </div>
              </div>
              <hr className=" my-2"/>
              <div className=" text-sm flex justify-between">
                <div className=" underline underline-offset-2">
                  Estimated Total:
                </div>
                <div className=" text-xl font-semibold">
                  ${total.toFixed(2)}
                </div>
              </div>
            </div>
            <button className=" btn w-full my-4 rounded-none text-white bg-black hover:bg-black">
              CHECKOUT
            </button>
            <div className=" divider h-1 text-sm">OR</div>
            <div className=" flex items-center justify-between pt-4">
              <button className=" btn rounded-none text-white bg-blue-400 hover:bg-blue-400">
                Proceed with <PayPal size={25}/>
              </button>
              <button className=" btn rounded-none text-white bg-orange-400 hover:bg-orange-400">
                Proceed with <AmazonPay size={25}/>
              </button>
            </div>
          </div>
          <div className="collapse border rounded-none">
            <input type="checkbox" /> 
            <div className="collapse-title flex items-center p-4 justify-between gap-2">
              <div className=" flex items-end gap-2">
                <Help size={20}/> Need Assistance?
              </div>
              <Collapse/>
            </div>
            <div className="collapse-content text-sm leading-4 break-words"> 
              <p>
                Visit our <strong>FAQ page</strong>, call us at <strong>855-793-3100</strong>, or chat with us using our live support:
              </p>
              <br/>
              <p>
                Mon - Fri: 6:00 AM - 6:30 PM PT
                <br />
                Sat - Sun: 8:00 AM - 4:30 PM PT
              </p>
              <br/>
              <p>
                <strong>Email us</strong> anytime. If you contact us after business hours, we will get back to you the following business day.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=' mt-4'>
        <h1 className=' text-2xl mb-4'>
          Recommended Accessories
        </h1>
        <div className=' flex justify-between'>
          <Product
            title="Placeholder 1"
            price={49.99}
            isTrending={false}
            image={'https://cdn.shopify.com/s/files/1/2185/2813/files/M3209R_03040_b1_s3_a1_1_m108_726611ca-79dc-46e8-8cb3-2afddb95c1a4_750x.jpg?v=1691091441'}
            tags={[]}
          />
          <Product
            title="Placeholder 2"
            price={49.99}
            isTrending={false}
            image={'https://cdn.shopify.com/s/files/1/2185/2813/files/M3209R_03040_b1_s3_a1_1_m108_726611ca-79dc-46e8-8cb3-2afddb95c1a4_750x.jpg?v=1691091441'}
            tags={[]}
          />
          <Product
            title="Placeholder 3"
            price={49.99}
            isTrending={false}
            image={'https://cdn.shopify.com/s/files/1/2185/2813/files/M3209R_03040_b1_s3_a1_1_m108_726611ca-79dc-46e8-8cb3-2afddb95c1a4_750x.jpg?v=1691091441'}
            tags={[]}
          />
          <Product
            title="Placeholder 4"
            price={49.99}
            isTrending={false}
            image={'https://cdn.shopify.com/s/files/1/2185/2813/files/M3209R_03040_b1_s3_a1_1_m108_726611ca-79dc-46e8-8cb3-2afddb95c1a4_750x.jpg?v=1691091441'}
            tags={[]}
          />
        </div>
      </div>
    </section>
  )
}

export default Cart
