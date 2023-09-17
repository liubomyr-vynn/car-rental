import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 29px;
  margin-bottom: 100px;
`;

export const LoadMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const LoadMoreBtn = styled.button`
  width: 274px;
  padding: 12px 0;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: #5a7aaf;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 18px;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #445c84;
  }

  @media (min-width: 768px) {
    margin-top: 24px;
  }
  @media (min-width: 1440px) {
    margin-top: 28px;
  }
`;
