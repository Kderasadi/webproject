import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8' >
             <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
                <img  className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt='/'/>
                <h2  className='text-2xl font-bold text-center py-8'>Single Burger</h2>
                <p className='text-center text-4xl font-bold'>$14</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Yummy filling, cheese</p>
                    <p className='py-2 border-b mx-8 '>Customise Accordigly</p>
                    <p className='py-2 border-b mx-8 '>Save upto 20%</p>

                </div>
                <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3  '>
                    Buy Now
                </button>

                


            </div>

            <div className=' bg-gray-100 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img  className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt='/'/>
                <h2  className='text-2xl font-bold text-center py-8'>Double Cheese Burger</h2>
                <p className='text-center text-4xl font-bold'>$19</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Enjoy Double Cheese</p>
                    <p className='py-2 border-b mx-8 '>Always want extra</p>
                    <p className='py-2 border-b mx-8 '>Love in every Bite</p>

                </div>
                <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-bold my-6 mx-auto py-3  '>
                    Buy Now
                </button>

                


            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src={triple} alt='/'/>
                <h2  className='text-2xl font-bold text-center py-8'>Maharaja Burger</h2>
                <p className='text-center text-4xl font-bold'>$30</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Filled with everything extra</p>
                    <p className='py-2 border-b mx-8 '>Add whatever you wish to</p>
                    <p className='py-2 border-b mx-8 '>Save upto 50%</p>

                </div>
                <button className='text-black bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3  '>
                    Buy now
                </button>

                


            </div>
        </div>

    </div>
  )
}

export default Cards