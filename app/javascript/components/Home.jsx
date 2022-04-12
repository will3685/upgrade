import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import UserCard from './sub-component/CardUser';

const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`

const Home = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/v1/users.json')
    .then( res => {
      setUsers(res.data)
    })
    .catch(res => console.log(res))
  }, [users.length])

  const grid = users.map(item => {
    return (
      <UserCard 
      key={item.id}
      data={item}
      />
    )
  })

return (
      <Container>
        <Header>
          <h1>Welcome Will</h1>
          <Subheader>
            Men nan men poul Banj.
          </Subheader>
        </Header>
        <Grid>
          {grid}
        </Grid>
      </Container>
//     <Container>
//       <h1>Welcome to Banj Will!</h1>
//       <div style={{ display: "flex"}}>
//        <Box style={{ width: "40vw", backgroundColor: "blue"}}>
//         <div>KING</div>
//         </Box>
//         <Box style={{ width: "60vw", backgroundColor: "white"}}>
//           <div>Shit</div>
//         </Box>
//       </div>
//     </Container>
  )
}    

export default Home;