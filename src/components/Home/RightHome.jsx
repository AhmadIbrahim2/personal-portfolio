import React from 'react'
import programmer from '../../assets/images/photo.png'
const RightHome = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
        <img className="w-[700px] h-[820px] z-10" src={programmer} alt="ahmad" />
        <div className="absolute bottom-0 w-[700px] h-[670px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  )
}

export default RightHome