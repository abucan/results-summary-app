import styled from 'styled-components';

export const Title = styled.h6`
  font-size: var(--heading-m);
  color: var(--dark-gray-blue);

  @media (max-width: 660px) {
    justify-self: center;
  }
`;

export const Wrapper = styled.section`
  .container {
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
  }

  .box {
    background: var(--white);
    box-shadow: var(--shadow-1);
    border-radius: 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .box-1 {
    padding: 35px;
    background: linear-gradient(
      to bottom,
      hsl(252, 100%, 67%),
      hsl(241, 81%, 54%)
    );
    border-radius: 32px;
    display: grid;
    place-items: center;
  }

  .box-2 {
    padding: 35px;
    background: var(--white);
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
    display: grid;
    align-items: center;
    justify-items: start;
  }

  .circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
      to bottom,
      hsla(256, 72%, 46%, 1),
      hsla(241, 72%, 46%, 0)
    );
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .circle h1 {
    color: var(--white);
    font-size: var(--heading-xl);
    font-weight: 800;
  }

  .circle p {
    color: var(--light-lavender);
    line-height: 1.25rem;
    opacity: 0.51;
  }

  .box-1 h6 {
    font-family: var(--main-font);
    font-size: var(--heading-m);
    font-weight: 500;
    color: var(--light-lavender);
    margin-bottom: 1.5rem;
  }

  .box-1 h5 {
    margin-top: 1.75rem;
    margin-bottom: 0.5rem;
    color: var(--white);
    font-weight: 500;
    font-size: var(--heading-l);
  }

  .analyze-text {
    color: var(--light-lavender);
    line-height: 1.2rem;
    font-weight: 300;
  }

  @media (max-width: 660px) {
    .container {
      grid-template-columns: 1fr;
      align-items: stretch;
    }

    .box {
      grid-template-columns: 1fr;
    }

    .box-2 {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      justify-items: center;
      padding: 20px;
    }

    .box-1 {
      border-radius: 0px;
      border-bottom-right-radius: 32px;
      border-bottom-left-radius: 32px;
      padding: 20px;
    }

    .box-1 h6 {
      font-size: var(--mobile-heading-m);
    }

    .circle h1 {
      font-size: var(--mobile-heading-xl);
    }

    .circle p {
      font-size: var(--mobile-p);
    }

    .circle {
      width: 160px;
      height: 160px;
    }

    .box-1 h5 {
      font-size: var(--mobile-heading-l);
    }

    .analyze-text {
      font-size: var(--mobile-p);
    }

    .box-2 h6 {
      font-size: var(--mobile-heading-m);
    }

    .box-2 p,
    span {
      font-size: var(--mobile-p);
    }
  }
`;
