import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Gallery from './ProjectComponent';
import { PROJECTS } from '../shared/projects';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        projects: PROJECTS,
        selectedProject: null
    };
  }

  onProjectSelect(projectId) {
    this.setState({ selectedProject: projectId});
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Lindsey Jelepis</NavbarBrand>
          </div>
        </Navbar>
        <Gallery projects={this.state.projects} onClick={(projectId) => this.onProjectSelect(projectId)} />
      </div>
    );
  }
}

export default Main;