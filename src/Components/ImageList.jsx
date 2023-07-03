import React from 'react'
import fedex from '../assets/image 25.png'
import google from '../assets/google-1-removebg-preview 1.png'
import ola from '../assets/image 27.png'
import micro from '../assets/new-Microsoft-logo-removebg-preview 1.png'
import amazon from '../assets/539f3ffbecad044276726c01-removebg-preview 1.png'
import fedx from '../assets/90a2c3b80d4b7a7599788bfeb9b848ce-removebg-preview 1.png'
import walmart from '../assets/kisspng-logo-brand-walmart-desktop-wallpaper-image-walmart-to-offer-low-cost-checking-accounts-5b63eaa32fa612 1.png'





const ImageList = () => {
  return (
    <div className=' w-full h-24 flex flex-col bg-slate-400'>
        <div className=''>
            <img src={fedex} alt="" />
            <img src={google} alt="" />
            <img src={ola} alt="" />
            <img src={micro} alt=""/>
        </div>
        <div className=''>
            <img src={amazon} alt="" />
            <img src={fedx} alt="" />
            <img src={walmart} alt="" />
        </div>
    </div>
  )
}

export default ImageList