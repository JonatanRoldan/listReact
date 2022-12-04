import { useState } from 'react';
import {useAuth} from '../context/authContext';
import {useNavigate} from 'react-router-dom';

export function Signup() {
  const [error,setError]=useState();
  const [user,setUser] = useState({
    email:'',
    password:'',
  });
  const {signup} = useAuth()
  const navigate = useNavigate()
  const handleChange = ({target: {name, value}}) =>{
    setUser({...user,[name]:value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await signup(user.email, user.password)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name='email'placeholder="Email Address*" onChange={handleChange}/>
      <input type="password" name='password' placeholder="Password*" onChange={handleChange}/>
      <button>SIGN UP</button>
    </form>
  )
}