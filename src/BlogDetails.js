import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogsJson , isPending , error } = useFetch(`http://localhost:8002/blogs/${id}`);
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { blogsJson && 
                <article>
                    <h2>Blog Details - { blogsJson.title }</h2>
                    <p>Written by { blogsJson.author }</p>
                    <p>{ blogsJson.body }</p>
                </article>
            }

        </div>
     );
}
 
export default BlogDetails;