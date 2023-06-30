import React from 'react';
import SuggestedItem from './suggestedItem';
import styled from 'styled-components';


  /*---------------------------------------------------------------------------------------*/
const SuggestedArea = () => {
  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  }
`;
/*---------------------------------------------------------------------------------------*/
  const mystyle = {
    background: "#78767c",
    width: "100%",
    heigth: "20%",
    bordeRadius: "10px",
    color: "white",
    fontSize: "25px",
    };
  /*---------------------------------------------------------------------------------------*/
  return (
    <Container>
      <div style={mystyle}>
        <p>Suggested</p>
      </div>
      <SuggestedItem Text="Luis" Face="https://images.pexels.com/photos/2089984/pexels-photo-2089984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Suggest="joao.jpg"/>
      <SuggestedItem Text="Paulo" Face="https://images.pexels.com/photos/5514883/pexels-photo-5514883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Suggest="ana.jpg"/>
      <SuggestedItem Text="Silvia" Face="https://images.pexels.com/photos/4153800/pexels-photo-4153800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Suggest="maria.jpg"/>
      <SuggestedItem Text="Lucia" Face="https://images.pexels.com/photos/2587112/pexels-photo-2587112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" Suggest="lucas.jpg"/>
    </Container>
  )
  /*---------------------------------------------------------------------------------------*/
}

export default SuggestedArea;