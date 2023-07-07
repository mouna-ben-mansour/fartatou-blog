import { useState } from "react";
const Create = () => {
    const [title, setTitle] = useState('Hello');
    const [body, setBody] = useState('Hello');
    const [author, setAuthor] = useState('sarra');
    const [isPending, setIsPending] = useState(false);
    const handleSubmit = (e) => {
       e.preventDefault();
       const blog = { title, body, author };
       setIsPending(true);
       
       fetch('http://localhost:8002/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
       }).then(()=> {
        console.log('blod added');
        setIsPending(false);
       })
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
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
     );
}
 
export default Create;