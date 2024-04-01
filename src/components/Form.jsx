import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import UploadAvatar from './UploadAvatar';

export default function Form() {

  const navigate = useNavigate();

  const [info, setInfo] = useState({
    login: '',
    password: '',
    repeatPassword: ''
  })

  const[errors, setErrors] = useState({})

 
  const handleChange = (e)=>{
    const {name, value} = e.target;
    setInfo(prev => ({...prev, [name]:value}))//параметры ф  
  }

  const handleSubmit= (e)=>{
    e.preventDefault();
    const errorsValidation = {}

    if(!info.login.trim()){
      errorsValidation.login = 'login is required';
    } else if(info.login.length <=6){
      errorsValidation.login = 'login should be at least 6 characters'
    }else if(info.login.length >=12){
      errorsValidation.login = 'login should be no more than 12 characters'
    }

    if(!info.password.trim()){
      errorsValidation.password = 'password is required'
    }else if (!/[A-Z]/.test(info.password)){
      errorsValidation.password = 'password must include 1 capital letter'
    }

    if(info.password !== info.repeatPassword){
      errorsValidation.repeatPassword = 'password should match'
    }
     
    setErrors(errorsValidation);
    if( Object.keys(errorsValidation).length ===0){
      localStorage.setItem('info',JSON.stringify(info));  
      navigate('/main');
    } 
  }

  const [avatarLoaded, setAvatarLoaded] = useState(false);

  const handleAvatarLoaded=(loaded)=>{
    setAvatarLoaded(loaded)
  }

 

  return (

    <>
     <UploadAvatar onAvatarLoad={handleAvatarLoaded}/> 
    <form className='form' onSubmit = {handleSubmit}>
    <input type='text' name='login' onChange={handleChange} placeholder='Enter login' autoFocus/>
    {errors.login && <span>{errors.login}</span>}
    <input type='text' name='password' onChange={handleChange} placeholder='Enter password'/>
    {errors.password && <span>{errors.password}</span>}
    <input type='text' name='repeatPassword' onChange={handleChange} placeholder='Repeat password'/>
    {errors.repeatPassword && <span>{errors.repeatPassword}</span>}
    <button disabled={!avatarLoaded}>Submit</button>
    </form>
    </>
  )
}


