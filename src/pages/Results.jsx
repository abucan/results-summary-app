import { Wrapper } from './results.styles';
import Category from '../components/category/category.component';
import Button from '../components/button/button.component';

import data from '../data';

const Results = () => {
  return (
    <Wrapper className='full-page'>
      <div className='box'>
        <div className='box-1'>
          <h6>Your Result</h6>
          <div className='circle'>
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <h5>Great</h5>
          <p className='analyze-text'>
            You scored higher than 65% of the people who have taken
            these tests.
          </p>
        </div>
        <div className='box-2'>
          <div className='title-box'>
            <h6 className='title'>Summary</h6>
          </div>
          {data.map((category) => {
            return (
              <Category
                key={category.category}
                title={category.category}
                svgLogo={category.icon}
                score={category.score}
                textColor={category.textColor}
                categoryColor={category.backgroundColor}
              />
            );
          })}
          <Button />
        </div>
      </div>
    </Wrapper>
  );
};

export default Results;
