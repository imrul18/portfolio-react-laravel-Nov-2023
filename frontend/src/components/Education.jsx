import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Chrono } from 'react-chrono';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal';
import { ThemeContext } from 'styled-components';
import '../css/education.css';
import FallbackSpinner from './FallbackSpinner';
import Header from './Header';

function Education(props) {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const data = useSelector((state) => state?.data?.education);
  const [width, setWidth] = useState('50vw');
  const [mode, setMode] = useState('VERTICAL_ALTERNATING');

  useEffect(() => {
    if (window?.innerWidth < 576) {
      setMode('VERTICAL');
    }

    if (window?.innerWidth < 576) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 576 && window?.innerWidth < 768) {
      setWidth('90vw');
    } else if (window?.innerWidth >= 768 && window?.innerWidth < 1024) {
      setWidth('75vw');
    } else {
      setWidth('50vw');
    }
  }, []);

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div style={{ width }} className="section-content-container">
            <Container>
              <Chrono
                hideControls
                allowDynamicUpdate
                useReadMore={false}
                items={data}
                cardHeight={250}
                mode={mode}
                theme={{
                  primary: theme.accentColor,
                  secondary: theme.accentColor,
                  cardBgColor: theme.chronoTheme.cardBgColor,
                  cardForeColor: theme.chronoTheme.cardForeColor,
                  titleColor: theme.accentColor,
                }}
              >
                <div className="chrono-icons">
                  {data?.map((education) => (education.icon ? (
                    <img
                      key={education.icon}
                      src={education.icon}
                      alt={education.icon}
                      style={{ width: 50, height: 50 }}
                    />
                  ) : null))}
                </div>
              </Chrono>
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

Education.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Education;
