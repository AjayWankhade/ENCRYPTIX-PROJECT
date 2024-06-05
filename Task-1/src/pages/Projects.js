import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import taxImg from "../images/tax-app.jpg";
import haierImg from "../images/haier.jpg";
import libImg from "../images/library.jpg";
import toDoImg from "../images/toDo.png";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Tax & investMent App (React-Native)",
      imageUrl: taxImg,
    },
    {
      id: 2,
      name: "Haier India Project (Java & ReactJS)",
      imageUrl: haierImg,
    },
    {
      id: 3,
      name: "Library management System",
      imageUrl: libImg,
    },
    {
      id: 4,
      name: "To Do App",
      imageUrl: toDoImg,
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
