
import { BsFillStarFill } from 'react-icons/bs'


function ProductList({ image, title, count, catogery, price, rating, description }) {

  return (
    <>
      <div className="h-18 w-28 pt-4">
        <img src={image} alt="productimage" /></div>
      <p className='text-blue-600'>👻more colors available</p>

      <div className="flex-col flex p-2">
        <p className="font-semibold text-xl font-serif md:hover:text-blue-600 hover:text-blue-600">{title}</p>
        <div className="flex flex-row gap-2">
          <p className="text-blue-700 font-semibold">$ {price},</p>
          
        </div>
        <p className="text-base font-semibold text-green-700 pb-1">Saver Deal</p>
        <p className="flex bg-green-700 w-fit px-1 rounded-md text-white gap-1 text-sm">{rating} {<BsFillStarFill />} </p>
        
        <p className="text-pink-600 font-serif"> Only {count} left </p>
        <p >{catogery} </p>
        <p className="text-base font-normal md:font-normal md:hover:text-orange-600 hover:text-orange-600">{description.slice(0,100)}<span className="font-semibold md:font-medium">...know more </span></p>

      </div>
    </>
  )
}

export default ProductList;
