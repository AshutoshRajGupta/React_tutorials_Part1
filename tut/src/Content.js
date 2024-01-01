import React,{useState} from "react";

const Content = () => {

  const [name,setName]=useState('Ashutosh');
  const [count,setCount]=useState(0);

    const handleNameChange=()=>{
        const names=['Ashu','aman','rahul'];
        const int =Math.floor(Math.random()*3);
        setName(names[int]);
      }

      const handleCLick=()=>{
        setCount(count+1);
        // setCount(count+1);
        console.log(count)
      }
      

  return <div>
    <p onDoubleClick={handleCLick}> Hello {name}!!</p> 
    {/* <p onDoubleClick={handleCLick}> Hello {name}!!</p> */}

     {/* state call */}
    <button onClick={handleNameChange}>Change name</button>
    <button onClick={handleCLick}>click it</button>

    
  </div>;
};

export default Content;
