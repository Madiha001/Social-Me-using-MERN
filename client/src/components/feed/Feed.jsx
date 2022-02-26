import './feed.css';
import Post from '../post/post';
import Share from '../share/share';
import {Posts} from '../../data';

export default function Feed(){
    return(
        <div className='feed'>
            <div className="fdWrapper">
                <Share />
                {Posts.map((p) => (
                <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}