const CloseFriends = ({ user }) => {
    return (
        <div className='flex space-x-2 items-center'>
            <img className='flex w-8 h-8 rounded-[50%] items-center object-cover' src={user.profilePics} alt="person_1" />
            <h2>{user.userName}</h2>
        </div>
    );
}

export default CloseFriends;