import React from 'react';
import { useState } from 'react';
import './App.css';

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
      alert('Please Fill Inputfield');
    }
    

  }
  return(
    <>
    <form className='form' onSubmit={submitIt}>
      <div>
        <label className='p_email' htmlFor='email' >Email</label>
        <input className='input_email' name='email' id='email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off' />
      </div>
      <div>
        <label className='p_password' htmlFor='password'>Password</label>
        <input className='input_password' name='password' id='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  autoComplete='off'/>
      </div>
      <div>
        <button className='button' type='submit'>Login</button>
      </div>
    </form> 
    <div className='data'>
      {
        allEntry.map((currelement)=>{
          return(
            <div className='form_data'>
              <h3 className='heading'>User Data</h3>
              <p className='text_Email'> Email : "{currelement.email}"</p>
              <p className='text_Password'> Password : "{currelement.password}"</p>
            </div>
          )
        })
      }
    </div>

    </>
  )
}
export default Form;