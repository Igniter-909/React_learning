import { useState } from 'react'
import './App.css'
import logo from './assets/insta.jpg'


function App() {
  
  const [login,setlogin] = useState(true)
  
  function loginSwitch(){
    setlogin(!login);
  }

  return (
    <div id='container'>
        <div id="user">
            <img src={logo}/>
            <input type='text' placeholder='Mobile Number or Email' hidden={login}/>
            <input type='text' placeholder='Full Name' hidden={login}/>
            <input type='email' placeholder='Mobile number, Username or Email'/>
            <input type='text' placeholder='phone number, username or email'/>
            <button>{login?"Sign in" : "Sign up"}</button>
          <div id="footer">{login? "Don't have account? " : "Have an account?"}<span onClick={loginSwitch}>{login?"Sign up":"Sign in"}</span></div>
      </div>
      </div>
      
  )
}

export default App
