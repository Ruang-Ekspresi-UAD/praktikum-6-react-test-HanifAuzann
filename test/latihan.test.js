import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Counter Component', () => {
  test('Counter Default Value must be 0', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    expect(countValue).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');

    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent('1');
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const decrementButton = screen.getByTestId('decrement-button');

    fireEvent.click(decrementButton);
    expect(countValue).toHaveTextContent('-1');
  });

  test('Reset the count using reset button', () => {
    render(<Counter />);
    const countValue = screen.getByTestId('counter-value');
    const incrementButton = screen.getByTestId('increment-button');
    const resetButton = screen.getByTestId('reset-button');

    fireEvent.click(incrementButton); 
    fireEvent.click(resetButton);    
    expect(countValue).toHaveTextContent('0');
  });
});

describe('Greeting component nama', () => {
  test('Greeting component', () => {
    render(<Greeting name="Hanif" />); 
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toHaveTextContent('Halo, Hanif');
  });

  test('Greeting component nama dosen', () => {
    render(<Greeting name="Pak Farid" />); 
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toHaveTextContent('Halo, Pak Farid');
  });
});

describe('AlertButton Component', () => {
  test('Triggers alert with correct message when clicked', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});  
    render(<AlertButton message="Test bang" />);

    const alertButton = screen.getByTestId('alert-button');
    fireEvent.click(alertButton);

    expect(alertSpy).toHaveBeenCalledWith('Test bang'); 
    alertSpy.mockRestore(); 
  });
});
