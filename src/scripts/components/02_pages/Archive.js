/*******
* REACT IMPORTS
******/
import React, { Component } from "react";

/*******
* COMPONENTS IMPORTS
******/
import ProjectListContainer from "../../containers/ProjectListContainer"

/*******
* COMPONENT
******/
class Archive extends Component {
  render() {
    return (
      <section className="project_wrapper">
        <h1>All projects</h1>
        <ProjectListContainer></ProjectListContainer>
      </section>
    )
  }
}

export default Archive;
