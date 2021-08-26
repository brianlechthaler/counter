import styled from 'styled-components';

const BigBlueButton = styled.button`
  display: block;
  padding: 20px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  color: #fff;
  background-color: #0077cc;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    background-color: #005fa3
  }
`;

export default BigBlueButton;