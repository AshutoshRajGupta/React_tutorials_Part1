import React from "react";

const Content = () => {
    const handleNameChange=()=>{
        const names=['Ashu','aman','rahul'];
        const int =Math.floor(Math.random()*3);
        return names[int];
      }

      const handleCLick=()=>{
        console.log('you clicked it')
      }
      const handleCLick2=(name)=>{
        console.log(`${name} was clicked`)
      }
      const handleCLick3=(e)=>{
        console.log(e)
      }

  return <div>
    <p onDoubleClick={handleCLick}> Hello {handleNameChange()}!!</p>
    <button onClick={handleCLick}>Click it</button>
    <button onClick={()=>handleCLick2("Ashutosh")}>Click it</button>
    <button onClick={(e)=>handleCLick3(e)}>Click it</button>
  </div>;
};

export default Content;
