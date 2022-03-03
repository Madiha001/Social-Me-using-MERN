import './feed.css';
import Post from '../post/post';
import Share from '../share/share';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";


export default function Feed(){
    const [posts,setPosts] = useState([]);
    const [text,setText] = useState("");

    useEffect(()=>{
        const fetchPosts = async ()=>{
            const res = await axios.get("posts/timeline/621c87c32e7fe4f90981a256");
            setPosts(  res.data)
        };
        fetchPosts();
    },[]);
    return(
        <div className='feed'>
            <input type="text" onChange={e=>setText(e.target.value)}/>
                <div className="fdWrapper">
                <Share />
                {/*Posts.map((p) => (
                <Post key={p._id} post={p} />
                ))*/}
            </div>
        </div>
    )
}