import styled from 'styled-components';

export const SubHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 0fr 0fr;
  align-items: center;
  gap: 10rem;
  padding: 1.5rem 0;
  padding-left: 10.2rem;
  padding-right: 4rem;
  font-family: 'Roboto', sans-serif;
  color: #999999;
  font-weight: bold;

  @media (max-width: 600px) {
    display: none;
  }
`;
