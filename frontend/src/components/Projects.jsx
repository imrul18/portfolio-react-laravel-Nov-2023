import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { ThemeContext } from 'styled-components';
import FallbackSpinner from './FallbackSpinner';
import Header from './Header';
import ProjectCard from './projects/ProjectCard';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
};

const Projects = (props) => {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const data = useSelector((state) => state?.data?.projects);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (data?.length > 3) {
      setShowMore(true);
    }
  }, [data]);
  const numberOfItems = !showMore && data ? data.length : 3;
  return (
    <>
      <Header title={header} />
      {data
        ? (
          <div className="section-content-container">
            <Container style={styles.containerStyle}>
              <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {data?.slice(0, numberOfItems).map((project) => (
                  <Fade key={project.title}>
                    <ProjectCard project={project} />
                  </Fade>
                ))}
              </Row>

              {showMore
                && (
                <Button
                  style={styles.showMoreStyle}
                  variant={theme.bsSecondaryVariant}
                  onClick={() => setShowMore(false)}
                >
                  show more
                </Button>
                )}
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;
