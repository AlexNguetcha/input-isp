import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import './InputIsp.css';

export default function InputIsp({ initialPhoneNumber, onChange, inputClassName, containerClassName }) {
  const PHONE_NUMBER_ISP_REGEX = {
    ORANGE_CM: /^\+2376(55|56|57|58|59|9\d{1})\d{6}$/,
    MTN_CM: /^\+2376(50|51|52|53|54|80|81|82|83|7\d{1})\d{6}$/,
    CAMTEL_CM: /^\+237620\d{6}$/,
  };
  const REMOTE_IMAGE_BASE_URL = 'https://raw.githubusercontent.com/AlexNguetcha/input-isp/dev/src/assets/logo/'

  // Declare state variables
  const [detectedIsp, setDetectedIsp] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize the result of detecting the ISP from the phone number
  const detectIsp = useMemo(() => {
    for (const isp in PHONE_NUMBER_ISP_REGEX) {
      if (PHONE_NUMBER_ISP_REGEX[isp].test(phoneNumber) === true) {
        return isp;
      }
    }
    return null;
  }, [phoneNumber, PHONE_NUMBER_ISP_REGEX]);

  // Update the detected ISP when the phone number changes
  useEffect(() => {
    setDetectedIsp(detectIsp);
  }, [detectIsp]);

  // Handle changes to the phone number input
  const handlePhoneNumberChange = (event) => {
    onChange(event.target.value)
    setPhoneNumber(event.target.value);
  };

  // Construct the URL for the ISP logo based on the detected ISP
  const ispLogo = `${REMOTE_IMAGE_BASE_URL}${(detectedIsp ?? '').toLowerCase()}.jpg`;

  return (
    <div className={"InputIsp" + (` ${containerClassName}` ?? "")}>
      {/* Render the phone number input */}
      <input {...(inputClassName ? { className: inputClassName } : {})} type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />

      {/* Render the ISP logo, with a loader if it is still loading */}
      <div className="InputIsp__Logo">
        {detectIsp !== null && isLoading && <Loader />}
        {detectedIsp && (
          <img
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
            src={ispLogo}
            alt={`${detectedIsp} logo`}
            title={detectedIsp}
            style={{ display: isLoading ? "none" : "block" }}
          />
        )}
      </div>
    </div>
  );
}

// Declare the prop types for the InputIsp component
InputIsp.propTypes = {
  initialPhoneNumber: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  inputClassName: PropTypes.string,
  containerClassName: PropTypes.string
};

// Set default props for the InputIsp component
InputIsp.defaultProps = {
  onChange: (value) => { }
};
