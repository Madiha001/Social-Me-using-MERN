import './friend.css';

function Friend({user}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className='sbFriend'>
            <img src={PF+user.profilePicture} alt="" className="sbFriendImg" />
            <span className="sbFriendName">{user.username}</span>
        </li>
    );
}

export default Friend;