import React from 'react';
import InputIsp from '../components/InputIsp';
import '@testing-library/jest-dom'
import {render, fireEvent, screen, waitFor} from '@testing-library/react';

describe('InputIsp', () => {
  test('renders an input element', () => {
    const { getByRole } = render(<InputIsp />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('renders an empty input element by default', () => {
    const { getByRole } = render(<InputIsp />);
    const input = getByRole('textbox');
    expect(input).toHaveValue('');
  });

  test('calls the onChange function when the input value changes', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<InputIsp onChange={handleChange} />);
    const input = getByRole('textbox');
    const newValue = '+237651234567';
    fireEvent.change(input, { target: { value: newValue } });
    expect(handleChange).toHaveBeenCalledWith(newValue);
  });

  test('renders the logo when the ISP is detected', () => {
    const { getByAltText } = render(<InputIsp initialPhoneNumber="+237695904403" />);
    const logoElement = getByAltText(/logo/);
    expect(logoElement).toBeInTheDocument();
  });

});
