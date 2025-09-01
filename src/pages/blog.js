import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const blog = () => {
    const [posts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch('/api/blog')
            .then(response => response.json())
            .then(data => setBlogPosts(data));
    }, []);

    return (
        <div className="container mt-5">
            <h2 style={{ fontFamily: 'Newspaper, serif, Times New Roman, Georgia, Garamond' }}>the gazette</h2>
            <div className="mt-5">
                {posts.map((post, index) => (
                    <div key={index} className="mt-3">
                        <Link className='introLinkBlog hover-underline-animation' href={"/blog/" + post.endpoint}>{post.title}</Link> — <span className="introLinkBlogDate">{post.date}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default blog