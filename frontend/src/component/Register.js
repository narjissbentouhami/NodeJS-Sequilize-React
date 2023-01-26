import React,{useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function Register() {
  const [user,setUser]=useState({
    username:"",
    email:"",
    password:""
  });

  const handleChange=(e)=>{setUser((prev)=>({...prev,[e.target.name]:e.target.value}))};
  const handleClick = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:8080/api/user/",user)
      alert("successfully registred")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
        <Navbar/>

        <form class="center">
          <div class="form-group">
            <label for="inputAddress">UserName</label>
            <input type="text" class="form-control" id="inputAddress" onChange={handleChange} name='username'/>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" onChange={handleChange} name='email'/>
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" onChange={handleChange} name='password'/>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" onClick={handleClick}>Sign up</button>
        </form>
    </div>
  )
}
