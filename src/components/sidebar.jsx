import React from 'react';
import SidebarItem from './sidebarItem';
import styled from 'styled-components';
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa';
import Avatar from '@mui/material/Avatar';


  /*---------------------------------------------------------------------------------------*/
const Sidebar = ({ active }) => {
  const Container = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  z-index: 5;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

  const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #171923; 
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  `;
  /*---------------------------------------------------------------------------------------*/
  const Content = styled.div`
  margin-top: 100px;
`;
  /*---------------------------------------------------------------------------------------*/
  const closeSidebar = () => {
    active(false)
  }
  /*---------------------------------------------------------------------------------------*/
  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <User>
          <Avatar src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" sx={{ width: 56, height: 56 }} />
          <p>My Account</p>
        </User>
        <SidebarItem Icon={FaEnvelope} Text="Messenger" />
        <SidebarItem Icon={FaRegCalendarAlt} Text="Events" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </Content>
    </Container>
  )
  /*---------------------------------------------------------------------------------------*/
}

export default Sidebar;