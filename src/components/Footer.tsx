import { FiChevronRight as EnterIcon } from 'react-icons/fi'
import { 
  BiLogoInstagram as Insta,
  BiLogoTiktok as TikTok,
  BiLogoFacebookSquare as Facebook,
  BiLogoTwitter as Twitter,
  BiLogoPinterest as Pinterest,
  BiLogoYoutube as Youtube
} from 'react-icons/bi'

const Footer = () => {
  return (
    <section className=' bg-black px-12 py-6 mt-8 font-thin text-white'>
      <div className="flex flex-col gap-12">
        <div className="flex gap-24 justify-between">
          <div>
            <div className=" font-semibold">
              Customer Service
            </div>
            <ul className=" mt-4">
              <li className=" mt-6"><a href="#">Track My Order</a></li>
              <li className=" mt-2"><a href="#">FAQs</a></li>
              <li className=" mt-2"><a href="#">Contact Us</a></li>
              <li className=" mt-2"><a href="#">Shipping Info</a></li>
              <li className=" mt-2"><a href="#">Return Policy</a></li>
              <li className=" mt-2"><a href="#">Gift Card</a></li>
              <li className=" mt-2"><a href="#">Size Guide</a></li>
              <li className=" mt-2"><a href="#">Reviews</a></li>
            </ul>
          </div>
          <div>
            <div className=" font-semibold">
              Information
            </div>
            <ul className=" mt-4">
              <li className=" mt-6"><a href="#">We Are Nexus</a></li>
              <li className=" mt-2"><a href="#">About Us</a></li>
              <li className=" mt-2"><a href="#">Blog</a></li>
              <li className=" mt-2"><a href="#">Store Locations</a></li>
              <li className=" mt-2"><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <div className=" font-semibold">
              My Account
            </div>
            <ul className=" mt-4">
              <li className=" mt-6"><a href="#">Login or Register</a></li> 
              <li className=" mt-2"><a href="#">Track My Order</a></li>
              <li className=" mt-2"><a href="#">FAQs</a></li>
              <li className=" mt-2"><a href="#">Contact Us</a></li>
              <li className=" mt-2"><a href="#">Shipping Info</a></li>
            </ul>
          </div>
          <div>
            <div className=" font-semibold">
              Download the App
            </div>
            <ul className=" mt-4">
              <li className=" mt-6">
                <a href="https://apps.apple.com" target='_blank'>
                  <img src="https://www.aloyoga.com/cdn/shop/files/Download-App-apple.svg?v=2888788672406825800"/>
                </a>
              </li>
            </ul>
          </div>
          <div className=" max-w-xs">
            <div className=" font-semibold">
              Subscribe to our Newsletter for Updates
            </div>
            <ul className=" mt-4">
              <li className=" dropdown mt-2">
                <div className=" join">
                  <input 
                    className="input input-bordered w-full bg-transparent border-white rounded-none" 
                    type="text" 
                    placeholder="Enter your email" 
                  />
                  <div 
                    tabIndex={0}
                    className=" btn join-item rounded-none"
                  >
                    <EnterIcon size={12}/>
                  </div>
                </div>
              </li>
              <li className=" text-xs mt-6">
                By entering your email address, you agree to our <a className=' underline' href='#'>Privacy Policy</a> and will receive Nexus offers, promotions and other commercial messages. You may unsubscribe at any time.
              </li>
              <div className=" font-semibold mt-6">
                Follow us
              </div>
              <div className=' mt-4 flex items-center gap-4'>
                <button className='p-0'>
                  <Insta size={30}/>
                </button>
                <button className='p-0'>
                  <TikTok size={25}/>
                </button>
                <button className='p-0'>
                  <Facebook size={25}/>
                </button>
                <button className='p-0'>
                  <Twitter size={30}/>
                </button>
                <button className='p-0'>
                  <Pinterest size={25}/>
                </button>
                <button className='p-0'>
                  <Youtube size={25}/>
                </button>
              </div>
            </ul>
          </div>
        </div>
        <div className=' text-white flex gap-4'>
          © 2023 Nexus, LLC. All Rights Reserved.
          <span className=' font-light'>
            <ul>
              <li className='inline underline'>
                <a href='#'>Terms</a>
              </li>
              <li className='inline underline pl-2'>
                <a href='#'>Privacy</a>
              </li>
              <li className='inline underline pl-2'>
                <a href='#'>Cookie Policy</a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Footer
