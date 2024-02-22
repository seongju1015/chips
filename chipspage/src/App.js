import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './home';
import RecruitPage from './recruit';


function App() {
  return (
    <div>
      <Background>
        <Router>  
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/award' element={<RecruitPage/>}/>
          </Routes>
        </Router>
      </Background>
    </div>
  );
}

const Background = styled.div`
  background:url('/chipsBackground.png') no-repeat center center fixed;
  background-size: cover;
  z-index: 0;
  width: 100vw;
  @media (max-width: 450px) {
    background-size: contain;
    width: 100vw;
    //background-position: center;
    
  }
`;
export default App;
