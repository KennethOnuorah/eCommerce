const RewardsProgram = () => {
  return (
    <section 
      className="hero mt-20 h-32 overflow-hidden"
      style={{
        backgroundImage: 'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F64%2F13%2FNUeiSZ.jpg&f=1&nofb=1&ipt=8cc2a128e413a773ca04af1e26001500a748c1673d9e55f89111c2ded1a70b38&ipo=images")',
        minHeight: `calc(100vh / 1.5)`,
        maxHeight: `calc(100vh / 1.5)`
      }}
    >
      <div className=" hero-content text-center text-white flex-col gap-8">
        <div className=" flex flex-col gap-4 ">
          <div className="font-semibold text-md">
            YOU'VE EARNED THIS
          </div>
          <h1 className=" text-6xl font-thin">
            Nexus <span className=" font-normal">Rewards</span>
          </h1>
          <p className=" max-w-lg">
            Use the points you earn from shopping and reward yourself with something special on your next purchase
          </p>
        </div>
        <div className="btn px-2 font-bold">
          View Rewards
        </div>
      </div>
    </section>
  )
}

export default RewardsProgram
