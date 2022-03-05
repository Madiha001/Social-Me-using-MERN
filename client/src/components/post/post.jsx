import './post.css';
import { FiMoreVertical } from 'react-icons/fi';
import { useState, useEffect, useContext } from "react";
import {format} from "timeago.js";
import axios from "axios";
import {Link } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

export default function Post({post}) {

    const [like, setLike] = useState(post.likes.length);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const {user:currentUser}=useContext(AuthContext);

    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes]);

    useEffect(()=>{
        const fetchUser = async ()=>{
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser( res.data);
        };
        fetchUser();
    },[post.userId]);

    const likeHandler = () => {
        try{
            axios.put("/posts/"+post._id+"/like",{userId:currentUser._id});
        }
        catch(err){
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };
    }
    return (
        <div className='post'>
            <div className="postCover">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className='postProfilePic' src={user.profilePic ? PF+user.profilePic : PF +"noAvatar.png"} alt="" />
                        </Link>  
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
