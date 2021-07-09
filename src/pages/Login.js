import React, { useState } from 'react';
import { useEffect } from 'react';
import '../styles/Login.css'
import Home from './Home'

import { Link, useHistory } from "react-router-dom";
import fire from "../fire/fire.js";




function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [emailError, setEmailError] =useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);


const clearinputs =()=>{
    setEmail("");
    setPassword("");
}


const clearerrors =()=>{
    setEmailError("");
    setPasswordError("");
}




 const handlelogin=()=>
{
    clearerrors();


    fire.auth().signInWithEmailAndPassword(email, password).catch((err) => {
     switch(err.code)
     {
         case "auth/invalid-email" :
         case "auth/user-disabled" :
         case "auth/user-not-found" :
             setEmailError(err.message);
             break;
         case "auth/wrong-password" :
             setPasswordError(err.message);
             break;

     }    
 
    });

}


const handlesignup=()=>
{
    clearerrors();

    fire.auth().createUserWithEmailAndPassword(email, password).catch((err) => {
     switch(err.code)
     {
         case "auth/email-already-in-use" :
         case "auth/invalid-email" :
         
             setEmailError(err.message);
             break;
         case "auth/weak-password" :
             setPasswordError(err.message);
             break;

     }    
 
    });

}

const handlelogout =()=>
{
    fire.auth().signOut();
}


const authlistener=()=>
{
    fire.auth().onAuthStateChanged((user)=>{
    if(user)
    {
        clearinputs();
        setUser(user);
    }
    else
    {
        setUser("");
    }


    

    })
}

useEffect(()=>
{
authlistener();
},[]);  



    return (
        <>
        
         {user ? (<Home handlelogout={handlelogout}
                        user={user}
         
         />) :
            (<>
            <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

            
                    <h5>E-mail</h5>
                    <input type='text' required value={email} onChange={e => setEmail(e.target.value)} />
                    <p>{emailError}</p> 

                    <h5>Password</h5>
                    <input type='password' required value={password} onChange={e => setPassword(e.target.value)} />
                     <p>{passwordError}</p>  

                    <button  onClick={handlelogin} className='login__signInButton'>Sign In</button>
              

                <p>
                    By signing-in you agree to the AMAZON Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={handlesignup} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
         </>
            )
            }
      </>  
    )
}

export default Login