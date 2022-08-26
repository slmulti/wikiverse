import React from 'react';
import {useState, useEffect} from 'react'
import apiURL from '../api';

function AddArticle () {
    
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [newArticle, setNewArticle] = useState("")
  const [newTag, setNewTag] = useState("")
  
  const [tickedCheckbox, setTickedCheckbox] = useState(false)

  
  const handleSubmit = e => {
    e.preventDefault();
    setName('')
    setEmail('')
    setNewArticle('')
  }

  const handleChange = () => {
    setTickedCheckbox(!tickedCheckbox)
  }

  return (

      <main>
    <form onSubmit={handleSubmit}>
    <h2>Add an Article</h2>
      <p>Please enter your details</p>
      <label></label>
      <input type='text' placeholder='Full Name' value={name} onChange={e=>setName(e.target.value)}/><br></br>
      <input type='text' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/><br></br>
      <p>Please enter your Article below</p>
      <input type='text' placeholder='Article...' value={newArticle} onChange={e=>setNewArticle(e.target.value)}/><br></br>
      <p>Please Give your article a tag</p>
      <input type='text' placeholder='#tag' value={newTag} onChange={e=>setNewTag(e.target.value)}/><br></br>
      
      <label>
        <p>I agree to the Terms and Conditions <input type='checkbox' value={tickedCheckbox} onChange={handleChange}/><br></br> </p>
      </label>

      <p>Thanks for Submitting an Article {name}</p>
      <p>Please Double check your {email}</p>

      <button>Submit</button>
    </form>
  </main>
  );
}

export default AddArticle