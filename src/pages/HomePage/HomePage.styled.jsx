import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const HeaderContainer = styled.header`
  background-color: #0078d4;
  color: white;
  padding: 20px;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
`;

export const HeaderDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const ServicesContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

export const ServicesTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const ServicesDescription = styled.p`
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #0078d4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  animation: ${fadeIn} 1s ease-in-out;

  &:hover {
    background-color: #005499;
  }
`;
