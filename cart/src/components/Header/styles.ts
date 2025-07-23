import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: black;
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1075px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center; 

  .tenis-logo {
    height: 35px; 
    margin-left: 5px;
    
  img {
    height: 30px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 25px;
    }
  }
`;

export const CardStyle = styled.div`
  display: flex;
  align-items: center;
  color: white;

  div:first-child {
    display: flex;
    flex-direction: column;
    margin-right: 8px;
  }

  .link {
    text-decoration: none;
  }

  .title {
    font-size: 1.125rem;
    font-weight: bold;
    color: white;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  .items {
    font-size: 0.75rem;
    color: #a3a3a3;
    right: 0;

    @media (max-width: 768px) {
      font-size: 0.6875rem;
    }
  }

  svg {
    margin-left: 8px;
    color: white;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const CartNumber = styled.span`
  margin-left: 8px;
  color: white;
  font-weight: bold;

  @media (max-width: 768px) {
    display: block;
  }
`;
