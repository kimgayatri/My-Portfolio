import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import API from "../../Assets/Projects/Restful API Development.jpeg";
import Carbon from "../../Assets/Projects/Carbon footprint calculator.jpeg";
import CRUD from "../../Assets/Projects/CRUD.png";
import P5 from "../../Assets/Projects/P5.png";
import AI from "../../Assets/Projects/AI Desktop Assistant.jpeg";
import Codeditor from "../../Assets/Projects/Codeditor.png";
import resumebuilder from "../../Assets/Projects/resumebuilder.png";
import strapi from "../../Assets/Projects/strapi.png";


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
              imgPath={P5}
              isBlog={false}
              title="Project Management Tool"
              description="Project Management Tool with React and ExpressJS Framework (Frontend & Backend). The Project Managemnet tool with react and express is a comprehensive project management tool designed to streamline project planning, execution, and monitoring built using MERN Stack."
              ghLink="https://github.com/kimgayatri/Project-Management-Tool-frontend.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Codeditor}
              isBlog={false}
              title="Real-Time-Code-Editor(Collaboration Tool)"
              description="The Real-Time Code Editor is an advanced web-based collaborative coding platform that allows multiple users to write, edit, and share code in real-time. Built using WebSockets, it ensures seamless synchronization, enabling developers to work together efficiently on the same codebase."
              ghLink="https://github.com/kimgayatri/realtime-code-editor-main.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRUD}
              isBlog={false}
              title="MONGODB_CRUD_GUI"
              description="The MongoDB CRUD GUI is a web-based graphical user interface that simplifies Create, Read, Update, and Delete (CRUD) operations for MongoDB databases. It provides a user-friendly way to manage database records without requiring direct MongoDB shell or command-line interactions."
              ghLink="https://github.com/kimgayatri/MONGODB_CRUD_GUI.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={API}
              isBlog={false}
              title="Restful-API-Development"
              description="The RESTful API Development project focuses on building a robust, scalable, and secure backend system using Node.js, Express.js, and MongoDB. This API enables seamless Create, Read, Update, and Delete (CRUD) operations, making it suitable for applications such as inventory systems, library management, user authentication services, and more."
              ghLink="https://github.com/kimgayatri/Restful-API-Development.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AI}
              isBlog={false}
              title="AI Desktop Assistant"
              description="The AI Desktop Assistant is a smart virtual assistant designed to run on desktop systems, helping users with tasks like reminders, web searches, opening apps, voice commands, and more."
              ghLink="https://github.com/kimgayatri/AI-Desktop-Assistant.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Carbon}
              isBlog={false}
              title="Carbon Footprint Calculator"
              description="The Carbon Footprint Calculator is an AI-based web tool that helps users estimate their daily carbon emissions based on activities like travel, energy usage, and food consumption."
              ghLink="https://github.com/kimgayatri/Carbon-Footprint-Calculator-App.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resumebuilder}
              isBlog={false}
              title="AI-Powered Resume Builder"
              description="The AI-Powered Resume Builder is a smart and user-friendly website that helps users create professional resumes effortlessly. The platform also supports saving, editing, and downloading resumes in various formats. It's ideal for students, job seekers, and professionals looking for a quick and efficient resume-building tool."
              ghLink="https://github.com/kimgayatri/AI-Powered-Resume-Builder.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={strapi}
              isBlog={false}
              title="AI Resume Builder(Strapi_Backend)"
              description="It is a powerful backend dashboard built using Strapi CMS. It allows admins to manage user data, resume entries, and AI-generated content efficiently."
              ghLink="https://github.com/kimgayatri/ai-resume-builder-strapi-admin.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
