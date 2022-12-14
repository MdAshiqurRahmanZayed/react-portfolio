import { Container, Row, Col, Tab, Nav  } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import csteoverflow from '../assets/img/csteoverflow.png'
import zenblog from '../assets/img/zenblog.png'
import djangoeccomerce from '../assets/img/djangoeccomerce.png'
import bookstore from '../assets/img/bookstore.png'
import youtubevieodownloader from '../assets/img/youtube-vieodownloader.png'
import simpleblog from '../assets/img/simpleblog.png'
import knowledgekernel from '../assets/img/knowledgekernel.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const topprojects = [
      {
        title: "Cste Overflow",
        description: "It is just like stackoverflow",
        imgUrl: csteoverflow,
        url: "https://github.com/MdAshiqurRahmanZayed/CsteOverflow"
      },


      {
        title: "Blog",
        description: "It is a Blog site",
        imgUrl: zenblog,
        url: "https://github.com/MdAshiqurRahmanZayed/Blog"
      },
      {
        title: "Django Ecommerce ",
        description: "It is an Django Ecommerce Website",
        imgUrl: djangoeccomerce,
        url: "https://github.com/MdAshiqurRahmanZayed/DjangoEcommerce"
        
      },
      
      
    ];

  const projects = [
    {
      title: "Book Store",
      description: "Simple Book Store",
      imgUrl: bookstore,
      url: "https://github.com/MdAshiqurRahmanZayed/djangoTestingProject"
    },
    {
      title: "Youtube video downloader",
      description: "It is a Youtube video downloader",
      imgUrl: youtubevieodownloader,
      url: "https://github.com/MdAshiqurRahmanZayed/FunWithPython"
    },
    {
      title: "Simple Blog",
      description: "It is simple blog",
      imgUrl: simpleblog,
      url: "https://github.com/MdAshiqurRahmanZayed/djangoTestingProject"
    },
    
  ];

    const running = [{
        title: "Knowledge Kernel",
        description: "It is an E-learning Website",
        imgUrl: knowledgekernel,
        url: "https://github.com/MdAshiqurRahmanZayed/KnowledgeKernel"
      },
      

    ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br />
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Top Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Simple Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Running</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          topprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    < Tab.Pane eventKey = "second" >
                       <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                       <Row>
                        {
                          running.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
