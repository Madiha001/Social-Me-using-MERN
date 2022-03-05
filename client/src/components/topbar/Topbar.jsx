import "./topbar.css";
import { AiOutlineSearch, AiOutlineWechat } from 'react-icons/ai';
import {MdNotifications, MdPerson} from 'react-icons/md';
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from '../../context/AuthContext';

export default function Topbar(){
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <div className="tbContainer">
            <div className="tbLeft">
                <Link to="/" style={{textDecoration:"none"}}> 
                    <span className="logo">Sₒ𝚌ᵢₐᄂMₑ</span>
                </Link>
                
            </div>
            <div className="tbCenter">
                <span className="tbsearch">
                    <AiOutlineSearch className="sIcon"/>
                    <input placeholder='Search for friend, post and video' type="text" className="inputSearch" />
                </span>
            </div>
            <div className="tbRight">
                <div className="tbLinks">
                    <span className="tbLink">Homepage</span>
                    <span className="tbLink">TimeLine</span>
                </div>
                <div className="tbIcons">
                    <div className="tbIconItem">
                        <MdPerson/>
                        <span className="tbIconBadge">1</span>
                    </div>
                    <div className="tbIconItem">
                        <AiOutlineWechat/>
                        <span className="tbIconBadge">2</span>
                    </div>
                    <div className="tbIconItem">
                        <MdNotifications/>
                        <span className="tbIconBadge">3</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" className="tbimage"/>
                </Link>
                
            </div>
        </div>
    )
}