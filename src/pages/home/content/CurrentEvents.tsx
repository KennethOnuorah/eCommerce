import { useState } from 'react'

const CurrentEvents = () => {
  const [bottomMargin,] = useState(64)

  return (
    <section 
      className=' hero mt-20 min-h-screen overflow-hidden' 
      style={{
        backgroundImage: 'linear-gradient(to right, #f3deba, #ecd1f7)',
        minHeight: `calc(100vh - 80px - ${bottomMargin}px)`,
        maxHeight: `calc(100vh - 80px - ${bottomMargin}px)`
      }}
    >
      <div className="hero-content">
        <div className=' flex flex-col gap-8 justify-between text-purple-400 mb-16'>
          <h1 className=' font-semibold text-7xl'>
            Autumn
            <br/>
            Collection
          </h1>
          <h2 className=' text-2xl text-purple-800'>
            Shop Now and Get 25% Off New Releases
          </h2>
          <button className='btn btn-primary w-max px-8 font-normal rounded-full text-xl bg-purple-800 border-purple-800 hover:bg-purple-800 hover:border-purple-800'>
            Shop Now
          </button>
        </div>
        <figure>
          <img 
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Flarge%2Fpurepng.com-faux-fur-coatfurry-animal-hidesclothingwarmcoatfauxfur-coatbrownwomens-1421526317459tlk8i.png&f=1&nofb=1&ipt=080d36a2b4244ed524af070bb13969619795bd090da5c106d831eeb3a8b9734b&ipo=images" 
            alt="Brunette woman wearing brown fur coat"
            width={450}
          />
        </figure>
      </div>
    </section>
  )
}

export default CurrentEvents
