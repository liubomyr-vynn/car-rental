// import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AppBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  min-height: 40px;

  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  background-color: #858586ea;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
`;

export const HeaderList = styled.div`
  display: flex;
`;
