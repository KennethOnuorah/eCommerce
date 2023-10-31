interface ProductProps {
  title: string
  price: number
  priceBeforeDiscount?: number
  image: string
  isTrending: boolean
  isAlmostGone?: boolean
  tags?: string[]
}

const Product = ({ ...props } : ProductProps) => {
  return (
    <article className="card w-64 rounded-none">
      <figure><img className="cursor-pointer" src={props.image} alt={props.title} width={256}/></figure>
      <div className="card-body mt-4 px-0 py-0">
        <div className="flex gap-2 flex-wrap items-center">
          {props.isTrending && 
            <span className="badge badge-outline select-none font-bold text-red-600 bg-red-300 border-red-600 px-2 py-3">
              HOT 🔥
            </span>
          }
          {props.isAlmostGone && 
            <span className="badge badge-outline select-none font-bold text-purple-600 bg-purple-300 border-purple-600 px-2 py-3">
              ALMOST GONE 🕙
            </span>
          }
          {props.tags?.map((tag, index) => <div key={index} className="badge badge-outline select-none">{tag}</div>)}
        </div>
        <h2 className="card-title text-lg font-thin">
          {props.title}
        </h2>
        <div className="flex gap-4 items-baseline">
          <span>${props.price}</span>
          {props.priceBeforeDiscount && 
            <span className=" line-through text-red-600 text-sm">
              ${props.priceBeforeDiscount}
            </span>
          }
        </div>
      </div>
    </article>
  )
}

export default Product
