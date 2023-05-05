import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleNav =()=> {
        setNav(!nav)
    }
  return (
    < div className='bg-[#99EEE8]'>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white fa-sharp fa-solid fa-bars  bg-[#99EEE8]'>
      
        <h1 className='w-full text-[30px] font-bold text-[#E55A8D]  '>Burgerr</h1>
        <ul className='hidden md:flex text-[#E55A8D] font-bold'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        
    </div>
    </div>
  )
}

export default Navbar