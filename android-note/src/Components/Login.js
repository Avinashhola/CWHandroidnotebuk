
import React, { useContext,useState } from 'react'
import NoteContext from '../Contexts/Notes/NoteContext';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const a = useContext(NoteContext)
    const { mode } = useContext(NoteContext)    
    const [credentials,setCredentials] =useState({email:"",name:"",password:"",cpassword:""})
    const navigate = useNavigate();

    const handleSubmit=async (e)=>{
              e.preventDefault();
              const {name,email,password} = credentials;
              const response = await fetch("http://localhost:5000/api/creden/createuser",{
                              method:"POST",
                              headers:{"Content-Type": "application/json"},
                              body:JSON.stringify({email:credentials.email,password:credentials.password})
  
                          });
  
                          const json = await response.json()
                          console.log(json)
                          if(json.success){
                              localStorage.setItem('token', json.jwtData);
                              navigate("/")
                          }
                          else{
                              alert("invalid")
                          }
    }
  const onChange = (e)=>{
      setCredentials({...credentials, [e.target.name]:e.target.value})
  }
    return (
        <>
            <div className={`text-${mode === "light" ? 'black' : 'white'} m-4 `} >


                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </form>
            </div>
        </>

    )
}

export default Login