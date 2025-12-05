import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-a1.png';
import HeaderSocials from './HeaderSocials';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
  <div className="intro flex-container">
    <div className="intro-text">
      <h1 className="home__name">Karthik Veerla</h1>
      <span className="home__education">I'm a Full-Stack Software Developer</span>
      <HeaderSocials />
      <a href="#contact" className="btn">Contact Me</a>
    </div>

    <img src={Me} alt="Profile" className="home__img rounded-full animated-img" width="140" />
  </div>

  <Shapes />
</section>
    )
}

export default Home