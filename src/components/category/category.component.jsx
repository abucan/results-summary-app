import React from 'react';
import Wrapper from './category.styles';

const Category = ({
  title,
  svgLogo,
  score,
  textColor,
  categoryColor,
}) => {
  return (
    <Wrapper>
      <div
        className='container'
        style={{ background: categoryColor }}
      >
        <div className='info'>
          <img src={svgLogo} alt={svgLogo} />
          <p className='category-title' style={{ color: textColor }}>
            {title}
          </p>
        </div>
        <div className='score-result'>
          <span>{score}</span>
          <p className='score'>/ 100</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Category;
