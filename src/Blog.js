import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Blog = ({blogs , title , handleDelete}) => {
// const blogs = props.blogs;
// const title = props.title;

    return (
        <div className='blog'>
            <h1>{ title }</h1>
           { blogs.map((blog) => (
                    <div className='blog-preview' key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}><h2>{ blog.title }</h2></Link>
                        <p>{ blog.body }</p>
                        <p> written by{ blog.author }</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                    </div>
                ))}
        </div>
        
     );
}
 
export default Blog;