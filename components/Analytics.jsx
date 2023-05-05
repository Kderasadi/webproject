import React from 'react'
import Laptop from '../assets/burgerr.png'
import Background from '../assets/background.png'

const Analytics = () => {
  return (
    
    <div className=' w-full bg-white py-16 px-4 '>
       
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
       
       
        <div className='pl-0 justify-center flex flex-col '>
            <p className='text-[#E55A8D] font-bold text-[30px]'>WELCOME TO OUR BURGER SHOP</p>
            <h1 className='md:text-5xl sm:text-3xl text-4xl font-bold py-2'>Make Your Own Burger</h1>
            <p>
            Welcome to India’s very first customisable burger store. We allow you to curate your own burgers and meals, making your experience, your own.
            </p>
            <button className='text-white bg-[#E55A8D] w-[200px] rounded-md font-bold my-6 py-3 '>
              <a href="App2.js" >Get Started</a></button>
        </div>
      <div>
        <img className='w-[500px] h-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient '/>
        </div>
        </div>
    </div>
  )
}

export default Analytics