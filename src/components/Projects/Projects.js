import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Project Management Tool"
              description="Project Management Tool with React and ExpressJS Framework (Frontend & Backend). The Project Managemnet tool with react and express is a comprehensive project management tool designed to streamline project planning, execution, and monitoring built using MERN Stack."
              ghLink="https://github.com/kimgayatri/Project-Management-Tool-frontend.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Real-Time-Code-Editor(Collaboration Tool)"
              description="The Real-Time Code Editor is an advanced web-based collaborative coding platform that allows multiple users to write, edit, and share code in real-time. Built using WebSockets, it ensures seamless synchronization, enabling developers to work together efficiently on the same codebase."
              ghLink="https://github.com/kimgayatri/realtime-code-editor-main.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="MONGODB_CRUD_GUI"
              description="The MongoDB CRUD GUI is a web-based graphical user interface that simplifies Create, Read, Update, and Delete (CRUD) operations for MongoDB databases. It provides a user-friendly way to manage database records without requiring direct MongoDB shell or command-line interactions."
              ghLink="https://github.com/kimgayatri/MONGODB_CRUD_GUI.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Restful-API-Development"
              description="The RESTful API Development project focuses on building a robust, scalable, and secure backend system using Node.js, Express.js, and MongoDB. This API enables seamless Create, Read, Update, and Delete (CRUD) operations, making it suitable for applications such as inventory systems, library management, user authentication services, and more."
              ghLink="https://github.com/kimgayatri/Restful-API-Development.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/kimgayatri"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/kimgayatri"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
