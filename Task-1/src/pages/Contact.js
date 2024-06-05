import React from "react";
import { motion } from "framer-motion";
import { Button, Col, Row, ListGroup } from "react-bootstrap";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <p>If you'd like to get in touch, feel free to reach out:</p>
            <Button href="mailto:ajaywankhade666@gmail.com">Email Me</Button>
          </div>
        </Col>
        <Col>
          <div className="contact-data">
            <p>
              If you want to chat about a project — email me on
              ajaywankhade666@gmail.com
            </p>
            <p>
              I can help with designing websites, creating new products,
              improving existing products, building design systems, working with
              Webflow, or designing custom icon sets.
            </p>
            <p>
              Currently learning AWS cloud services — available for
              remote-friendly work.
            </p>
            <ListGroup horizontal>
              <ListGroup.Item>
                <a href="https://www.youtube.com/c/">Youtube </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a
                  href="https://www.linkedin.com/in/ajay-wankhade/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://www.instagram.com/7ajay_/">Instagram</a>
              </ListGroup.Item>
              <ListGroup.Item>
                <a href="https://twitter.com/">Twitter</a>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default Contact;
