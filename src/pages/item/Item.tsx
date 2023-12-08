import { useRef, useState } from 'react'
import { 
  PiShoppingCartSimpleBold as Cart,
  PiHeartStraightBold as Heart,
  PiCaretDown as Down,
  PiCaretUp as Up
} from 'react-icons/pi'
import { 
  BiLogoInstagram as Insta,
  BiShareAlt as Share,
  BiLogoFacebookSquare as Facebook,
  BiLogoTwitter as Twitter,
  BiLogoPinterest as Pinterest,
} from 'react-icons/bi'
import Product from '../../components/Product'

interface ItemProps {
  name: string
  price: number
  discount?: number
  imageSource: string
}

const Item = ({name, price, discount, imageSource} : ItemProps) => {
  const [itemQuantity, setItemQuantity] = useState(1)
  const itemAddedModal = useRef<HTMLDialogElement>(null)

  return (
    <section className="mt-24 px-12">
      <div className="breadcrumbs text-xs mb-4 pl-2">
        <ul>
          <li className=' select-none cursor-pointer'>Home</li>
          <li className=' select-none cursor-pointer'>Women</li>
          <li className=' select-none cursor-pointer'>Tops</li>
          <li className=" font-semibold underline select-none cursor-pointer">
            {name}
          </li>
        </ul>
      </div>
      <div className='flex gap-2'>
        <div className="flex flex-wrap max-w-3xl">
          <div className="w-1/2 md:w-1/2 lg:w-1/2 p-2">
            <img src={imageSource} alt={`Image of ${name}`} className="w-full h-auto"/>
          </div>
          <div className="w-1/2 md:w-1/2 lg:w-1/2 p-2 filter grayscale">
            <img src={imageSource} alt={`Image of ${name}`} className="w-full h-auto"/>
          </div>
          <div className="w-1/2 md:w-1/2 lg:w-1/2 p-2 filter sepia">
            <img src={imageSource} alt={`Image of ${name}`} className="w-full h-auto"/>
          </div>
          <div className="w-1/2 md:w-1/2 lg:w-1/2 p-2">
            <img src={imageSource} alt={`Image of ${name}`} className="w-full h-auto"/>
          </div>
        </div> 
        <div className=' flex flex-col gap-8 p-2 w-full'>
          <div className='flex flex-col gap-2'>
            <div className=" flex items-center justify-between text-2xl">
              {name}
              <button>
                <Heart/>
              </button>
            </div>
            <div className=" text-lg font-thin ">
              ${price - 0.01} {discount && 
                <span className=' text-sm text-red-600 line-through'>
                  ${((price / (1 - discount)) - 0.01).toFixed(2)}
                </span>}
            </div>
            <hr/>
            <div className=' flex items-center mt-2'>
              Color:
              <div className=' ml-2 flex gap-2'>
                <input type="radio" name="radio" className="radio bg-black checked:bg-black"/>
                <input type="radio" name="radio" className="radio bg-red-200 checked:bg-red-400"/>
                <input type="radio" name="radio" className="radio bg-green-200 checked:bg-green-400"/>
                <input type="radio" name="radio" className="radio bg-blue-200 checked:bg-blue-400"/>
              </div>
            </div>  
          </div>
          <div className=' flex gap-2'>
            <div className=' flex self-center'>
              <input 
                className=' w-16 border-black border-2 outline-none p-2 text-center h-16' 
                type="text" 
                name="item-qty" 
                value={itemQuantity}
              />
              <div className=' flex flex-col w-12'>
                <button 
                  className='flex justify-center items-center h-8 bg-black text-white border-none rounded-none hover:bg-black'
                  onClick={() => {
                    if(itemQuantity >= 99) return
                    setItemQuantity(itemQuantity + 1)
                  }}
                >
                  <Up/>
                </button>
                <button 
                  className='flex justify-center items-center h-8 bg-black text-white border-none rounded-none hover:bg-black'
                  onClick={() => {
                    if(itemQuantity <= 1) return
                    setItemQuantity(itemQuantity - 1)
                  }}
                >
                  <Down/>
                </button>
              </div>
            </div>
            <button 
              className=" flex justify-center items-center gap-2 bg-black text-white font-bold rounded-none p-4 hover:bg-gray-800 transition-colors flex-grow h-16"
              onClick={() => {
                itemAddedModal.current?.showModal()
              }}
            >
              Add to Shopping Cart <Cart/>
            </button>
          </div>
          <dialog className="modal" ref={itemAddedModal}>
            <div className="modal-box text-center rounded-none">
              <h3 className="font-bold text-2xl">{`${itemQuantity > 1 ? itemQuantity : ''} `} Item{itemQuantity > 1 && 's'} Added Successfully</h3>
              <p className="py-4 text-sm">
                {`${itemQuantity > 1 ? itemQuantity : 'One'} `}
                <span className='italic font-bold'> 
                  {name}{itemQuantity > 1 && 's'} 
                </span>
                {itemQuantity > 1 ? ' have' : ' has'} been added to your cart.
              </p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
          <aside className="join join-vertical w-full rounded-none">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4"/> 
              <div className="collapse-title text-md font-bold">
                Description & Details
              </div>
              <div className="collapse-content text-sm"> 
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <br/>
                <ul className=' leading-8'>
                  <li>- Detail #1</li>
                  <li>- Detail #2</li>
                  <li>- Detail #3</li>
                  <li>- Detail #4</li>
                  <li>- Detail #5</li>
                </ul>
                <br/>
                <p>
                  Item ID: 1234567-8A91234_5V678
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" /> 
              <div className="collapse-title text-md font-bold">
                Care
              </div>
              <div className="collapse-content text-sm"> 
                <p>
                  For cleaning and care instructions, we advise you to carefully read the product label present inside the garment. For any questions or concerns, please visit our Care Guide page or entrust its care to a specialist cleaning service.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" /> 
              <div className="collapse-title text-md font-bold">
                Size & Fit
              </div>
              <div className="collapse-content text-sm"> 
                <ul className=' leading-8'>
                  <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>- Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" /> 
              <div className="collapse-title text-md font-bold">
                Shipping & Return
              </div>
              <div className="collapse-content text-sm"> 
                <p>
                  Complimentary shipping
                  <br/>
                  Personalized items might take longer to ship. For more details view our <span className=' underline cursor-pointer'>Shipping and Delivery section.</span>
                  <br/><br/>
                  Free returns on all orders. Please bear in mind that we do not accept returns on certain items. For more information, please read our <span className=' underline cursor-pointer'>Return Policy</span>.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-md font-bold">
                Share
              </div>
              <div className="collapse-content text-sm"> 
                <div className=' flex justify-around items-center'>
                  <button className=' bg-gray-100 p-2 rounded-full'><Facebook size={25}/></button>
                  <button className=' bg-gray-100 p-2 rounded-full'><Twitter size={25}/></button>
                  <button className=' bg-gray-100 p-2 rounded-full'><Insta size={25}/></button>
                  <button className=' bg-gray-100 p-2 rounded-full'><Pinterest size={25}/></button>
                  <button className=' bg-gray-100 p-2 rounded-full'><Share size={25}/></button>
                </div>
              </div>
            </div>
            <a className=' p-4 font-bold underline text-center text-sm' href='#'>Need Assistance?</a>
          </aside>
        </div>
      </div>
      <hr className=' mt-8'/>
      <div className=' mt-4'>
        <h1 className=' text-2xl mb-4'>
          You May Also Like
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

export default Item
