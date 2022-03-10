import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from "./components/site/Footer";
import Header from "./components/site/Header";
import SideBar from './components/site/Sidebar';
import {
  BrowserRouter as Router 
} from 'react-router-dom';


function App() {
  return (
    <div className="App" id="splash"> 
      <Header />
      <Router>
        <SideBar/>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
