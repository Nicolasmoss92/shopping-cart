import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #7159c1;
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-top: 8px;
  padding: 0;  
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
  width: 300px; 
  height: 45px;

  &:hover {
    background-color: #5639a3;
  }

  span {
    margin-left: 10px; 
  }
`;

export const CartIcon = styled.div`
  display: flex;
  align-items: center; 
  background-color: #4e38b4; 
  padding: 0px; 
  border-radius: 8px 0 0 8px;
  height: 100%; 
  min-width: 60px;

  img {
    margin-left: 5px;
    width: 20px; 
    height: 20px; 
  }
`;


export const Quantity = styled.span`
  position: absolute; 
  top: -5px;
  right: -10px; 
  background-color: white;
  color: #4e38b4;
  border-radius: 50%; 
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid #4e38b4; 
`;
