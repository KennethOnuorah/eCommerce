interface ProductProps {
  title: string
  price: number
  priceBeforeDiscount?: number
  image: string
  isTrending: boolean
  tags?: string[]
}

const Product = ({ title, price, priceBeforeDiscount, image, isTrending, tags } : ProductProps) => {
  return (
    <article className="card w-64 rounded-none">
      <figure><img className="cursor-pointer" src={image} alt={title} width={256}/></figure>
      <div className="card-body mt-4 px-0 py-0">
        <div className="flex gap-2 flex-wrap items-center">
          {isTrending && 
            <span className="badge badge-outline select-none font-bold text-red-600 bg-red-300 border-red-600 px-2 py-3">
              HOT 🔥
            </span>
          }
          {tags?.map(tag => <div className="badge badge-outline select-none">{tag}</div>)}
        </div>
        <h2 className="card-title text-lg font-thin">
          {title}
        </h2>
        <div className="flex gap-4 items-baseline">
          <span>${price}</span>
          {priceBeforeDiscount && <span className=" line-through text-red-600 text-sm">${priceBeforeDiscount}</span>}
        </div>
      </div>
    </article>
  )
}

export default Product
