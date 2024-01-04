
import {Component} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Link, Route, Routes } from "react-router-dom";
import Home from './Home';
import FormDonation from './donation/Form';

class App extends Component{
  constructor(props){
    super(props);

  }

  render(){

    return(
      <div>
          <BrowserRouter >     
          <Routes>
              <Route path="/" element={<Home/>} />       
              <Route path="/index" element={<FormDonation/>} />           
          </Routes>         
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
