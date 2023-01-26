import React,{useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export default function AddBook() {
  const [book,setBook]=useState({
    title:"",
    description:"",
  });

  const handleChange=(e)=>{setBook((prev)=>({...prev,[e.target.name]:e.target.value}))};
  const handleClick = async e =>{
    e.preventDefault()
    try{
      console.log(book.titre)
      await axios.post("http://localhost:8080/api/books/",book)
      alert("book added successfully")
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div>
      <Navbar/>
      <h1> Add Book </h1> 
      <div class="container">
        <div class="row">
          <div class="col-sm">
          </div>
          <div class="col-sm">
          <div class="form-group row">
            <input type="text" class="form-control" placeholder="title" name="title" onChange={handleChange}></input> 
            <br />
            <input type="text" class="form-control" placeholder="description" name="description" onChange={handleChange}></input> 
            <br />
            <input type="text" class="form-control" placeholder="genreId" name="genreId" onChange={handleChange}></input> 
            <button type="submit" class="btn btn-primary" onClick={handleClick}>Add</button> 
          </div>
          </div>
          <div class="col-sm">
          </div>
        </div>
      </div>
        
       
       
    </div>
  )
}
