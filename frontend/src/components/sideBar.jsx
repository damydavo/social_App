import { MdRssFeed, MdChat, MdPlayCircle, MdGroups, MdBookmark, MdWorkOutline, MdEvent, MdSchool, MdHelpOutline } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { Users } from './constant';
import CloseFriends from './closeFriends';

const SideBar = () => {
    return ( 
        <>
            <div className="hidden md:flex w-80 pt-4 h-screen  px-4 bg-transparent shadow-md overflow-y-scroll overflow-x-hidden sticky top-[50px]">
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
                    <hr className="my-6 w-[240px] ml-1 border-b-2 " />

                    {Users.map(user => {
                        return (
                            <CloseFriends key={user.id} user={user} />
                        )
                    })}

        </ul>

    </div>

    </>
     );
}
 
export default SideBar;