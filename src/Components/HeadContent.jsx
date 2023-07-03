import React from 'react'
import tablet from '../assets/tablet.png'

const HeadContent = () => {
  return (
   <div className=' w-screen h-[100%] flex flex-row justify-around align-middle items-center'>
        <div className=' w-[20%] h-[70%] bg-transparent flex flex-col items-start gap-[5px]'>
            <p className=' text-white text-xs font-semibold'>INSPIRATION TECHNOLOGY</p>
            <span className=' font-bold text-2xl text-white'>Runs faster</span>
            <span className=' text-lg text-white'>Costs less and</span>
            <span className=' text-lg text-white pb-5'>never break</span>
            <div className=' w-full h-[1px] bg-white'></div>
            <h6 className=' text-white font-medium text -[12px] text-left pt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, magni?</h6>
            <div className=' w-full flex flex-row gap-6 mt-5'>
                <button className=' w-16 h-6 bg-[orange] font-medium text-[10px] text-[white]'>Get Started</button>
                <button className=' w-16 h-6 bg-transparent border-[#d1cfcf] border-2 font-medium text-[10px] text-[white]'>Free trial</button>
            </div>
            <div>
                <img className=' w-[50%]' src={tablet} alt="" />
            </div>
        </div>
   </div>
  )
}

export default HeadContent