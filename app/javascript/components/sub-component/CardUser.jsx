import * as React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import styled from 'styled-components';


const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
`

const UserAvatar = styled.div`
  width: 50px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`

const UserName = styled.div`
  padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none
  }
`

export default function UserCard(props) {

  return (
    <Card>
      <UserName>{props.data.firstname}</UserName>
    </Card>
  )
}

/* <LinkWrapper>
<Link to={`/airlines/${props.name}`}> View </Link>
/* </LinkWrapper> */ 
/* <UserAvatar>
        <img src={props.photo_url} alt={props} />
      </UserAvatar> */