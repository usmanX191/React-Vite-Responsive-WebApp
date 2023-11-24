import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import ForgotPasswordScreen from './pages/ForgotPassword';
// import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  
  return (
    <>
    <Router basename='React-Vite-Responsive-WebApp'>
      <Routes>
      <Route path="/login" Component={LoginScreen} />
      <Route path="/forgotpassword" Component={ForgotPasswordScreen}/>
      {/* <Route path="/dashboard" Component={Dashboard}/> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
