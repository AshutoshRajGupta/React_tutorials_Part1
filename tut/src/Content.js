import React from "react";

const Content = () => {
    const handleNameChange=()=>{
        const names=['Ashu','aman','rahul'];
        const int =Math.floor(Math.random()*3);
        return names[int];
      }
  return <div>
    <p> Hello {handleNameChange()}!!</p>
  </div>;
};

export default Content;
