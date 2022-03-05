import './share.css';
import {MdPermMedia, MdRoom, MdLabel, MdEmojiEmotions} from 'react-icons/md';
import { useContext, useState,useRef } from 'react';
import {AuthContext} from "../../context/AuthContext";
import axios from 'axios';

function Share() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file,setFile] = useState(null);
    const submitHandler = async (e)=>{
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        try{
            await axios.post("/posts",newPost);
        }
        catch(err){}
    }
    return (
        <div className='share'>
           <div className='shareCover'>
                <div className='shareTop'>
                    <img className='shareProfilePic' src= {user.profilePic ? PF + user.profilePic : PF+"/noAvatar.png"} alt="" />
                    <input placeholder={"What's on your mind?"+user.username+"?"} className='shareInput' ref={desc}/>    
                </div>
                <hr className="shareHr"/>
                <form className='shareBottom' onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <label htmlFor="file"className="shareOption">
                            <MdPermMedia className="shareMediaIcon" id="iconMedia"/>
                            <span className='shareOptionContent'>Photo or Video</span>
                            <input type="file" id="file" accept='.png,.jpeg,jpg' onChange={(e)=>setFile(e.target.files[0])} 
                            style={
                                {display:'none',}
                            }/>
                        </label>
                        <div className="shareOption">
                            <MdLabel className="shareMediaIcon" id="iconLabel"/>
                            <span className='shareOptionContent'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <MdRoom className="shareMediaIcon" id="iconRoom"/>
                            <span className='shareOptionContent'>Location</span>
                        </div>
                        <div className="shareOption">
                            <MdEmojiEmotions className="shareMediaIcon" id="iconEmoji"/>
                            <span className='shareOptionContent'>Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton' type='submit'>Share</button>
                </form>
           </div>
        </div>
    );
}

export default Share;