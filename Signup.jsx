import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";


function Signup() {

    const[user, setUser]= useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const Navigate = useNavigate()

    const history = useNavigate()
     function submit(e) {
        e.preventDefault();
        
        try{
             axios.post('http://localhost:3002/signup', {
                user,email, password }
                .then(Navigate('/login'))
                )
            .then(res=> {
              if(res.data==='exist'){
                alert('User already exists')
                 // history('/home', {state:{id:email}})
              }
              else if(res.data==='notexist'){
                history('/', {state:{id:email}})
              }
              
          })
          .catch(e=> {
                  alert(e)
                  
          })
        }
        catch(e){
            console.log(e)
        }
    }


    return(
        <>
         <div className='log_container'>
            <div className='input-form' id="tittle" >
              <h1>Signup</h1>
              
              <form method='POST' >
                <div className='input_grp'>

                <div className='input_field'>
                  <i className="fa-solid fa-user"></i>
                  <input name='user'  type="user" placeholder="USERNAME"  onChange={(e) => setUser(e.target.value)}></input>
                  </div>
                    
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
              
              <Link to="/login">Login</Link>
              
            </div>
          </div>
        </>
    )
}



export default Signup
