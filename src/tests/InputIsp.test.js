import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputIsp from '../components/InputIsp';


describe('InputIsp', () => {
  it('renders an input element', () => {
    const { getByRole } = render(<InputIsp />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('renders an empty input element by default', () => {
    const { getByRole } = render(<InputIsp />);
    const input = getByRole('textbox');
    expect(input).toHaveValue('');
  });

  it('calls the onChange function when the input value changes', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<InputIsp onChange={handleChange} />);
    const input = getByRole('textbox');
    const newValue = '+237651234567';
    fireEvent.change(input, { target: { value: newValue } });
    expect(handleChange).toHaveBeenCalledWith(newValue);
  });
});
