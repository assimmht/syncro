import styled from "styled-components";
import { mobile } from "../responsive";
import maps3 from '../images/maps.png';
import PlaceIcon from '@mui/icons-material/Place';
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;


const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
  color: white
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 3px;
  color: white;
`;

const Maps = () => {
  return (
        <Container>
        <Wrapper>
              <ImgContainer>
                <Image src={maps3}/>
                <InfoContainer>
                  <Link to="/products/man">
                    <PlaceIcon
                    style={{ fontSize: 50, color: 'red', marginRight: 980, marginBottom: 340 }} />
                  </Link>
                </InfoContainer>
                <InfoContainer>
                  <PlaceIcon style={{ fontSize: 50, color: 'red', marginRight: 600, marginTop: 200 }} />
                </InfoContainer>
                <InfoContainer>
                 <PlaceIcon style={{ fontSize: 50, color: 'red', marginLeft: 750, marginBottom: 300 }} />
                </InfoContainer>
              </ImgContainer>
        </Wrapper>
      </Container>
  );
};

export default Maps;