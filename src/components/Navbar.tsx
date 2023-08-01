import { useState } from 'react'
import { 
  FiUser as LogInIcon ,
  FiShoppingCart as CartIcon
} from 'react-icons/fi'
import { IoGiftOutline as GiftIcon } from 'react-icons/io5'
import { CiSearch as SearchIcon } from 'react-icons/ci'

const Navbar = () => {
  const [hasNewlyAddedItems,] = useState(true)
  const [totalNewlyAddedItems,] = useState(3)

  return (
    <nav className="navbar fixed top-0 left-0 px-6 py-4 bg-white flex justify-evenly items-center text-gray-400 z-50">
      <a href="#" className="normal-case text-3xl font-light">Nexus</a>
      <div className="flex text-xl gap-8">
        <a href="#" className="font-thin">New</a>
        <a href="#" className="font-thin">Men</a>
        <a href="#" className="font-thin">Women</a>
        <a href="#" className="font-thin">Accessories</a>
        <label className="flex items-center font-thin">
          <div className='btn bg-transparent border-transparent hover:bg-transparent hover:border-transparent'>
            <SearchIcon size={20} color={'#a0a0a0'}/>
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
          {hasNewlyAddedItems && 
            <span className=' indicator-item badge bg-red-600 px-1 text-white text-xs select-none'>
              {totalNewlyAddedItems}
            </span>
          }
          <button className='px-0 py-0 bg-transparent border-none' title='Go to cart'>
            <CartIcon size={20} color={'#a0a0a0'}/>
          </button>
        </div>
        <button title='View rewards'>
          <GiftIcon size={22} color={'#a0a0a0'}/>
        </button>
        <button title='Log in/Sign up'>
          <LogInIcon size={20} color={'#a0a0a0'}/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
