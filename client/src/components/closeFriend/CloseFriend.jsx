import './closeFriend.css';

function CloseFriend({user}){
    return(
        <div>
            <li className='sbFriend'>
                <img src={user.profilePicture} alt="" className="sbFriendImg" />
                <span className="sbFriendName">{user.username}</span>
            </li>
        </div>
    )
}
export default CloseFriend;