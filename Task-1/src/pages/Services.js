import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/project1.jpg";
import frontEnd from "../images/frontend.png";
import backEnd from "../images/backend.jpg";
import native from "../images/native.jpg";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      name: "Front-end",
      imageUrl: frontEnd,
      description:
        "Worked on building various websites and web apps using ReactJs, Typescript. Created high-performance websites with blazing fast speed.",
    },
    {
      id: 2,
      name: "Web Application Development",
      imageUrl: project1,
      description:
        "Developed web applications using modern technologies. Utilized frameworks like ReactJs, and built robust and scalable applications.",
    },
    {
      id: 3,
      name: "Back-end",
      imageUrl: backEnd,
      description:
        "Implemented backend solutions for web applications using NodeJs, Express, and other technologies. Designed APIs and managed databases.",
    },
    {
      id: 4,
      name: "Mobile-app development",
      imageUrl: native,
      description:
        "Built mobile apps using Expo, created various screen UI and functionality in my projects. Used React Native for cross-platform development.",
    },
  ];

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <div className="services">
        <h2>Services</h2>
        <div className="wrapper">
          {serviceList.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, ease: "easeInOut" },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
              >
                <Card>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title>
                      <strong>{item.name}</strong>
                    </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
