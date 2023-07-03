import React from 'react'

const Nav = () => {
  return (
    <div className=' h-10 flex justify-around align-middle pt-5'>
        <h1 className=' font-extrabold text-xl text-white'>SELLZEE</h1>
            <ul className=' flex flex-row gap-5 text-sm font-semibold text-white'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Testimonial</li>
                <li>Pricing</li>
            </ul>
            <button className=' w-32 h-8 bg-[orange] rounded-md font-medium text-xs text-[white]'>Get Started</button>
    </div>
  )
}

export default Nav