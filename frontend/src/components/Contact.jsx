import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import Fade from "react-reveal";
import FallbackSpinner from "./FallbackSpinner";
import Header from "./Header";

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: "column",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    fontSize: "1.2em",
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    // display: "flex",
  },
};

function Contact(props) {
  const { header } = props;
  const data = useSelector((state) => state?.data?.contact);

  const parseIntro = (text) => <ReactMarkdown children={text} />;

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data ? (
            <Fade>
              <Row>
                <Col style={styles.introTextContainer}>
                  {parseIntro(data.about)}
                </Col>
                <Col style={styles.introImageContainer}>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control mb-2"
                  />

                  <input
                    type="text"
                    placeholder="Phone"
                    className="form-control mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="form-control mb-2"
                  />

                  <textarea
                    type="text"
                    rows={4}
                    placeholder="Message"
                    className="form-control mb-2"
                  />
                </Col>
              </Row>
            </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
    </>
  );
}

Contact.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Contact;
