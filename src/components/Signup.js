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
    <div class="center">
      <h1>Registrate</h1>
      <form onSubmit={handleSubmit}>
        <div class="txt_field">
         <input type="text" name='name' /><span></span><label>Name*</label>
        </div>
        <div class="txt_field">
        <input type="email" name='email' onChange={handleChange}/><span></span><label>Email Address*</label>
        </div>
        <div class="txt_field">
        <input type="password" name='password' onChange={handleChange}/><span></span><label>Password*</label>
        </div>
        <input type="submit" value="SIGN UP"/>
        {error && <p>{error}</p>}
        <div class="signup_link">
          To <a href="/">Login</a>
        </div>
      </form>
    </div>
  )
}