import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function NavContainer() {
  const [isopen, setisopen] = useState(false)
  const toggle = () => {
    setisopen(!isopen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
    </>
  );
}

export default NavContainer;
