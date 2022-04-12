import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import styled from 'styled-components'

const Header = styled.div`
  padding: 100px 100px 10px 100px;
  text-align: center;

  h1 {
    font-size: 42px;
  }
`

const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`


const App = () => {

  return(
    <Container>
      <Header>
        <h1>Welcome to Banj!</h1>
        <Subheader>
          <h2>Juvenat College Sacré-Coeur's student and professor blog platform!</h2>
        </Subheader>
      </Header>
    </Container>
  )

}  

export default App;
