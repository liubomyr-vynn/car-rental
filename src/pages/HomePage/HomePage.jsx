import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderDescription,
  Container,
  ServicesContainer,
  ServicesTitle,
  ServicesDescription,
  Button,
} from './HomePage.styled';

const HomePage = () => {
  const [backgroundColor, setBackgroundColor] = useState('#0078d4');

  const changeBackgroundColor = () => {
    const newColor = backgroundColor === '#0078d4' ? '#ff9900' : '#0078d4';
    setBackgroundColor(newColor);
  };

  return (
    <div>
      <HeaderContainer style={{ backgroundColor }}>
        <HeaderTitle>Welcome to our car rental app</HeaderTitle>
        <HeaderDescription>
          We offer a wide range of car rental services at affordable prices.
        </HeaderDescription>
        <Button onClick={changeBackgroundColor}>Change Background</Button>
      </HeaderContainer>
      <Container>
        <ServicesContainer>
          <ServicesTitle>Our Services</ServicesTitle>
          <ServicesDescription>
            Our company provides the following services:
          </ServicesDescription>
          <ul>
            <li>Rental of cars of any class and make.</li>
            <li>Delivery of the car to your location.</li>
            <li>Car and passenger insurance.</li>
            <li>24/7 customer support.</li>
          </ul>
        </ServicesContainer>
      </Container>
    </div>
  );
};

export default HomePage;
