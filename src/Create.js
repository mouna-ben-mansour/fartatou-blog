import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState('Hello');
    const [body, setBody] = useState('Hello');
    const [author, setAuthor] = useState('sarra');
    const handleSubmit = (e) => {
       e.preventDefault();
       const blog = { title, body, author };
       console.log(blog);
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label htmlFor="">Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label htmlFor="">Blog author:</label>
                <select name="" id="" 
                    value={ author }
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="mouna">Mouna</option>
                    <option value="sarra">Sarra</option>
                </select>
                <button>Add Blog</button>
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
     );
}
 
export default Create;