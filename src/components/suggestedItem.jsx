import React from 'react';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';


/*---------------------------------------------------------------------------------------*/
const SuggestedItem = ({ Text, Suggest, Face }) => {
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
      <AreaImage>
       <AreaImage><Avatar src={Face} sx={{ width: 56, height: 56 }} /></AreaImage>
      </AreaImage>
      
      <AreaText>
        <span>{Text}</span>
        <span style={mystyle}><p>Amigo em comum: </p><Avatar src={Suggest} sx={{ width: 20, height: 20 }} /></span>
      </AreaText>
      

    </Container>
  )
  /*---------------------------------------------------------------------------------------*/
}

export default SuggestedItem;