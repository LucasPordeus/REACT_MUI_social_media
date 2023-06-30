import React from 'react';
import styled from 'styled-components';

/*---------------------------------------------------------------------------------------*/
const SidebarItem = ({ Icon, Text }) => {
  const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #76777c; 
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;
  > svg {
    margin: 0 20px;
  }
  &:hover {
    background-color: #1c1833;
  }
`;
  /*---------------------------------------------------------------------------------------*/
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
  /*---------------------------------------------------------------------------------------*/
}

export default SidebarItem;