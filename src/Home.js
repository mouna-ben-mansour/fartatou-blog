import { useState, useEffect } from 'react'
import Blog from './Blog';
import useFetch from './useFetch';

const Home = () => {
    let name = 'Mouna';
    const [lastname, setLastname] = useState('BEN MANSOUR');
    const [age, setAge] = useState(27);

    const handleClick = (e) =>{
        name ='test'
        setLastname('AHMED')
        setAge(31)
    }   

    const handleClickAgain = (name,e) =>{
        console.log('hello,'+ name);
        console.log(e.target);
    } 

    const [ blogs, setBlogs] = useState(
        [ 
            {title:'My new website',body:'lorem ipsum...',author:'mouna',id:1},
            {title:'Welcome party',body:'lorem ipsum...',author:'ahmed',id:2},
            {title:'Trip Canada',body:'lorem ipsum...',author:'sarra',id:3},
            {title:'Trip tips and tricks',body:'lorem ipsum...',author:'sarra',id:4}
        ]
    );

  
    const handleDelete = (id) => {
        const newblogs = blogs.filter((blog) => blog.id !== id)
        setBlogs(newblogs);
    }
    const { data: blogsJson , isPending , error } = useFetch('http://localhost:8002/blogs');
    useEffect(() => {
        console.log('use effect run');
        console.log(lastname)
    },[lastname]);
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p >{ name } is { age } years old</p>
            <p >{ lastname }</p>
            <button onClick={() => setLastname('Sarra')}>Change lastname</button>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=> handleClickAgain('Mouna',e)}>Click me again</button> {/* add argument without invoke the function so we use anonymous function */}
            <Blog blogs={ blogs } title="All Blogs" handleDelete={handleDelete}/>
            <Blog blogs={ blogs.filter((blog)=> blog.author ==='sarra' ) } title="Fartatou Blog" handleDelete={handleDelete}/>
            { error && <div>{error}</div>}
           { isPending && <div>Loading...</div>}
           {blogsJson && <Blog blogs={ blogsJson } title="All Blogs Json" handleDelete={handleDelete}/>}
        </div>
     );
}
 
export default Home;