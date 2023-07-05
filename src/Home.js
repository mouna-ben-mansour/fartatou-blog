import { useState } from 'react'
import Blog from './Blog';

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

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p >{ name } is { age } years old</p>
            <p >{ lastname }</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=> handleClickAgain('Mouna',e)}>Click me again</button> {/* add argument without invoke the function so we use anonymous function */}
            <Blog />
        </div>
     );
}
 
export default Home;