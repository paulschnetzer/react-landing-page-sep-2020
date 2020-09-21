import React from 'react';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import apple from './pictures/buttonapple.svg';
import onephone from './pictures/singlephone.png';
import twophone from './pictures/twophones.png';
import threephone from './pictures/threephones.png';

const centeredContainerStyles = css`
  margin: 0 auto;
  padding: 32px;
  max-width: 1440px;
  padding: 32px;
`;

const firstSection = css`
  ${centeredContainerStyles};
  height: 728px;
`;

const h1 = css`
  font-size: 48px;
  margin: 0px;
`;

const img = css`
  width: 1280px;
  vertical-align: middle;
  z-index: -1;
`;

const h2 = css`
  position: absolute;
  margin-top: 415px;
  font-size: 23px;
  line-height: 200%;
  font-weight: 300;
`;

const buttonwrapper = css`
  position: absolute;
  top: 555px;
  right: 44px;

  img {
    width: 157px;
    padding-bottom: 6px;
  }
`;

const secondSection = css`
  ${centeredContainerStyles};
  height: 1370px;
  background-color: black;
  padding-top: 528px;
  p {
    color: white;
    width: 66%;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }
  img {
    width: 1280px;
    margin-top: 100px;
  }
`;
const thirdSection = css`
  ${centeredContainerStyles};
  margin-top: 700px;
  height: 755px;
  p {
    width: 66%;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }
  h1 {
    font-size: 34px;
    margin-bottom: -8px;
    padding-bottom: 0px;
  }
  img {
    width: 1280px;
    margin-top: 50px;
  }
`;
const footer = css`
  ${centeredContainerStyles};
  background-color: black;
  padding-top: 500px;
  display: flex;
  justify-content: space-between;

  p {
    width: 66%;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    color: white;
  }
  button {
    display: block;
    align-items: right;
  }
`;
function App() {
  return (
    <div>
      <header css={firstSection}>
        <h1 css={h1}>Calmaria</h1>
        <div css={h2}>
          <h2>
            Focus /<br />
            Breathe / <br />
            Relax /
          </h2>
        </div>

        <div css={buttonwrapper}>
          <a href="#a" alt="button">
            <img src={apple} />
          </a>
          <br />
          <a href="#a" alt="button">
            <img src={apple} />
          </a>
        </div>
        <img src={onephone} css={img} />
      </header>
      <main>
        <section css={secondSection}>
          <p>
            Access to information has helped us evolve rapidly but not without
            side effects. Misinformation and the strong polarization of opinions
            are amplified by our confirmation bias tendencies. What to believe,
            who is right, who is wrong?
            <br />
            <br />
            Questions with no answers inevitably create anxiety. The good news
            is that there is a simple way to reduce it, just breathe. It works!
            <br />
            <br />
            There are several different breathing techniques and exercises that
            are designed to bring your body to a deep relaxation state. Holding
            your breath for a period of time allows your body to better
            oxygenate. One of the simplest techniques is the 4-7-8 method which
            is simply inhaling for 4 seconds, holding your breath for 7 seconds
            and exhaling for 8 seconds.
            <br />
            <br />
          </p>
          <img src={threephone} />
        </section>
        <section css={thirdSection}>
          <h1>Calmaria</h1>
          <p>[ feminine ] /kɑʊma’ɾia/</p>
          <p>
            In Portuguese means calmness, tranquility, calm. It’s often used by
            seamen and surfers to indicate that there are no waves in the ocean.
            That mood perfectly translates to what this app intends to do, bring
            peace of mind and tranquility to your busy day to day life. Just
            breathe and relax.
          </p>
          <img src={twophone} />
        </section>
      </main>
      <footer css={footer}>
        <div>
          <p>Available for</p>
          <a href="#a">Android</a>
          <a href="#a">iOS</a>
          <a href="#a">PWA Progressive Web App</a>
          <p>
            Proudly designed and developed by the folks over at{' '}
            <a href="#a">abdz.do</a>
          </p>
        </div>
        <div>
          <a href="#a" alt="button">
            <img src={apple} alt="" />
          </a>
          <br />
          <a href="#a" alt="button">
            <img src={apple} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
