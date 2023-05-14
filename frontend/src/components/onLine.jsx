import { Link } from 'react-router-dom';

const Online = ({ user }) => {
    return (
        <li>
            <Link to='/feed' className='relative flex gap-3 items-center'>
                <img className='flex w-10 h-10 rounded-[50%] items-center object-cover' src={user.profilePics} alt="person_6" />
                <span className="absolute flex rounded-[50%] bg-green-300 w-[14px] h-[14px] text-sm justify-center top-0 shadow-md left-7"></span>
                <h2>{user.userName}</h2>
            </Link>
        </li>
    );
}

export default Online;