import React from "react";
import styled from "styled-components";

const award = () => {

    const goToHomePage = () => {
        window.location.href = "/";
    }

    return(
        <Container>

            <Header>
                <LogoImg src="chipsIcon.png" onClick={goToHomePage} style={{cursor:"pointer"}}></LogoImg>
                <img src="chipsx2.png" alt="chips logo" onClick={goToHomePage} style={{cursor:"pointer"}}></img>
            </Header>

            <Line></Line>

            <Body>

                <Body2>
                    <IntroduceBox>

                        <HeaderDiv>
                        2003 IDEC 칩 설계 경진대회(동아리부문 최우수상) <br></br>
                        2003 IDEC 동아리 설계 경진대회(동아리부문 대상) <br></br>
                
                        2004 IDEC 칩 설계 경진대회(동아리부문 최우수상) <br></br>
                        2004 IDEC 동아리 설계 경진대회(동아리부문 대상) <br></br>
                        
                        2006 IDEC 칩 설계 경진대회(개인부문 최우수상)(동아리부문 우수상) <br></br>
                        2007 경북대 IDEC 칩 설계 경진대회 (동아리부문 대상) / (동아리부문 우수상) <br></br>
                        Hardware implementation of packman[서울대] (동아리부문 대상)<br></br>
                       
                        2009 Core A 경진대회 수상 <br></br>
                      
                        2014 SoC 로봇워 국제 로봇 컨테스트 은상 <br></br>
                        2016 SoC 로봇융합페스티벌 Huro-C 부분 대상  <br></br>
                        2016 SoC 국제로봇컨테스트 Huro-C 부분 은상  <br></br>
                        2017 SoC 로봇워 대회 드론 부분 동상  <br></br>
                        2018 GIST 창의융합 경진대회 탁구로복 부문 2위 <br></br>
                        2019 한동대학교 SW중심대 모형차 자율주행대회 1,2,3위 <br></br>
                        2021 한동대학교 SW중심대 모형차 자율주행대회 최우수상 <br></br>
                        2022 한동대학교 SW중심대 모형차 자율주행대회 대상, 우수상 <br></br>
                        2023 한동대학교 SW중심대 모형차 자율주행대회 은상 <br></br>
                            
                        </HeaderDiv>
            
                    </IntroduceBox>
                    
                </Body2>
            </Body>

        </Container>
    )
}

const Container = styled.div`
    z-index: 1;
    @media (max-width: 450px) {
        width: 100vw;
    }
`;

const Body = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
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

const Body2 = styled.div`
    display: flex;
    justify-content: center;
`;

const IntroduceBox = styled.div`
    width:55%;
    height:70vh;
    //background-color: rgba(102, 102, 255, 0.4);
    border: 4px solid rgba(153, 153, 255, 0.4);
    border-radius: 10px;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width:450px){
        width:80vw;
        height:80vh;
        //background-color: rgba(102, 102, 255, 0.4);
        border: 4px solid rgba(153, 153, 255, 0.4);
        border-radius: 10px;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 10%;
    }
`;
const HeaderDiv = styled.div`
    display: flex;
    
    justify-content: center;
    font-weight: 600;
    font-size: x-large;
    @media (max-width: 450px) {
        font-weight: 500;
        font-size: large;
    }
`;
export default award