import logo from './logo.svg';
import './App.css';

function App() {

  const handleNameChange=()=>{
    const names=['Ashu','aman','rahul'];
    const int =Math.floor(Math.random()*3);
    return names[int];
  }

  const name="Ashu";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}! welcome to my website!!!
        </p>
        
        <p>{" Ashutosh Raj Gupta"}</p>
        <p>{1}</p>
        <p>[1,2,3,4]</p>   
        <p>{name}</p> 
      </header>
    </div>
  );
}

export default App;
