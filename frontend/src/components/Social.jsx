import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import { ThemeContext } from 'styled-components';

const styles = {
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
};

function Social() {
  const theme = useContext(ThemeContext);
  const data = useSelector((state) => state?.data?.social);

  return (
    <div className="social">
      {data ? data?.map((social) => (
        <SocialIcon
          key={social.network}
          style={styles.iconStyle}
          url={social.href}
          network={social.network}
          bgColor={theme.socialIconBgColor}
          target="_blank"
          rel="noopener"
        />
      )) : null}
    </div>
  );
}

export default Social;
