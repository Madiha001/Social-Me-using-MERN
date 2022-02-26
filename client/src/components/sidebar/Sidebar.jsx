import './sidebar.css';
import {MdRssFeed, MdMessage,MdOutlineSlowMotionVideo, MdGroups, MdBookmarks} from 'react-icons/md';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {FaGraduationCap} from 'react-icons/fa';
import {MdWorkOutline, MdCalendarToday} from 'react-icons/md';



export default function Sidebar(){
    return(
        <div className='sidebar'>
            <div className="sbwrapper">
                <ul className='sbList'>
                    <li className="sbListItem">
                        <MdRssFeed className='sbIcon'/>
                        <span className="sbListItemMsg">Feed</span>
                    </li>
                    <li className="sbListItem">
                        <MdMessage className='sbIcon'/>
                        <span className="sbListItemMsg">Chats</span>
                    </li>
                    <li className="sbListItem">
                        <MdOutlineSlowMotionVideo className='sbIcon'/>
                        <span className="sbListItemMsg">Videos</span>
                    </li>
                    <li className="sbListItem">
                        <MdGroups className='sbIcon'/>
                        <span className="sbListItemMsg">Groups</span>
                    </li>
                    <li className="sbListItem">
                        <MdBookmarks className='sbIcon'/>
                        <span className="sbListItemMsg">Bookmarks</span>
                    </li>
                    <li className="sbListItem">
                        <AiOutlineQuestionCircle className='sbIcon'/>
                        <span className="sbListItemMsg">Questions</span>
                    </li>
                    <li className="sbListItem">
                        <MdWorkOutline className='sbIcon'/>
                        <span className="sbListItemMsg">Jobs</span>
                    </li>
                    <li className="sbListItem">
                        <MdCalendarToday className='sbIcon'/>
                        <span className="sbListItemMsg">events</span>
                    </li>
                    <li className="sbListItem">
                        <FaGraduationCap className='sbIcon'/>
                        <span className="sbListItemMsg">courses</span>
                    </li>
                </ul>
                <button className='sbButton'>Show More</button>
                <hr className='sidebarHr'/>
                <ul className="sbFriendList">
                    <li className="sbFriend">
                        <img className="sbFriendImg" src="/icons/person/2.jpeg" alt="" />
                        <span className="sbFriendName">Naneeta</span>
                    </li>
                    <li className="sbFriend">
                        <img className="sbFriendImg" src="/icons/person/2.jpeg" alt="" />
                        <span className="sbFriendName">Naneeta</span>
                    </li>
                    <li className="sbFriend">
                        <img className="sbFriendImg" src="/icons/person/2.jpeg" alt="" />
                        <span className="sbFriendName">Naneeta</span>
                    </li>
                    <li className="sbFriend">
                        <img className="sbFriendImg" src="/icons/person/2.jpeg" alt="" />
                        <span className="sbFriendName">Naneeta</span>
                    </li>
                    <li className="sbFriend">
                        <img className="sbFriendImg" src="/icons/person/2.jpeg" alt="" />
                        <span className="sbFriendName">Naneeta</span>
                    </li>
                    <li className="sbFriend">
                        <img className="sbFriendImg" src="/icons/person/2.jpeg" alt="" />
                        <span className="sbFriendName">Naneeta</span>
                    </li> 
                    <li className="sbFriend">
                        <img className="sbFriendImg" src="/icons/person/2.jpeg" alt="" />
                        <span className="sbFriendName">Naneeta</span>
                    </li> 
                    <li className="sbFriend">
                        <img className="sbFriendImg" src="/icons/person/2.jpeg" alt="" />
                        <span className="sbFriendName">Naneeta</span>
                    </li> 
                    <li className="sbFriend">
                        <img className="sbFriendImg" src="/icons/person/2.jpeg" alt="" />
                        <span className="sbFriendName">Naneeta</span>
                    </li>
                </ul>
                    
            </div>
        </div>
    )
}