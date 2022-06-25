import Ty from '../images/illustration-thank-you.svg'
import Image from 'next/image';
const ThankYou = ({rating}) => {
    return (
        <div className='text-center'>
            <Image src={Ty} alt={'ty'}/>
            <span className='block bg-my-light-gray rounded-full p-2 mt-5 text-lg text-primary'>You selected {rating} out of 5</span>
            <h1 className='text-3xl text-white font-bold my-4'>Thank you!</h1>
            <p className='text-medium-gray text-sm'>We appreciate you taking the time to give a rating.
            if you ever need more support. don't hesitate to 
            get in touch!
            </p>
        </div>
    )
}

export default ThankYou;