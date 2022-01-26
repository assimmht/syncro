import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../images/logo.png';

const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  width: 200px;
  outline: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 17px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Div1 = styled.div`
  display: flex;
  padding: 5px;
`

const Div2 = styled.div`
  display: flex;
  color: black;
  &:hover {
    background-color: #3E509E;
    color: white;
  }
  padding: 5px;
`

const Div3 = styled.div`
  display: flex;
  color: black;
  &:hover {
    background-color: #D92D4C;
    color: white;
  }
  padding: 5px;
`

const Div4 = styled.div`
  display: flex;
  color: black;
  &:hover {
    background-color: #EE7242;
    color: white;
  }
  padding: 5px;
`
const Div5 = styled.div`
  display: flex;
  color: black;
  &:hover {
    background-color: #F5AF44;
    color: white;
  }
  padding: 5px;
`
const Div6 = styled.div`
  display: flex;
  padding: 5px;
  color: black;
`
const Div7 = styled.div`
  display: flex;
  padding: 5px;
  color: black;
`

const Image = styled.img`
  width: 50%;
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <Wrapper>
          <Div1>
            <Link to="/" style={{textDecoration: 0}}>
              <Image src={logo}/>
            </Link>
          </Div1>
          <Link to="/login" style={{textDecoration: 0}}>
            <Div2>
               <MenuItem>TOUT NOS PRODUITS</MenuItem>
            </Div2>
          </Link>
          <Link to="/login" style={{textDecoration: 0}}>
            <Div3>
              <MenuItem>NOS COLLECTIONS</MenuItem>
            </Div3>
          </Link> 
          <Link to="/login" style={{textDecoration: 0}}>
            <Div4>
             <MenuItem>LES AVENTURES DE SYNCRO</MenuItem>
            </Div4>
          </Link>         
          <Link to="/login" style={{textDecoration: 0}}>
            <Div5>
              <MenuItem>COMING SOON</MenuItem>
            </Div5>
          </Link>    
          <SearchContainer>
            <SearchIcon style={{ color: "gray", fontSize: 24, }} />
            <Input placeholder="Search" />
          </SearchContainer>
          <Right>
          { !user ?
            <Link to="/login" style={{textDecoration: 0}}>
               <Div6>
                 <PersonIcon />
              </Div6>
             </Link>
          : 
          <Div7>
            <Link to="/" style={{textDecoration: 0, color: 'black', marginRight: 10}}>
            <PersonIcon />
            </Link>
            <Link to="/" style={{textDecoration: 0, color: 'black', marginRight: 10}}>
             <MenuItem>Déconnexion</MenuItem>
            </Link>
        </Div7>
         }
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon style={{ color: 'black' }} />
            </Badge>
          </MenuItem>
          </Link>
          </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;