import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import Navbar from './../Navbar';
function Create() {
    let [name, setName] = useState('');
    let [age, setAge] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        if(name != '' && age != ''){
            axios.post('http://localhost:8000/api/counter/create', {}, {params: {
                name,
                age
              }})
            .then( response => {
                console.log(response);
            })
        }
    }

  return (
    <div className='container mt-5'>
        <Navbar />
        <form>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control"/> 
            </div> 
            <div className="mb-3">
                <label className="form-label">Age</label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} className="form-control"/> 
            </div> 
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Create