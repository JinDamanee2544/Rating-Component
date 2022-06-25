import { useState } from 'react'
import Rating from '../components/rating-panel'
import ThankYou from '../components/thank-you'
export default function App() {
  const [rating,setRating] = useState(0)
  const [isSubmit,setIsSubmit] = useState(false)
  return (
    <main className='bg-very-dark-blue h-screen overflow-hidden flex justify-center items-center'> 
        <section className="bg-my-gray rounded-3xl w-[350px] p-5">
            {!isSubmit&& <Rating props={{rating,setRating,isSubmit,setIsSubmit}}/>}
            {isSubmit&& <ThankYou rating={rating}/>}
        </section>
    </main>
  )
}

