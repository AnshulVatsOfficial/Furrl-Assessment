import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import axios from 'axios';
import './App.css';

const Login = () => {
    const {user, isLoading ,loginWithRedirect, isAuthenticated, logout} = useAuth0();
    const [file, setFile] = useState([]);
    const onSub = async (e) => {
        const file_upload = document.getElementById('file_upload').files[0];
        console.log(file_upload.type);
      
        if(file_upload.type === "text/csv"){
          console.log("Successfully uploaded file");
          let formData = new FormData();
          formData.set('csvfile', file_upload);
          formData.append("csvFile",file[0]);
          e.preventDefault();
          let res = await axios.post("http://localhost:5000/fileupload", formData);
          console.log(res);
        }
        else{
          alert("Only .csv files are supported");
        }
    }

    if(isLoading){
        return <div>Please wait for a moment ...</div>;
    }
    return(
        <>
        <div className="login">
            <div className="heading">
                <h1>Log in Page</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-12 mx-auto" id="my_form">
                        <form onSubmit={onSub}>
                        <div>
                            {isAuthenticated && 
                            <div>
                                <h4>Welcome <b>{user.name} !</b></h4>
                            </div>}
                        </div>
                        <div>
                            {isAuthenticated ? (
                                <div className="file_up_cont">
                                <div className="form-group upload_file">
                                    <label htmlFor="">Upload a <b>.CSV</b> Document:</label>
                                    <input className="form-control" id="file_upload" type="file" required/>
                                    <button type="submit" className="btn btn-primary submit_btn" >Upload</button>
                                </div>
                                <button className="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
                                </div>
                            )
                            : (
                                <div className="show_login_btn">
                                <h3>Click the button to log in</h3>
                                <button type="submit" className="btn btn-primary" onClick={() => loginWithRedirect()}>Log in</button>
                                </div>
                                )
                            }
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;