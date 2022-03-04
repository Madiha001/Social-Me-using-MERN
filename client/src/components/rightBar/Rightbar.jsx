import './rightbar.css';
import {Users} from "../../data";
import Online from "../online/online";

export default function Rightbar({user}){
    const HomeRightbar=()=>{
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        return(
            <>
            <div className="bdayContainer">
                    <img className='bdayImg' src="gift.png" alt="" />
                    <span className="bdayMsg">
                        <b>A </b> and <b>2 other friends</b> have birthday today
                    </span>
                </div>
                <img className="rbAd" src="ad.jpg" alt="" />
                <h4 className='rbHeading'>Online Friends</h4>
                <ul className="rbFriendList">
                    {Users.map((u)=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        );
    };
    const ProfileRightbar= ({user})=>{
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        return (
            <>
            <h4 className='rbHeading'> User Information</h4>
            <div className="rbInfo">
                <div className="rbInfoItem">
                    <span className="rbInfoKey">City:</span>
                    <span className="rbInfoValue">{user?.city}</span>
                </div>
                <div className="rbInfoItem">
                    <span className="rbInfoKey">From:</span>
                    <span className="rbInfoValue">{user?.from}</span>
                </div>
                <div className="rbInfoItem">
                    <span className="rbInfoKey">Relationship:</span>
                    <span className="rbInfoValue">
                        {user?.relationship === 1
                            ? "Single"
                            : user?.relationship === 1
                            ? "Married"
                            : "-"}
                    </span>
                </div>
            </div>
            <h4 className='rbHeading'>Friends</h4>
            <div className="rbFollowings">
                <div className="rbFollowing">
                    <img src= {`${PF}person/1.jpeg`} alt="" className="rbFollowingImg" /> 
                    <span className="rbFollowingName">Naneeta</span>
                </div>
                <div className="rbFollowing">
                    <img src={`${PF}person/2.jpeg`} alt="" className="rbFollowingImg" /> 
                    <span className="rbFollowingName">Naneeta</span>
                </div>
                <div className="rbFollowing">
                    <img src={`${PF}person/3.jpeg`} alt="" className="rbFollowingImg" /> 
                    <span className="rbFollowingName">Naneeta</span>
                </div>
                <div className="rbFollowing">
                    <img src={`${PF}person/4.jpeg`} alt="" className="rbFollowingImg" /> 
                    <span className="rbFollowingName">Naneeta</span>
                </div>
                <div className="rbFollowing">
                    <img src={`${PF}person/5.jpeg`} alt="" className="rbFollowingImg" /> 
                    <span className="rbFollowingName">Naneeta</span>
                </div>
                <div className="rbFollowing">
                    <img src={`${PF}person/6.jpeg`} alt="" className="rbFollowingImg" /> 
                    <span className="rbFollowingName">Naneeta</span>
                </div>
            </div>
            </>
        )
    }
    return(
        <div className='rightbar'>
            <div className="rbWrapper">
                {user? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}