import React from 'react'
import programmer from '../../assets/images/photo.png'
const RightHome = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
        <img className="w-[350px] h-[410px] lgl:w-[700px] lgl:h-[820px] z-10" src={programmer} alt="ahmad" />
        <div className="absolute bottom-0 w-[350px] h-[335px] lgl:w-[700px] lgl:h-[670px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  )
}

export default RightHome