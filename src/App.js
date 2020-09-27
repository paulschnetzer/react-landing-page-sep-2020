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
`;

const firstSection = css`
  ${centeredContainerStyles};
  height: 700px;

  a {
    position: relative;
    display: inline;
    left: 87%;
    top: 470px;
    @media (max-width: 1280px) {
      left: 70%;
    }
    @media (max-width: 770px) {
      top: 25px;
      left: 80%;
    }

    img {
      width: 157px;
      padding-bottom: 8px;
      @media (max-width: 770px) {
        width: 100px;
      }
    }
  }
`;

const h1 = css`
  font-size: 48px;
  margin: 0px;
  @media (max-width: 770px) {
    font-size: 32px;
  }
`;
const picturecontainer = css`
  width: 100%;
  overflow: hidden;
  margin-top: -140px;
  position: relative;
  @media (max-width: 770px) {
    width: 100%;
    margin-top: 0px;
  }
  img {
    width: 100%;
    position: relative;
    @media (max-width: 770px) {
      width: 180%;
      margin-left: -250px;
      margin-top: 100px;
    }
  }
`;

const h2 = css`
  position: absolute;
  margin-top: 415px;
  font-size: 23px;
  line-height: 200%;
  font-weight: 300;
  @media (max-width: 770px) {
    margin-top: 0px;
    font-size: 16px;
  }
`;

const secondSection = css`
  ${centeredContainerStyles};
  height: 1440px;
  background-color: black;
  padding-top: 595px;
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
    @media (max-width: 1440px) {
      width: 100%;
    }
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
    opacity: 0.95;
  }
  h1 {
    font-size: 34px;
    margin-bottom: -8px;
    padding-bottom: 0px;
    opacity: 0.95;
  }
  img {
    width: 1280px;
    margin-top: 50px;
    @media (max-width: 1440px) {
      width: 100%;
      min-width: 0px;
    }
  }
`;
const footer = css`
  ${centeredContainerStyles};
  background-color: black;
  padding-top: 450px;
  display: flex;
  justify-content: space-between;

  p {
    width: 66%;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
    color: white;
    margin-bottom: 27px;
  }

  p:nth-child(3) {
    font-size: 14px;
    display: inline;
    opacity: 0.5;

    a {
      border-bottom: solid yellow 2px;
      text-decoration: none;
      color: white;
    }
  }
  a {
    img {
      margin-top: 55px;
      margin-right: 12px;
      width: 157px;
      margin-bottom: -35px;
    }
  }
`;
const linkbox = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 52px;
  a {
    color: white;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 23px;
    border-bottom: solid yellow 2px;
    display: block;
    text-decoration: none;
    margin-right: auto;
  }
`;
//##########MEDIA QUERY###########

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

        <a href="#a" alt="button">
          <img src={apple} />
        </a>
        <br />
        <a href="#a" alt="button">
          <img src={apple} />
        </a>

        <div css={picturecontainer}>
          <img src={onephone} />
        </div>
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
          <div css={linkbox}>
            <a href="#a">Android</a>
            <a href="#a">iOS</a>
            <a href="#a">PWA Progressive Web App</a>
          </div>
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
