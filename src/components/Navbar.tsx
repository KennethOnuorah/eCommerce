import { useState } from 'react'
import { 
  PiUserLight as LogInIcon, 
  PiShoppingCartSimpleLight as CartIcon, 
  PiGiftLight as GiftIcon 
} from 'react-icons/pi'
import { CiSearch as SearchIcon } from 'react-icons/ci'

const Navbar = () => {
  const [itemCountUpdated,] = useState(true)

  return (
    <nav className="navbar fixed top-0 left-0 px-6 py-4 bg-white flex justify-evenly items-baseline text-black z-50">
      <a href="#" className="normal-case text-4xl font-light">Nexus</a>
      <div className="flex text-xl gap-8">
        <a href="#" className="font-thin">New</a>
        <a href="#" className="font-thin">Men</a>
        <a href="#" className="font-thin">Women</a>
        <a href="#" className="font-thin">Accessories</a>
        <label className="flex items-center font-thin">
          <div className='btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent'>
            <SearchIcon size={20} color={'black'}/>
          </div>
          <input 
            type="search" 
            placeholder="Search" 
            className="input bg-white border-white text-lg px-0 focus:outline-none"
          />
        </label>
      </div>
      <div className='flex gap-8'>
        <div className="indicator">
          <button className='px-0 bg-transparent border-none' title='Go to cart'>
            {itemCountUpdated && 
              <div className=' absolute right-0 bg-red-600 border-white border-2 rounded-full h-2.5 w-2.5 translate-x-0.5'/>}
            <CartIcon size={20} color={'black'}/>
          </button>
        </div>
        <button title='View rewards'>
          <GiftIcon size={22} color={'black'}/>
        </button>
        <button title='Log in/Sign up'>
          <LogInIcon size={20} color={'black'}/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
