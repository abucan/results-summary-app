import styled from 'styled-components';

const ButtonContainer = styled.button`
  margin-top: 30px;
  min-width: 280px;
  width: auto;
  height: 50px;

  letter-spacing: 0.5;
  line-height: 50px;

  background: var(--dark-gray-blue);
  color: var(--white);
  text-transform: capitalize;
  font-weight: 700;
  border: none;
  border-radius: 128px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: linear-gradient(
      to bottom,
      hsl(252, 100%, 67%),
      hsl(241, 81%, 54%)
    );
  }

  @media (max-width: 660px) {
    margin-top: 0px;
    width: 90%;
  }
`;

export default ButtonContainer;
