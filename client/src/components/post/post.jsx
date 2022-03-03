import './post.css';
import { FiMoreVertical } from 'react-icons/fi';
import { useState } from "react";
import {format} from "timeago.js"
function Post({post}) {

    const [like, setLike] = useState(post.likes.length);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({})

    useEffect(()=>{
        const fetchUser = async ()=>{
            const res = await axios.get(`users/${post.userId}`);
            setUser( res.data)
        };
        fetchUser();
    },[post.userId]);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };

    return (
        <div className='post'>
            <div className="postCover">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfilePic' src={user.profilePicture || PF +"person/noAvatar.png"} alt="" />
                        <span className="postUsername">
                            {user.username}
                        </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <FiMoreVertical />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postContent">{post?.desc}</span>

                    <img className='postImg' src={PF+post.img} alt="" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='postLikeIcon' src={`${PF}like.png`} onClick={likeHandler} alt="" />
                        <img className='postLikeIcon' src={`${PF}heart.png`} onClick={likeHandler} alt="" />
                        <span className="postLikeCount">{like} people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentCount">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;