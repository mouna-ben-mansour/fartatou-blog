const Home = () => {
    const handleClick = () =>{
        console.log('hello, fartatous');
    }   

    const handleClickAgain = (name) =>{
        console.log('hello,'+ name);
    } 

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=> handleClickAgain('Mouna')}>Click me again</button> {/* add argument without invoke the function so we use anonymous function */}
        </div>
     );
}
 
export default Home;