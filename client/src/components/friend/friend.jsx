import './friend.css';

function Friend({user}) {
    return (
        <li className='sbFriend'>
            <img src={user.profilePicture} alt="" className="sbFriendImg" />
            <span className="sbFriendName">{user.username}</span>
        </li>
    );
}

export default Friend;