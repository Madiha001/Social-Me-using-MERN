import "./topbar.css";
import { AiOutlineSearch, AiOutlineWechat } from 'react-icons/ai';
import {MdNotifications, MdPerson} from 'react-icons/md';
import {Link} from 'react-router-dom';

export default function Topbar(){
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
                <img src="/icons/person/1.jpeg" className="tbimage"/>
            </div>
        </div>
    )
}