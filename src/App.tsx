import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import awsConfig from './aws-exports'

function App() {
  const [message, setMessage] = useState("");
 
  useEffect(() => {
    fetch("http://localhost:9000")
      .then((res) =>{ res.json()})
      .then((data) => {
        console.log(data)
        
        });
  }, []);
  const getFile=(e:any)=>{
   console.log(e.target.file)
   console.log(e.target.files[0])
   const data = new FormData();
   data.append("file",e.target.files[0]);
   console.log(data)
   const requestOptions = {
    method: 'POST',
    body: data
};
// mylamdanewrole
fetch('http://localhost:9000/upload', requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    });
  }
  return (
    <div className="App">
      <h1 className='text-uppercase'>Upload excel into S3 bucket using nestjsBakcnd</h1>
      <input type="file" onChange={(e)=>{
         getFile(e)
      }} />
    </div>
  );
}

export default App;
