import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightBar/Rightbar';
import "./profile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile(){
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
          const res = await axios.get(`/users?username=${username}`);
          setUser(res.data);
        };
        fetchUser();
      }, [username]);
    

    return (
        <>
        <Topbar/>
        <div className="profile">
        <Sidebar />
        
        <div className='profileRight'>
            <div className="profileRt">
                <div className="profileCover">
                    <img className='profileCoverImg' src={user.coverPic || PF+"noAvatar.png"}  alt="" />
                    <img className='profileUserImg' src={user.profilePic || PF+"noAvatar.png"} alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>{user.username}</h4>
                    <span className="profileInfoDesc">{user.desc}</span>
                </div>
            </div>
            <div className="profileRb">
        <Feed username={username}/>
        <Rightbar user={user}/>
        </div>
        </div>
        </div>
    </>
    );
}