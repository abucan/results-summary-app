import styled from 'styled-components';

const CategoryWrapper = styled.section`
  width: 100%;
  height: 50px;
  background: var(--primary-light-red);
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 10px;
  margin-top: 20px;

  .info {
    display: flex;
    align-items: center;
    gap: 10px;
    color: red;
  }

  .score-result {
    display: flex;
    align-items: center;
  }

  span {
    color: var(--dark-gray-blue);
    opacity: 1;
    font-weight: 700;
    padding-right: 5px;
  }

  .score {
    color: var(--dark-gray-blue);
    font-weight: 700;
    opacity: 0.5;
  }

  @media (max-width: 660px) {
    margin-top: 0px;
    width: 90%;
  }
`;

export default CategoryWrapper;
