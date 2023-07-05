import { useState } from 'react'

const Blog = () => {
    const [ blogs, setBlogs] = useState(
        [ 
            {title:'My new website',body:'lorem ipsum...',author:'mouna',id:1},
            {title:'Welcome party',body:'lorem ipsum...',author:'ahmed',id:2},
            {title:'Trip Canada',body:'lorem ipsum...',author:'sarra',id:3}
        ]
    );
    return (
        <div className='blog'>
            <h1>Blog list</h1>
           { blogs.map((blog) => (
                    <div className='blog-preview' key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>{ blog.body }</p>
                        <p> written by{ blog.author }</p>
                    </div>
                ))}
        </div>
        
     );
}
 
export default Blog;