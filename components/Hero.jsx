import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-[#00df9a] bg-white '>
        <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
<h2 className='text-[#00df9a] text-[20px] font-bold'>Get the burger you desire</h2>
<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>We understand you.
</h1>
<div className='flex justify-center items-center'>
    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
Your burger business,
</p>
    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
    strings={[' is yours.','not of someone else.']} typeSpeed={120} backSpeed={140} loop/>
</div>
    
    <div>
    <h2 className=' md:text-2xl text-xl mx-auto py-4 font-bold text-gray-500 text-[20px] flex justify-center items-center md:pl-4 pl-2'>
    Ready to embark on this delicious journey?
</h2>
    <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3  '>Get Started</button>
    </div>



    </div>
    </div>
  )
}

export default Hero

