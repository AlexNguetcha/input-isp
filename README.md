# InputIsp

A React component that renders an input field for phone numbers and detects the Internet Service Provider (ISP) of the entered phone number. The detected ISP logo is displayed next to the input field, and a loader is shown while the ISP is being detected.

## Installation

You can install the package using `npm` or `yarn`:

```
npm i input-isp
````
```
yarn i input-isp
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