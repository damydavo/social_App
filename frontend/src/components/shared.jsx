import { ade } from "../assets";
import { MdPermMedia, MdLabel, MdRoom, MdEmojiEmotions } from "react-icons/md";
import { Link } from "react-router-dom";

const Shared = () => {
    return (
        <div className="container md:w-full py-6 px-2 bg-transparent w-[360px] mx-3 md:mx-0 rounded-lg shadow-[0px_0px_16px_-8px_rgba(0,0,0,0.68)] mt-12">
            <div className="flex space-x-4 items-center justify-start">
                <img className="flex w-12 h-12 rounded-[50%] items-center object-cover" src={ade} alt="ade_picture" />
                <input id='new' type="text" placeholder="What is in your mind Ade?" className="w-full bg-white border-0 text-sm focus:outline-none" />
            </div>
            <hr className="my-6 md:w-[590px] ml-4 border-b-2 " />

            <ul className="space-y-3 md:space-y-0 md:flex flex-1 md:space-x-4 items-center ml-4 font-medium  text-[18px] md:text-[14px]">
                <li>
                    <Link to='/' className='flex gap-1 items-center'>
                        <MdPermMedia color="tomato" size='28' />Photo or Video
                    </Link>
                </li>

                <li>
                    <Link to='/feed' className='flex gap-1 items-center'>
                        <MdLabel color="blue" size='28' />Tag
                    </Link>
                </li>

                <li>
                    <Link to='/feed' className='flex gap-1 items-center'>
                        <MdRoom color="green" size='28' />Location
                    </Link>
                </li>

                <li>
                    <Link to='/feed' className='flex gap-1 items-center'>
                        <MdEmojiEmotions color="goldenrod" size='28' />Feelings
                    </Link>
                </li>
                <div className="pl-2 m:pl-24">
                    <button type="button" className="flex bg-blue-400 px-2 py-2 my-4 md:mt-1 ml-0 md:ml-12 font-semibold rounded-md border justify-center w-48 md:w-[80px] items-center">Share</button>

                </div>
            </ul>
        </div>
    );
}

export default Shared;