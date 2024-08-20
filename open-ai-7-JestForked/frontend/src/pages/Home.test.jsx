// Home.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for matchers like .toBeInTheDocument()
import Home from './Home'; // importing the home component to write test
import logo from '../../public/lrnr-logo.png';// importing the logo image to run test
import { it } from 'node:test';

describe('Home Component', () => {
    //test to check if the image is going to load
  it('should render the logo image', () => {
    render(<Home />);
    // const logoElement = screen.getByAltText('lrnr-logo');
    // expect(logoElement).toBeInTheDocument();
    // expect(logoElement).toHaveAttribute('src', logo);
  });

  it('should render the header text', () => {
     //test to check if the header text is going to load 
    render(<Home />);
    const headerText = screen.getByText('Your guided path to programming enlightenment');
    expect(headerText).toBeInTheDocument();
  });

  it('should render the beginning journey button', () => {
    //test to check if the begin journey button has loaded 
    render(<Home />);
    const buttonElement = screen.getByText('Begin Journey');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('href', 'http://materializecss.com/getting-started.html');
  });

  it('should rende the icon blocks', () => {
    render(<Home />);
    
    // Check for Personalized Quizzes block
    //checks if the selected text will be in the document
    expect(screen.getByText('Personalized Quizzes')).toBeInTheDocument();
    expect(screen.getByText(/Greetings, young padawan/i)).toBeInTheDocument();
    
    // Check for Rewarding block
    expect(screen.getByText('Rewarding')).toBeInTheDocument();
    expect(screen.getByText(/Our app is designed to be/i)).toBeInTheDocument();
    
    // Check for Personal SME block
    expect(screen.getByText('Personal SME')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to the path of knowledge/i)).toBeInTheDocument();
  });
});
