import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import awsConfig from './aws-exports'

function App() {
  const [message, setMessage] = useState<any>(null);
  console.log(message)
  useEffect(() => {
    fetch("http://localhost:9000")
      .then((res) => { res.json() })
      .then((data) => {

        console.log(data)

      });
  }, []);
  const getFile = (e: any) => {
    console.log(e.target.file)
    console.log(e.target.files[0])
    const data = new FormData();
    data.append("file", e.target.files[0]);
    console.log(data)
    const requestOptions = {
      method: 'POST',
      body: data
    };
    // mylamdanewrole
    fetch('http://localhost:9000/upload', requestOptions)
      .then(response => {
        console.log(response)
        console.log(response.body)
        console.log(response.status)

        if (response.status == 200) {

        }
        response.json()
      })
      .then(data => {
        console.log(data)

      });
  }
  return (<>

    <div className="App container">
      <div className="row">
        <div className="col">
          <h1 className='text-uppercase'>Upload excel into S3 bucket using nestjsBakend , once it is uploaded it triggers lamdba function and this function will insert the data into the DynamoDB</h1>

        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label className="form-label" htmlFor="customFile">Select Xlxs File to upload Into S3</label>
          <input type="file" className="form-control" id="customFile" onChange={(e) => {
            getFile(e)
          }} />

        </div>
        <div className="col-3">
  <br />
        <button type="button" className="btn btn-primary">Submit</button>{' '}
        <button type="button" className="btn btn-danger">Cancel</button>
        </div>
      </div>


    </div>
    <div>{message}</div>
  </>


  );
}

export default App;
