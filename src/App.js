import './App.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Home from './Home';
function App() {

  const isLogin = JSON.parse(localStorage.getItem('isUserLogin'));

  console.log(isLogin,"isLogin")


  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route 
            path="/" 
            element={isLogin ? <Home /> : <Navigate to="/login" />} // Protected route logic
          />
          <Route 
            path="/home" 
            element={isLogin ? <Home /> : <Navigate to="/login" />} // Protected route logic
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
