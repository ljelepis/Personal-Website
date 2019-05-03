import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Gallery from './components/ProjectComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Lindsey Jelepis</NavbarBrand>
          </div>
        </Navbar>
        <Gallery />
      </div>
    );
  }
}

export default App;