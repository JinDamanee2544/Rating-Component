import { useState } from 'react';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const Rating = ({props}) => {
    const {rating,setRating,setIsSubmit} = props; 
    const [isFav,setIsFav] = useState(false);

    const toggleFav = () => {
        setIsFav(!isFav)
    }

    return (
        <>
        <button className='p-2 bg-my-light-gray rounded-full' onClick={toggleFav}>
            {!isFav && <AiOutlineStar className='fill-primary'/>}
            {isFav && <AiFillStar className='fill-primary'/>}
        </button>
            <h1 className="text-white my-4 text-xl font-bold">How did we do?</h1>
            <p className="text-medium-gray mt-4 mb-8 text-sm">
                Plese let us know how did with your support <br/>
                request. All feedback us appreciated to help us <br/>
                imporve our offering!
            </p>
            <ul className='flex justify-between'>
              <li><button className={`rating-btn ${rating>=1?'active':null}`} onClick={()=>setRating(1)}>1</button></li>
              <li><button className={`rating-btn ${rating>=2?'active':null}`} onClick={()=>setRating(2)}>2</button></li>
              <li><button className={`rating-btn ${rating>=3?'active':null}`} onClick={()=>setRating(3)}>3</button></li>
              <li><button className={`rating-btn ${rating>=4?'active':null}`} onClick={()=>setRating(4)}>4</button></li>
              <li><button className={`rating-btn ${rating>=5?'active':null}`} onClick={()=>setRating(5)}>5</button></li>
            </ul>
            
            <button className='bg-primary w-full p-2 rounded-2xl mt-8 text-white font-semibold hover:bg-white hover:text-primary' onClick={()=>setIsSubmit(true)}>SUBMIT
        </button>
        </>
    )
}
export default Rating;