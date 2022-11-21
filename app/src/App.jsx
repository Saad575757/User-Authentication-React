import React from 'react';
import { useState } from 'react';

const Form =()=>{
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [allEntry, setallEntry]= useState([]);

  const submitIt=(e)=>{
    e.preventDefault();
    if(email&& password){
      const newEntry={email:email, password:password}
      setallEntry([...allEntry, newEntry]);
      setEmail('');
      setPassword('');
    }
    else{
      alert('fillout all details');
    }
    

  }
  return(
    <>
    <form onSubmit={submitIt}>
      <div>
        <label htmlFor='email' >Email</label>
        <input name='email' id='email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input name='password' id='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  autoComplete='off'/>
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form> 
    <div>
      {
        allEntry.map((currelement)=>{
          return(
            <div className='styler'>
              <p>{currelement.email}</p>
              <p>{currelement.password}</p>
            </div>
          )
        })
      }
    </div>

    </>
  )
}
export default Form;