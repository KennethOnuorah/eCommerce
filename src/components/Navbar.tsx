import { useState } from 'react'
import { 
  FiUser as UserIcon ,
  FiShoppingCart as CartIcon
} from 'react-icons/fi'
import { CiSearch as SearchIcon } from 'react-icons/ci'

const Navbar = () => {
  const [hasNewlyAddedItems, setHasNewlyAddedItems] = useState(true)
  const [totalNewlyAddedItems, setTotalNewlyAddedItems] = useState(3)

  return (
    <nav className="navbar px-6 py-3 bg-white flex justify-evenly items-baseline text-gray-400">
      <a href="#" className="normal-case text-3xl font-light">Nexus</a>
      <div className="flex text-xl gap-8">
        <a href="#" className="font-thin">
          On Sale
        </a>
        <a href="#" className="font-thin">
          Men
        </a>
        <a href="#" className="font-thin">
          Women
        </a>
        <a href="#" className="font-thin">
          Accessories
        </a>
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
            <span className=' indicator-item badge bg-red-600 px-1 text-white text-xs'>
              {totalNewlyAddedItems}
            </span>
          }
          <button title='Go to cart'>
            <CartIcon size={20} color={'#a0a0a0'}/>
          </button>          
        </div>
        <button title='Log in or Sign up'>
          <UserIcon size={20} color={'#a0a0a0'}/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
