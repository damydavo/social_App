import { useState } from "react";
import { ade, likes, heart } from "../assets";
import { MdMoreVert } from 'react-icons/md';
import { Users } from "./constant";

const Post = ({ post }) => {
    const userNew = Users.filter((user) => user.id === post.userId)[0].userName
    const [like, setLike] = useState(post.like)
    const [isliked, setLiked] = useState(false)

    const handleLike = () => {
        setLike(isliked ? like - 1 : like + 1)
        setLiked(!isliked)
    }
    return (
        <div className="container md:w-full py-6 px-2 bg-transparent w-[360px] mx-3 md:mx-0 rounded-lg shadow-[0px_0px_16px_-8px_rgba(0,0,0,0.68)] mt-6">
            <div className="flex justify-between space-x-4 items-center">
                <div className="flex items-center">
                    <img className="flex w-8 h-8 rounded-[50%] items-center object-cover" src={ade} alt="ade_picture" />
                    <h2 className="font-bold tracking-tight ml-4">{userNew}</h2>
                    <p className="flex items-center tracking-tight font-normal text-gray-500 ml-3">{post.date}</p>
                </div>

                <div className="cursor-pointer">
                    <MdMoreVert size="24" />
                </div>

            </div>

            <h2 className="block font-normal text-md pl-2 py-4">{post.desc}</h2>
            <img className="w-full max-h-[500px] object-contain" src={post.photo} alt="place" />

            <div className="flex justify-between items-center my-4 font-normal ">
                <div className="flex space-x-2">
                    <img onClick={() => handleLike()} className="w-[24px] h-[24px]" src={likes} alt="like" />
                    <img className="w-[24px] h-[24px]" src={heart} alt="like" /><span>{like} people like it</span>
                </div>

                <div className="font-[15px]">{post.comment} comments</div>
            </div>

        </div>
    );
}

export default Post;