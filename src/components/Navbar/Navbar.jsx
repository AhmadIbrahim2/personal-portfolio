import React from 'react';
import logo from '../../assets/images/ahmad.png';
import { navLinksdata } from '../../constants';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='w-full h-28 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
        <div>
            <img className='w-50 h-20' src={logo} alt='logo'/>
        </div>
        <div>
          <ul className='flex items-center gap-10'>
            {navLinksdata.map((navlink)=>(
              <li className='font-normal text-xl text-gray-400 traking-wide cursor-pointer
               hover:text-designColor duration-300' 
              key={navlink._id}>
                <Link
                activeClass="active"
                to={navlink.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                >
                {navlink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Navbar