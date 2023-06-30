import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
/*---------------------------------------------------------------------------------------*/
const FriendsItem = ({ Text, Qtd, Face }) => {
  const Container = styled.div`
  display: flex;
  width: 100%;
  height: 13%;
  align-items: center;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
   @media (max-width: 700px) {
    margin-top: 20px;
  }
  }
`;

  const AreaImage = styled.div`
   display: flex;
   justify-content: center;
   width: 50%;
   height: 100%;  
  `

  const AreaText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `
  const mystyle = {
    fontSize: "10px"
  }
  /*---------------------------------------------------------------------------------------*/
  return (
    <Container>
      <AreaImage><Avatar src={Face} sx={{ width: 56, height: 56 }} /></AreaImage>
      <AreaText>
        <span>{Text}</span>
        <span style={mystyle}>{Qtd}</span>
      </AreaText>
      

    </Container>
  )
  /*---------------------------------------------------------------------------------------*/
}

export default FriendsItem;