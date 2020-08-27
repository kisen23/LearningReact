import React from 'react';

import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'

function App() {
  return (
   <div className="App">
   <Greet  name='kishan'/>
   <Greet  name='safi'/>
   <Welcome standard='1'/> 
   <Welcome standard='2'/>

   <Message/>
   
    </div>
  );
}

export default App;
