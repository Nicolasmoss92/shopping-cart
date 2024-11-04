import styled from 'styled-components';

export const SummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem; 
  width: 96%;
  max-width: 68.75rem;
  margin: 0 auto;
  background-color: white;
  border-radius: 0.5rem; 
  margin-top: -0.625rem;

  @media (max-width: 48rem) { 
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TotalText = styled.span`
  font-size: 1.5rem; 
  font-weight: bold;
  color: black;
  margin-left: auto;
  display: flex;
  align-items: center;

  .label {
    font-size: 1rem; 
    margin-top: 0.375rem; 
    margin-right: -0.4375rem; 
    color: #999999;
  }

  .value {
    color: #333333; 
    margin-left: 0.5rem; 
  }

  @media (max-width: 48rem) {
    font-size: 1.25rem; 

    .label {
      font-size: 0.875rem; 
    }
  }
`;
