import './feed.css';
import Post from '../post/post';
import Share from '../share/share';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';


export default function Feed({username}){
    const [posts,setPosts] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = username 
            ? await axios.get("/posts/profile/" + username)
            : await axios.get("/posts/timeline/621c90213efab6f4be8099d1");
            setPosts(res.data)
        };
        fetchPosts();
    },[username]);
    return(
        <div className='feed'>
                <div className="fdWrapper">
                <Share />
                {posts.map((p) => (
                <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}