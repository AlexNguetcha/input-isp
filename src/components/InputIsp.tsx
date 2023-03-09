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

    const [detectedIsp, setDetectedIsp] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber);

    const detectIsp = useMemo(() => {
        for (const isp in PHONE_NUMBER_ISP_REGEX) {
            if (PHONE_NUMBER_ISP_REGEX[isp].test(phoneNumber) === true) {
                return isp;
            }
        }
        return null;
    }, [phoneNumber, PHONE_NUMBER_ISP_REGEX]);

    useEffect(() => {
        setDetectedIsp(detectIsp);
    }, [detectIsp]);

    const handlePhoneNumberChange = (event) => {
        onChange(event.target.value)
        setPhoneNumber(event.target.value);
    };
    const [isLoading, setIsLoading] = useState(true);
    const ispLogo = `${REMOTE_IMAGE_BASE_URL}${(detectedIsp ?? '').toLowerCase()}.jpg`;


    return (
        <div className={"InputIsp" + (` ${containerClassName}` ?? "")}>
            <input {...(inputClassName ? { className: inputClassName } : {})} type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
            <div className="InputIsp__Logo">
                {detectIsp !== null && isLoading && <Loader />}
                {detectedIsp && <img
                    onLoad={() => setIsLoading(false)}
                    onError={() => setIsLoading(false)}
                    src={ispLogo}
                    alt={`${detectedIsp} logo`}
                    title={detectedIsp}
                    style={{ display: isLoading ? "none" : "block" }}
                />}

            </div>
        </div>
    );
}

InputIsp.propTypes = {
    initialPhoneNumber: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    inputClassName: PropTypes.string,
    containerClassName: PropTypes.string
};

InputIsp.defaultProps = {
    onChange: (value) => { }
}
