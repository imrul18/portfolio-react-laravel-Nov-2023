import PropTypes from "prop-types";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
    display: "flex",
  },
};

function About(props) {
  const { header } = props;
  const data = useSelector((state) => state?.data?.about);

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
                  <Button
                    href={data?.resume}
                    variant="outline"
                    className="btn btn-outline-success"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Resume
                  </Button>
                </Col>
                <Col style={styles.introImageContainer}>
                  <img src={data?.imageSource} alt="profile" />
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

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
