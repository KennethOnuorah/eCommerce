import { IoCloseOutline as Close } from "react-icons/io5";

interface CartItemProps {
  name: string
  image: string
  quantity: number
}

const CartItem = ({ name, image, quantity } : CartItemProps) => {
  return (
    <article>
      <div className=' flex'>
        <img src={image} alt="Image of item" width={200}/>
        <div className=' flex grow items-baseline justify-between'>
          <div className=' p-4 w-64'>
            <div className=' text-xl font-bold mb-2'>
              {name}
            </div>
            <div className=' leading-8'>
              Color: N/A
              <br />
              Size: N/A
              <br />
              SKU: N1234567890
            </div>
          </div>
          <div className=" text-sm">
            <button className=" select-none w-8 h-8 border border-r-white text-gray-400 border-r-0 hover:text-gray-800">
              -
            </button>
            <input className=" w-8 h-8 border outline-none text-center" type="text" name="qty" defaultValue={quantity}/>
            <button className=" select-none w-8 h-8 border border-l-white text-gray-400 border-l-0 hover:text-gray-800">
              +
            </button>
          </div>
          <div className=" font-semibold">
            $59.99
          </div>
        </div>
      </div>
      <div className=" flex justify-end">
        <button className=" flex justify-center items-center bg-gray-200 rounded-full w-8 h-8">
          <Close size={20}/>
        </button>
      </div>
      <hr className=' mt-4 mb-8'/>
    </article>
  )
}

export default CartItem
