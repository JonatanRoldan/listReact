import { useState } from 'react';
import {useAuth} from '../context/authContext';
import {useNavigate} from 'react-router-dom';

export function Signup() {
  const [user,setUser] = useState({
    email:'',
    password:'',
  });
  const {signup} = useAuth();
  const navigate = useNavigate();
  const [error,setError] = useState();

  const handleChange = ({target: {name, value}}) =>{
    setUser({...user,[name]:value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="contenedorPrincipal">
      <h1>Registrate</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name='email'placeholder="Email Address*" onChange={handleChange}/>
        <input type="password" name='password' placeholder="Password*" onChange={handleChange}/>
        <button>SIGN UP</button>
      </form>
    </div>
  )
}