import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './../Navbar';

function Index() {
    let [counter, setCounter] = useState([]);
    useEffect(() => {
        async function Counter(){
            let {data} = await axios.get('http://localhost:8000/api/counter');
            setCounter(data);
        }

        Counter();
    }, []);

  return (
    <div className='container mt-5'>
        <Navbar />
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th> 
                <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    counter.map(item => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.age}</td> 
                        </tr> 
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Index