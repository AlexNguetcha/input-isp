# InputIsp

[![npm version](https://badge.fury.io/js/input-isp.svg)](https://badge.fury.io/js/input-isp)
[![codecov](https://codecov.io/gh/AlexNguetcha/input-isp/branch/dev/graph/badge.svg?token=BQRXXYCNAY)](https://codecov.io/gh/AlexNguetcha/input-isp)
[![Build Status](https://github.com/alexnguetcha/input-isp/actions/workflows/test.yml/badge.svg)](https://github.com/alexnguetcha/input-isp/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A React component that renders an input field for phone numbers and detects the Internet Service Provider (ISP) of the entered phone number. The detected ISP logo is displayed next to the input field, and a loader is shown while the ISP is being detected.

[Documentation](https://6409bed9d3031a41d0455a0d-ftcvpzzxsh.chromatic.com/)

## Installation

You can install the package using `npm` or `yarn`:

```
npm i input-isp
````
```
yarn add input-isp
````

## Usage

To use the `InputIsp` component in your React project, import it and use it as follows:

```jsx
import InputIsp from 'input-isp';

function MyComponent() {
  const handlePhoneNumberChange = (phoneNumber) => {
    console.log('Phone number changed:', phoneNumber);
  };

  return (
    <InputIsp
      initialPhoneNumber="+237695904403"
      onChange={handlePhoneNumberChange}
      inputClassName="my-input"
      containerClassName="my-container"
    />
  );
}


```


# The component accepts the following props:

* **initialPhoneNumber (required)**: a string representing the initial phone number to be displayed in the input field.

* **onChange**: a function that will be called whenever the phone number in the input field changes. It receives the new phone number as a parameter.

* **inputClassName**: a string representing the CSS class name(s) to be applied to the input element.

* **containerClassName**: a string representing the CSS class name(s) to be applied to the container div element.

# License
This package is licensed under the MIT License.