import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const chipsHomePage = () => {

    return(
        <Container>
            <Header>
                <LogoImg src="chipsIcon.png"></LogoImg>
                <img src="chipslogo.png"></img>
            </Header>
            
            <Line></Line>

            <Body>
                <Body2>
                    <LogoHeader>
                        {/* <LogoImg2 src="chipsIcon.png"></LogoImg2> */}
                        <Logo2>로고 들어갈 자리</Logo2>
                    </LogoHeader>
                
                    <RecruitStart>
                        <RecruitLink to="/recruit">
                            지원하러 가기
                        </RecruitLink>
                    </RecruitStart>
                    <HeaderImg src="header.png"></HeaderImg>
                </Body2>
            </Body>
        </Container>
        
    );
}

const Container = styled.div`
    z-index: 1;
`;
const Header = styled.div`
    display: flex;
    height: 10vh;
    margin-top: 6px;
`;
const LogoImg = styled.img`
    border-radius: 5px;
    margin-left: 2%;
`;
const Line = styled.div`
    background-color: skyblue;
    height: 1px;
    width: 100vw;
    margin-top: 5px;
`;

const Body = styled.div`
    display: flex;
    justify-content: center;
`;
const Body2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
`;
const LogoHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const Logo2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const LogoImg2 = styled.img`
    width: 150px;
    height: 150px;
`;
const HeaderImg = styled.img`
    width: 45%;
    height: 65%;
    border: 4px solid rgba(153, 153, 255, 0.4);
    border-radius: 8px;
    margin-top: 5%;
`;
const RecruitLink = styled(Link)`
  color: rgba(255, 255, 255, 1);
  font-family: "Pretendard";
  font-style: normal;
  line-height: normal;
  font-weight: 800;
  font-size: larger;
  text-decoration: none;
`;
const RecruitStart = styled.div`
  width: 24%;
  height: 51px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(102, 102, 255, 0.5);
  box-shadow: -25.367px 25.367px 25.367px 0px rgba(255, 255, 255, 0.1) inset,
    25.367px -25.367px 25.367px 0px rgba(194, 194, 194, 0.1) inset;
  backdrop-filter: blur(25.366666793823242px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 55px;
  cursor:pointer;
  &:hover {
    background: rgba(102, 102, 255, 0.9);
  }
`;
export default chipsHomePage;