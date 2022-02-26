import './share.css';
import {MdPermMedia, MdRoom, MdLabel, MdEmojiEmotions} from 'react-icons/md';

function Share() {
    return (
        <div className='share'>
           <div className='shareCover'>
                <div className='shareTop'>
                    <img className='shareProfilePic' src="/icons/person/1.jpeg" alt="" />
                    <input placeholder="What's on your mind?" className='shareInput'/>    
                </div>
                <hr className="shareHr"/>
                <div className='shareBottom'>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <MdPermMedia className="shareMediaIcon" id="iconMedia"/>
                            <span className='shareOptionContent'>Photo or Video</span>
                        </div>
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
                    <button className='shareButton'>Share</button>
                </div>
           </div>
        </div>
    );
}

export default Share;