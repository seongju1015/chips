import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
//import data from "./data";
import { useState } from "react";

const data = [
    {
      id: 1,
      name: "칩스 단체사진1",
      img: "/chipsPhoto.png",
    },
    {
      id: 2,
      name: "칩스 단체사진2",
      img: "/chipsPhoto2.png",
    },
    {
      id: 3,
      name: "칩스 단체사진3",
      img: "/chipsPhoto3.png",
    },
];

const ChipsHomePage = () => {
    
    const [slideIndex, setSlideIndex] = useState(0);

    const moveToPrevSlide = () => {
        setSlideIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };
    
    const moveToNextSlide = () => {
        setSlideIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    return(
        <Container>
            <Header>
                <LogoImg src="chipsIcon.png"></LogoImg>
                <img src="chipsx2.png"></img>
                <AwardLink to="/award">활동 이력</AwardLink>
            </Header>
            
            <Line></Line>

            <Body>
                <Body2>
                    <LogoHeader>
                        {/* <LogoImg2 src="chipsIcon.png"></LogoImg2> */}
                        <Logo2 src="chipsx2.png"></Logo2>
                        
                    </LogoHeader>
                    <HeaderDiv>한동대학교 전자학회</HeaderDiv>
                    <HeaderDiv2>since. 2003</HeaderDiv2><br></br>
                    <IntroduceBox>
                       
                            <IntroduceDiv1>📚 직무에 관련된 다양한 선배님들과 만나보세요 !</IntroduceDiv1>
                            <IntroduceDiv1>💡 전자 친구들과 함께 스터디를 통해 행복한 전공 life.</IntroduceDiv1>
                            <IntroduceDiv1>✨ 연구, 토론, 프로젝트 등 유익한 활동을 경험하세요.</IntroduceDiv1>
                                     
                    </IntroduceBox>
                
                    <RecruitStart>
                        <RecruitLink to="https://forms.gle/EeRwJtD99Vatrf2c9" target="_blank">
                            지원하러 가기
                        </RecruitLink>
                    </RecruitStart>

                    <Container2>
                        <Arrow direction="prev" onClick={moveToPrevSlide} style={{color:'white'}}>
                            ◀
                        </Arrow>
                        <Wrapper slideIndex={slideIndex}>
                            {data.map((character) => (
                            <Slide key={character.id}>
                                <Photo
                                src={process.env.PUBLIC_URL + character.img}
                                alt={character.name}
                                />
                            </Slide>
                            ))}
                        </Wrapper>
                        <Arrow direction="next" onClick={moveToNextSlide} style={{color:'white'}}>
                            ▶
                        </Arrow>
                    </Container2>

                </Body2>
            </Body>
        </Container>
        
    );
}

const Container = styled.div`
    z-index: 1;
    @media (max-width: 450px) {
        width: 100vw;
    }
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
const AwardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:rgba(102, 102, 255, 0.8);
    text-decoration: none;
    font-weight: 700;
    font-size: larger;
    margin-left: 2%;
    @media (max-width: 450px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color:rgba(102, 102, 255, 0.8);
        text-decoration: none;
        font-weight: 700;
        font-size: medium;
        margin-left: 2px;
  }
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
    margin-top: -15%;
`;
const Logo2 = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
    height: 400px;
`;
const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 700;
    font-size: x-large;
    margin-top:-3%;
`;
const HeaderDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 500;
    font-size: larger;
`;
const IntroduceBox = styled.div`
    width:45%;
    height:10%;
    //background-color: rgba(102, 102, 255, 0.4);
    border: 4px solid rgba(153, 153, 255, 0.4);
    border-radius: 10px;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width:450px){
        width:70%;
        height:20%;
        //background-color: rgba(102, 102, 255, 0.4);
        border: 4px solid rgba(153, 153, 255, 0.4);
        border-radius: 10px;
        margin-top: 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;
const IntroduceDiv1 = styled.div`
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: x-large;
    color:rgba(051,051,051,0.81);
    margin-top: 2%;
    margin-left: 2%;
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
  @media (max-width: 450px) {
    width: 34%;
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
  }
`;

const Container2 = styled.div`
  width: 60%;
  height: 30%;
  margin: 100px auto;
  overflow: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.3s ease-in-out;
  transform: translateX(${({ slideIndex }) => slideIndex * -100 + "%"});
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5%;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: ${({ direction }) => direction === "prev" && "0px"};
  right: ${({ direction }) => direction === "next" && "0px"};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(102, 102, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`;
export default ChipsHomePage;