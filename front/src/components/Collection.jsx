import styled from "styled-components";
import { mobile } from "../responsive";
import japonais from '../images/japonais';
import france from '../images/france.png';
import americain from '../images/americain';
import basic from '../images/basic.jpg';
import PlaceIcon from '@mui/icons-material/Place';
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
flex-direction: column;
align-items: center;
`;


const ImgContainer = styled.div`
`;

const Image = styled.img`
height: 50%;
width: 20%;
`;

const Desc = styled.p`
  font-size: 30px;
  color: black;
  margin-top: 2.5em;
  margin-bottom: 1.5em;
`;

const ImageBas = styled.img`
  width: 100%;
  object-fit: cover;
`;
const ImgBottom = styled.div`
  width: 60.02%;
  margin-top: -2.7em;
`;

const Maps = () => {
  return (
        <Container>
        <Desc>Nos collections</Desc>
        <Wrapper>
             <center>
              <ImgContainer>
                {/* <Image src={japonais}/>
                <Image src={americain}/>
                <Image src={japonais}/> */}
               <Link to={`/products/japon`}>
                 <Image src={japonais}/>
                </Link>
                <Link to={`/products/usa`}>
                 <Image src={americain}/>
                </Link>
                <Link to={`/products/france`}>
                 <Image src={japonais}/>
                </Link>
               </ImgContainer>
               <ImgBottom>
                <ImageBas src={basic}/>
               </ImgBottom>
              </center>
        </Wrapper>
      </Container>
  );
};

export default Maps;