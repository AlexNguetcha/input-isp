import React, { useEffect, useState, useMemo, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import './InputIsp.css';
import PHONE_NUMBER_ISP_REGEX from './PhoneNumberRegex';

interface InputIspProps {
  initialPhoneNumber?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  inputClassName?: string;
  containerClassName?: string;
}

export default function InputIsp({
  initialPhoneNumber = '',
  placeholder = 'phone number',
  onChange = () => {},
  inputClassName,
  containerClassName,
  ...props
}: InputIspProps) {
  const REMOTE_IMAGE_BASE_URL =
    'https://raw.githubusercontent.com/AlexNguetcha/input-isp/dev/src/assets/logo/';

  // Declare state variables
  const [detectedIsp, setDetectedIsp] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>(initialPhoneNumber);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Construct the URL for the ISP logo based on the detected ISP
  const ispLogo = `${REMOTE_IMAGE_BASE_URL}${(detectedIsp ?? '').toLowerCase()}.jpg`;

  // Memoize the result of detecting the ISP from the phone number
  const detectIsp = useMemo(() => {
    for (const isp in PHONE_NUMBER_ISP_REGEX) {
      if (PHONE_NUMBER_ISP_REGEX[isp].test(phoneNumber) === true) {
        return isp;
      }
    }
    return null;
  }, [phoneNumber]);

  // Update the detected ISP when the phone number changes
  useEffect(() => {
    setDetectedIsp(detectIsp);
  }, [detectIsp]);

  // Handle changes to the phone number input
  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    setPhoneNumber(event.target.value);
  };

  return (
    <div className={`InputIsp ${containerClassName ?? ''}`}>
      {/* Render the phone number input */}
      <input
        {...(inputClassName ? { className: inputClassName } : {})}
        type="tel"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder={placeholder}
        {...props}
      />

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
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        )}
      </div>
    </div>
  );
}

// Declare the prop types for the InputIsp component
InputIsp.propTypes = {
  initialPhoneNumber: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputClassName: PropTypes.string,
  containerClassName: PropTypes.string,
};

// Set default props for the InputIsp component
InputIsp.defaultProps = {
  initialPhoneNumber: '',
  placeholder: 'phone number',
  onChange: () => {},
  inputClassName: undefined,
  containerClassName: undefined,
};
