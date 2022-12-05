import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Signup.js';
import {List} from './components/List';
import {AuthProvider} from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import './components/app.css'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="list" element={<ProtectedRoute> <List/> </ProtectedRoute>}/>
      </Routes>
    </AuthProvider>
    
  )
}

export default App;
