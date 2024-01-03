import React from "react";

const Header = ({title}) => {

  return <header>{title}</header>;
};

Header.defaultProps={
  title: 'This is the default Title'
}


export default Header;

// for inline css styles use {{}}
// second way is to create a folder and called it
