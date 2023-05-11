import { MdRssFeed, MdChat, MdPlayCircle, MdGroups, MdBookmark, MdWorkOutline, MdEvent, MdSchool, MdHelpOutline } from 'react-icons/md'
import person1 from '../assets/person/1.jpeg'
import person2 from '../assets/person/2.jpeg'
import person3 from '../assets/person/3.jpeg'
import person4 from '../assets/person/4.jpeg'
import person5 from '../assets/person/5.jpeg'
import person6 from '../assets/person/6.jpeg'
import person7 from '../assets/person/7.jpeg'
import { Link } from 'react-router-dom';

const SideBar = () => {
    return ( 
        <>
    <div className="hidden md:flex w-[280px] pt-4 h-screen  px-4 bg-transparent shadow-md overflow-y-scroll overflow-x-hidden">
        <ul className='space-y-4 font-semibold tracking-tight block'>
        <li>
            <Link to = '/feed' className='flex gap-3 items-center'>
                <MdRssFeed size='26'/>Feed
            </Link>
            </li>
        <li>
            <Link to = '/feed' className='flex gap-3 items-center'>
                <MdChat size='26'/>Chats
            </Link>
            </li>
        <li>
            <Link to = '/feed' className='flex gap-3 items-center'>
                <MdPlayCircle size='28'/>Videos
            </Link>
            </li>
        <li>
            <Link to = '/feed' className='flex gap-3 items-center'>
                <MdGroups size='28'/>Groups
            </Link>
            </li>
        <li>
            <Link to = '/feed' className='flex gap-3 items-center'>
                <MdBookmark size='28'/>Bookmarks
            </Link>
            </li>
        <li>
            <Link to = '/feed' className='flex gap-3 items-center'>
                <MdHelpOutline size='28'/>Questions
            </Link>
            </li>
        <li>
            <Link to = '/feed' className='flex gap-3 items-center'>
                <MdWorkOutline size='28'/>Jobs
            </Link>
            </li>
        <li>
            <Link to = '/feed' className='flex gap-3 items-center'>
                <MdEvent size='28'/>Events
            </Link>
            </li>
        <li>
            <Link to = '/feed' className='flex gap-3 items-center'>
                <MdSchool size='28'/>Courses
            </Link>
            </li>
        
        <button type="button" className="flex bg-gray-300 justify-center px-4 py-2 font-semibold rounded-md border w-[150px] items-center">Show more</button>
        <div className='w-[238px] h-[1.8px] bg-gray-400'></div>
           <div className='flex space-x-2 items-center'>
            <img className='flex w-8 h-8 rounded-[50%] items-center object-cover' src={ person1 } alt="person_1" />
            <h2>Atoki David</h2>
           </div>
           <div className='flex space-x-2 items-center'>
            <img className='flex w-8 h-8 rounded-[50%] items-center object-cover' src={ person2 } alt="person_2" />
            <h2>Akinyele Yemi</h2>
           </div>
           <div className='flex space-x-2 items-center'>
            <img className='flex w-8 h-8 rounded-[50%] items-center object-cover' src={ person3 } alt="person_3" />
            <h2>Adewale Joseph</h2>
           </div>
           <div className='flex space-x-2 items-center'>
            <img className='flex w-8 h-8 rounded-[50%] items-center object-cover' src={ person4 } alt="person_4" />
            <h2>Adebo Matthew</h2>
           </div>
           <div className='flex space-x-2 items-center'>
            <img className='flex w-8 h-8 rounded-[50%] items-center object-cover' src={ person5 } alt="person_5" />
            <h2>Adeleye Biola</h2>
           </div>
           <div className='flex space-x-2 items-center'>
            <img className='flex w-8 h-8 rounded-[50%] items-center object-cover' src={ person6 } alt="person_6" />
            <h2>Owolabi Peter</h2>
           </div>
           <div className='flex space-x-2 items-center'>
            <img className='flex w-8 h-8 rounded-[50%] items-center object-cover' src={ person7 } alt="person_7" />
            <h2>Ishola Dada</h2>
           </div>
        </ul>

    </div>

    </>
     );
}
 
export default SideBar;