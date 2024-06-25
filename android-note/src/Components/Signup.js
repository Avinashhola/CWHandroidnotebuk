
import React, { useContext, useState } from 'react'
import NoteContext from '../Contexts/Notes/NoteContext';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    
    const {mode} = useContext(NoteContext)

const [credentials,setCredentials] =useState({email:"",name:"",password:"",cpassword:""})
const navigate = useNavigate();
  const handleSubmit=async (e)=>{
            e.preventDefault();
            const {name,email,password} = credentials;
            const response = await fetch("http://localhost:5000/api/creden/createuser",{
                            method:"POST",
                            headers:{"Content-Type": "application/json"},
                            body:JSON.stringify({name,email, password})

                        });

                        const json = await response.json()
                        console.log(json)
                        if(json.success){
                            localStorage.setItem('token', json.jwtData);
                            navigate("/")  // in navigate we dont have push stTE BUT N HISTIRY WE DO HAVE
                        }
                        else{
                            alert("invalid")
                        }
  }
const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value})
}
  return (
    
    <div className={`container my-3 text-${mode === "light"? 'black':'white'} m-4 ` } >
            <form onSubmit={handleSubmit}>
                    <div className="m b-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="name" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={onChange} name="password" minLength={5} required  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpassword" className="form-label">Conform Password</label>
                        <input type="cpassword" className="form-control" id="cpassword" onChange={onChange} name="cpassword" minLength={5} required />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
    </div>
  )
}

export default Signup