const Home = () => {
    const handleClick = (e) =>{
        console.log('hello, fartatous');
        console.log(e);
    }   

    const handleClickAgain = (name,e) =>{
        console.log('hello,'+ name);
        console.log(e.target);
    } 

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=> handleClickAgain('Mouna',e)}>Click me again</button> {/* add argument without invoke the function so we use anonymous function */}
        </div>
     );
}
 
export default Home;