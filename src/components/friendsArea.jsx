import React from 'react';
import FriendsItem from './friendsItem';
import styled from 'styled-components';


  /*---------------------------------------------------------------------------------------*/
const FriendsArea = () => {
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
        <p>Your Friends</p>
      </div>
      <FriendsItem Text="Ana" Qtd="300 amigos em comum" Face="ana.jpg"/>
      <FriendsItem Text="João" Qtd="30 amigos em comum" Face="joao.jpg"/>
      <FriendsItem Text="Maria" Qtd="170 amigos em comum" Face="maria.jpg"/>
      <FriendsItem Text="Lucas" Qtd="200 amigos em comum" Face="lucas.jpg"/>
    </Container>
  )
  /*---------------------------------------------------------------------------------------*/
}

export default FriendsArea;