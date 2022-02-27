import './rightbar.css';
import {Users} from "../../data";
import Online from "../online/online";

export default function Rightbar({profile}){
    const HomeRightbar=()=>{
        return(
            <>
            <div className="bdayContainer">
                    <img className='bdayImg' src="icons/gift.png" alt="" />
                    <span className="bdayMsg">
                        <b>A </b> and <b>2 other friends</b> have birthday today
                    </span>
                </div>
                <img className="rbAd" src="icons/ad.png" alt="" />
                <h4 className='rbHeading'>Online Friends</h4>
                <ul className="rbFriendList">
                    {Users.map((u)=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        );
    };
    const ProfileRightbar= ()=>{
        return (
            <>
            <h4 className='rbHeading'> User Information</h4>
            <div className="rbInfo">
                <div className="rbInfoItem">
                    <span className="rbInfoKey">City:</span>
                    <span className="rbInfoValue">New York</span>
                </div>
                <div className="rbInfoItem">
                    <span className="rbInfoKey">From:</span>
                    <span className="rbInfoValue">Madrid</span>
                </div>
                <div className="rbInfoItem">
                    <span className="rbInfoKey">Relationship:</span>
                    <span className="rbInfoValue">Single</span>
                </div>
            </div>
            <h4 className='rbHeading'>User friends</h4>
            <div className="rbFollowings">
                <div className="rbFollowing">
                    <img src="icons/person/1.jpeg" alt="" className="rbFollowingImg" /> 
                    <span className="rbFollowingName">Naneeta</span>
                </div>
                <div className="rbFollowing">
                    <img src="icons/person/2.jpeg" alt="" className="rbFollowingImg" /> 
                    <span className="rbFollowingName">Naneeta</span>
                </div>
                <div className="rbFollowing">
                    <img src="icons/person/3.jpeg" alt="" className="rbFollowingImg" /> 
                    <span className="rbFollowingName">Naneeta</span>
                </div>
                <div className="rbFollowing">
                    <img src="icons/person/4.jpeg" alt="" className="rbFollowingImg" /> 
                    <span className="rbFollowingName">Naneeta</span>
                </div>
                <div className="rbFollowing">
                    <img src="icons/person/5.jpeg" alt="" className="rbFollowingImg" /> 
                    <span className="rbFollowingName">Naneeta</span>
                </div>
            </div>
            </>
        )
    }
    return(
        <div className='rightbar'>
            <div className="rbWrapper">
                {profile? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}