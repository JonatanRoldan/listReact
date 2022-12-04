import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Signup.js';
import {AuthProvider} from './context/authContext';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </AuthProvider>
    
  )
}

export default App;
