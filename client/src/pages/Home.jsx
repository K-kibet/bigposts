import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className="posts">
                {
                    postMessage.map((post) => {
                        <div className="post" key={post.id}>
                            <div className="img">
                                <img src={post.img} alt="" />
                            </div>
                            <div className="content">
                                <Link className='link' to={`./post/${post.id}`}>
                                  <h1>{post.title}</h1>
                                  <p>{post.desc}</p>
                                  
                                </Link>
                                <button>Read More</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Home;
