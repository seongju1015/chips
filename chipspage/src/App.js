import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import HomePage from './home';
import RecruitPage from './recruit';

function App() {
  return (
    <Router>  {/* Router로 감싸기 */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/recruit' element={<RecruitPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
