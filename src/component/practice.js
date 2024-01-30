// SocialIcons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';

const SocialIcons = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faInstagram} size="2x" style={{ margin: '0 10px' }} />
      <FontAwesomeIcon icon={faFacebook} size="2x" style={{ margin: '0 10px' }} />
      <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ margin: '0 10px' }} />
      <FontAwesomeIcon icon={faGoogle} size="2x" style={{ margin: '0 10px' }} />
    </div>
  );
};

export default SocialIcons;
