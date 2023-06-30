import React, { useState } from 'react';
import Sidebar from './sidebar';
import { FaBars , FaReact} from 'react-icons/fa';
import styled from 'styled-components';

const Header = () => {
  /*---------------------------------------------------------------------------------------*/
  const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #1c1833; 
  box-shadow: 0 0 20px 3px;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
  /*---------------------------------------------------------------------------------------*/

  const [sidebar, setSidebar] = useState(false)
  const showSiderbar = () => setSidebar(!sidebar)
  /*---------------------------------------------------------------------------------------*/
  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}   
    </Container>
  )
  /*---------------------------------------------------------------------------------------*/
}

export default Header;
