import React from 'react'

const Newsletter = () => {
  return (
    <div className=" px-4 py-16 w-full text-white  bg-[#99EEE8]">
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>

    <div className='lg:col-span-2 my-4'>
   <h1 className=' md:text-4xl sm:text-3xl text-2xl  py-2  font-bold'>Have any suggestions for us to up our “Burger Game”?</h1> 
    <p>  Contact us directly!</p>
    </div>

<div>
    <div className='my-4'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
        <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email'/>
        <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-bold my-6 ml-4 py-3  '>
            Notify Me
        </button>
       
        </div>
        <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span> </p>
    </div>
</div>

</div>
    </div>
  )
}

export default Newsletter