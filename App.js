import React from 'react';
import './App.css';
import Upload from './local-upload/Upload';
import Signup from './signup';
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
    <>
    <Auth0Provider domain="dev-p1qilje0vruagfim.us.auth0.com" clientId="Ec5peBiQjtbf2r3IX7S8r3HEBPekdG2k" redirectUri={window.location.origin}>
    <Signup />
    </Auth0Provider>
    </>
  )
}

export default App;