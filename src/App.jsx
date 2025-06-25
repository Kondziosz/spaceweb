import { useState } from 'react'
import './App.css'
import Navbar from './Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-screen max-w-none h-screen bg-home touch-none flex flex-col '>
        <Navbar />
        <div className='gap-300 flex flex-1 lg:justify-center'>
        <div className='p-300 lg:p-0 lg:py-1600 gap-100 lg:max-w-[1110px] lg:gap-600 flex flex-1 flex-col lg:flex-row justify-start items-center'>
        <div className='flex-1 flex-col justify-between items-center gap-600 '>
        <div className='max-w-[540px] flex flex-col items-center gap-300'>
        <p className='tp-6 text-[#D0D6F9] mt-8 '>SO, YOU WANT TO TRAVEL TO</p>
        <p className='tp-1'>SPACE</p>
        <p className='tp-9 mx-6 text-center text-[#D0D6F9] '> Let’s face it; if you want to go to space, you might as well genuinely go to
  outer space and not hover kind of on the edge of it. Well sit back, and relax
  because we’ll give you a truly out of this world experience!</p>
        </div>
        </div>
        <div className='flex-1 gap-600 max-w-[540px] flex justify-center items-center'>
        <div className="w-[144px] lg:w-[272px] h-[144px] lg:h-[272px] bg-white rounded-full flex items-center justify-center">
        <span className=' text-black tp-4 !tracking-[0px] !leading-[1]'>EXPLORE</span>
        </div>
        </div>

         </div>
        </div>
        </div>

    </>
  )
}

export default App
