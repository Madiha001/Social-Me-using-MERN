import './rightbar.css';

export default function Rightbar(){
    return(
        <div className='rightbar'>
            <div className="rbWrapper">
                <div className="bdayContainer">
                    <img className='bdayImg' src="icons/gift.png" alt="" />
                    <span className="bdayMsg">
                        <b>A </b> and <b>2other friends</b> have birthday today
                    </span>
                </div>
                <img className="rbAd" src="icons/ad.png" alt="" />
                <h4 className='rbHeading'>Online Friends</h4>
                <ul className="rbFriendList">
                    <li className="rbFriend">
                        <div className="rbProfileImgContainer">
                            <img src="icons/person/3.jpeg" alt="" className="rbProfileImg" />
                        <span className="rbOnline"></span>
                        </div>
                        <span className="rbUser">Madiha</span>

                    </li>
                </ul>
            </div>
        </div>
    )
}