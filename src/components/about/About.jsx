import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2a.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
        <h2 className="section__title">About Me</h2>
    
        <div className="about__container grid">
            <img src={Image} alt="Karthik Veerla" className="about__img" />
    
            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">
                        Hello! I'm Karthik Veerla, a passionate Software Developer based in New York, United States.
                        I hold a Master’s degree in Computer and Information Sciences from the University at Albany (SUNY) and a Bachelor's from KLUniversity in India.<br /><br />
                        With over 4 years of hands-on experience, I specialize in building full-stack applications using Java, Spring Boot, React, Angular, and Node.js. I’m passionate about designing scalable systems using microservices and RESTful APIs, and thrive in Agile environments where innovation meets collaboration.<br /><br />
                        <br /><br />
                    </p>
    
                    <button className="btn" onClick={downloadResume}>Download CV</button>
                </div>
                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About