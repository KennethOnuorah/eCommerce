import { useState } from 'react'

const Hero = () => {
  const [bottomMargin,] = useState(64)

  return (
    <section 
      className=' hero rounded-3xl mt-20 min-h-screen overflow-hidden' 
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
          <img src="/images/coat_model.png" alt="Woman with brown fur coat" width={450}/>
        </figure>
      </div>
    </section>
  )
}

export default Hero
