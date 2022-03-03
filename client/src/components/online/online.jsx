import './online.css';

function Online({user}){

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className='rbFriend'>
            <div className="rbProfileImgContainer">
                <img src={PF+user.profilePicture} alt="" className="rbProfileImg" />
                <span className="rbOnline"></span>
            </div>
            <span className="rbUserName">{user.username}</span>
        </li>
    )
}
export default Online;