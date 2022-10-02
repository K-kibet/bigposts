import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="" alt="" />
                <div className="user">
                    <img src="" alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>
                            Posted 2 days ago
                        </p>
                    </div>

                    <div className="edit">
                        <Link className='link' to={`/write?edit=2`}>
                          <img src={Edit} alt="" />
                        </Link>

                        <img src={Delete} alt="" />    
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt, quos, expedita veniam nostrum ipsa ducimus perferendis veritatis molestiae dignissimos ab, nobis illo pariatur aperiam eum! Commodi quaerat perferendis architecto?</p>
            </div>
            <Menu />
        </div>
    );
}

export default Single;
