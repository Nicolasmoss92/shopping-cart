import styled from 'styled-components';

// SubHeaderWrapper
export const SubHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;  
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  font-weight: bold;
  border-bottom: 2px solid #eee;
  padding: 10px 0;

  span {
    text-align: center;  
  }
`;

