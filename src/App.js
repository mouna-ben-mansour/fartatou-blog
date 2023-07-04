import './App.css';

function App() {
  const title = 'welcome to the new blog';
  const likes =50;
  const person = { name:'Sarra', age:'31'};
  const linkGoogle= "http://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>App component</h1>
        <h2>{ title }</h2>
        <p>Liked { likes } times</p>
        <p>Name: { person.name } <br></br>Age: { person.age }</p>
        <p>{ 10 }</p>
        <p >{ 'Hello, fartatous' }</p>
        <p >{ [1,2,3,4,5] }</p>
        <a href="http://www.google.com" >google</a>
        <br></br>
        <a href={ linkGoogle } >google site</a>
      </div>
    </div>
  );
}

export default App;
