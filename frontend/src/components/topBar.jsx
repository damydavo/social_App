import { useState } from 'react';
import { FaUser, FaSearch, FaBell, FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profile  from '../assets/person/1.jpeg'
import close from '../assets/close.svg'
import menu from '../assets/menu.svg'


const TopBar = () => {
     const [toggle, setToggle] = useState(false)

    return (
     <>
        <div className="bg-blue-500 md:p-2 w-full p-4">
        <div className='container flex mx-auto justify-between'>
         <div className='logo'>
        <Link to="/" className=" flex font-bold hover:text-veryLightGray items-center text-2xl text-white">Damydavo</Link>               
         </div>

           <div className='hidden md:flex justify-start relative'>
           <input type="text" placeholder="Search for friend, post or video" className="w-[500px] bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder:italic placeholder:text-slate-400 " />
           <div className='absolute flex left-3 top-2'>
            <FaSearch className='text-veryDarkBlue' />
           </div>
           </div>
              <div className='hidden md:flex text-white space-x-4 items-center font-semibold'>
                   <h2>Homepage</h2>
                   <h2>Timeline</h2>
              </div>

              <div className='flex space-x-4 md:space-x-6 items-center text-white text-lg  z-10 mx-12'>
                   <div className='relative flex'>
                   <FaUser />
                   <span className="absolute flex rounded-[50%] bg-red-400 w-[18px] h-[18px] text-sm justify-center items-center top-[-11px] right-[-11px]" >2</span>
                   </div>
                   
                   <div className='relative flex'>
                   <FaComment />
                   <span className="absolute flex rounded-[50%] bg-red-400 w-[18px] h-[18px] text-sm justify-center items-center top-[-11px] right-[-11px]" >6</span>
                  </div>

                  <div className='relative flex'>
                   <FaBell />
                   <span className="absolute flex rounded-[50%] bg-red-400 w-[18px] h-[18px] text-sm justify-center items-center top-[-11px] right-[-11px]" >8</span>
                   </div>

                  <div className='profile_pics'>
                  <img className="h-[32px] w-[32px] rounded-[50%] object-cover md:ml-12" src={profile} alt="profile_img" />
                  </div>
              </div>
        </div>

        
    {/* hamburger menu */}
    <div className='sm:hidden flex flex-1 items-center justify-end absolute right-4 top-4'>
          <img onClick={() => setToggle((prev) => !prev)} className="w-[30px] h-[30px] object-contain" src={ toggle ? close : menu } alt="hamburger-menu" />

          <div className= {`${toggle ? 'block' : 'hidden'} p-6 bg-veryLightGray shadow-lg absolute top-14 min-w-[14] h-screen -right-full z-10 sidebar`}>
          <div className='flex justify-end relative'>
           <input type="text" placeholder="Search for friend, post or video" className="w-[250px] bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder:italic placeholder:text-slate-400 py-2 " />
           <div className='absolute flex left-3 top-3'>
            <FaSearch className='text-veryDarkBlue' />
           </div>
           </div>

           <div className='block space-y-4 items-center font-semibold mt-6 text-veryDarkBlue tracking-tight border-b py-2'>
                   <h2>Homepage</h2>
                   <h2>Timeline</h2>

              </div>
          </div>
     </div>
        </div>

 
</> 
     );
}
 
export default TopBar;