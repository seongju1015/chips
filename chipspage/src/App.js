import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import HomePage from './home';
import chipsHomePage from './home';

function App() {
  return (
    <Router>  {/* Router로 감싸기 */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
