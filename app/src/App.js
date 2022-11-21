import React from 'react';
import { useState } from 'react';

const Form =()=>{
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [allEntry, setallEntry]= useState([]);
  

  const submitIt=(e)=>{
    e.preventDefault();
    const newEntry={id: new Date.getTime().toString(),email, password}
    setallEntry([...allEntry, newEntry]);
    setEmail('');
    setPassword('');
    

  }
  return(
    <>
    <form onSubmit={submitIt}>
      <div>
        <label htmlFor='email' >Email</label>
        <input name='email' id='email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off' required="Enter some text"/>
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input name='password' id='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} required="Enter some password" autoComplete='off'/>
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form> 
    <div>
      {
        allEntry.map((currelement)=>{
          const {id, email, password}= currelement;
          return(
            <div className='styler'  key={id}>
              <p>{email}</p>
              <p>{password}</p>
            </div>
          )
        })
      }
    </div>

    </>
  )
}
export default Form;