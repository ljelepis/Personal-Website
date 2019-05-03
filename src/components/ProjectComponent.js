import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                  id: 0,
                  name:'In Bloom',
                  image: '',
                  category: 'Bootstrap 4',
                  description:'I worked on a team creating a customized flower ordering website.'                        },
               {
                  id: 1,
                  name:'React In Bloom',
                  image: '',
                  category: 'React',
                  label:'',
                  description:'We took that Bootstrap website and incorporated it into a React App.'                       },
               {
                  id: 2,
                  name:'conFusion',
                  image: '',
                  category: 'Bootstrap 4',
                  description:'A restaurant website project I created from HTML, CSS, JavaScript and Bootstrap.'                        },
               {
                  id: 3,
                  name:'React conFusion',
                  image: '',
                  category: '',
                  description:'A React App website of the Bootstrap restaurant site I did.'                        }
               ],
        };
    }

    render() {
        const gallery = this.state.projects.map((project) => {
            return (
              <div key={project.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={project.image} alt={project.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{project.name}</Media>
                    <p>{project.description}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {gallery}
              </Media>
            </div>
          </div>
        );
    }
}

export default Gallery;