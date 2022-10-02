import React from 'react';

const Menu = () => {
    return (
        <div className='menu'>
            <h1>Other Posts You May Like</h1>
            {posts.map((post) => {
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            })}
        </div>
    );
}

export default Menu;
