import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import './login.css'

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {login} = useAuth();
  const navigate = useNavigate();
  const [error, setError]= useState();

  const handleChange = ({target: {name,value}})=>
    setUser({...user,[name]:value});
    
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('')
    try {
      await login(user.email,user.password);
      navigate('/list');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div class="center">
      <h1>Iniciar Sesion</h1>
      <form onSubmit={handleSubmit}>
        <div class="txt_field">
        <input type="email" name='email' onChange={handleChange}/><span></span><label>Email Address*</label>
        </div>
        <div class="txt_field">
        <input type="password" name='password' onChange={handleChange}/><span></span><label>Password*</label>
        </div>
        <div class="pass">Forgot Password?</div>
        <input type="submit" value="Login"/>
        {error && <p>{error}</p>}
        <div class="signup_link">
          Not a member? <a href="signup">Signup</a>
        </div>
      </form>
    </div>
  )
}
