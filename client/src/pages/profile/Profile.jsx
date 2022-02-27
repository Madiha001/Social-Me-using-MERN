import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightBar/Rightbar';
import "./profile.css";

export default function Profile(){
    return (
        <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className='profileRight'>
            <div className="profileRt">
                <div className="profileCover">
                <img className='profileCoverImg' src="icons/post/3.jpeg" alt="" />
                <img className='profileUserImg' src="icons/post/7.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className='profileInfoName'>Naneeta</h4>
                    <span className="profileInfoDesc">Hello My Friends!</span>
                </div>
            </div>
            <div className="profileRb">
        <Feed/>
        <Rightbar profile/>
        </div>
        </div>
        </div>
    </>
    );
}