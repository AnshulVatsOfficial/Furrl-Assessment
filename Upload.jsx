import React, {useState} from 'react'
import axios from 'axios';

const Upload = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState([]);
  
const onSub = async (e) => {
  const email = document.getElementById('emailId').value;
  const password = document.getElementById('password').value;
  const file_upload = document.getElementById('file_upload').files[0];
  console.log(email, password);
  console.log(file_upload.type);

  if(file_upload.type === "text/csv"){
    console.log("Successfully uploaded file");
    let formData = new FormData();
    formData.set('csvfile', file_upload);
    formData.append("email",email);
    formData.append("password",password);
    formData.append("csvFile",file[0]);
    e.preventDefault();
    let res = await axios.post("http://localhost:5000/imgupload",formData);
    console.log(res);
  }
  else{
    alert("Only .csv files are supported");
  }

  // let formData = new FormData();
  // console.log(formData);
  // let res = await axios.post("http://localhost:5000/imgupload",formData);
  // console.log(res.data);
  }
    return(
    <>
    <div className="box">
    <div className="heading">
      <h1>File Upload Page</h1>
    </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12 mx-auto" id="formdata">
          <form onSubmit={onSub}>
            <div className="form-group">
                <label htmlFor="">Email:</label>
                <input type="email" className="form-control" placeholder="Enter your email" id="emailId" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="">Password:</label>
              <input type="password" className="form-control" placeholder="Enter your password" id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="">Upload .csv Document:</label>
              <input className="form-control" id="file_upload" type="file" required/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Upload;