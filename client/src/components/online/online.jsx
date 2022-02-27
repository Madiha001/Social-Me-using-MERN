import './online.css';

function Online({user}){
    return (
        <li className='rbFriend'>
            <div className="rbProfileImgContainer">
                <img src={user.profilePicture} alt="" className="rbProfileImg" />
                <span className="rbOnline"></span>
            </div>
            <span className="rbUserName">{user.username}</span>
        </li>
    )
}
export default Online;