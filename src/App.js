import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Footer from "./components/site/Footer";
import Header from "./components/site/Header";
import Home from './components/site/Home';
import SideBar from './components/site/Sidebar';
import {
  BrowserRouter as Router 
} from 'react-router-dom';

function App() {
  return (
    <div className="App" id="splash"> 
    <Router>
      <Header />
      <SideBar />
        <Home />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
