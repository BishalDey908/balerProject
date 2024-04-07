
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";




function Login(){

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const Navigate = useNavigate()


     const submit = (e) => {
        e.preventDefault();
         axios.post('http://localhost:3000/login', {email, password})
            .then(result=> {console.log(result)
              //if(result=== "Success"){
               //  Navigate('/home')
             // }
            }) 
            .catch(err=> console.log(err))
                
    }

  
    return(
        <>
         <div className='log_container'>
            <div className='input-form' id="tittle" >
              <h1>Login</h1>
              
              <form action='POST' >
                <div className='input_grp'>
                    
                  <div className='input_field'>
                  <i className="fa-solid fa-envelope"></i>
                  <input name='email'  type="email" placeholder="EMAIL"  onChange={(e) => setEmail(e.target.value)}></input>
                  </div>

                  <div className='input_field'>
                  <i className="fa-solid fa-lock"></i>
                  <input name = "password"  type="password" placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)}  ></input>
                  </div>
                

                <div className='btn_field'>
                  <input type='submit' onClick={submit} />

                </div>
                </div>
              </form>
              
              <p>Or</p>
              
              <Link to="/signup">Signup</Link>
              
            </div>
          </div>
        </>
    )
}


export default Login

