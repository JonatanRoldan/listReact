import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

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
    <div className="contenedorPrincipal">
      <h1>Iniciar Sesion</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name='email'placeholder="Email Address*" onChange={handleChange}/>
        <input type="password" name='password' placeholder="Password*" onChange={handleChange}/>
        <button>SIGN IN</button>
      </form>
      
      <a href="signup">Don't have an account? Sign Up</a>
      
    </div>
  )
}
