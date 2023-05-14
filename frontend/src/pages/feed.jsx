// import { Link } from "react-router-dom";
import Shared from './../components/shared';
import Post from './../components/post';
import { Posts } from '../components/constant';

const Feed = () => {
    return (
        <div>
            <Shared />
            {Posts.map(post => {
                return (
                    <Post key={post.id} post={post} />

                )
            })}
        </div>

    );
}

export default Feed;