import React from 'react';
import { FaGithub, FaLinkedinIn, FaHackerrank, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";


const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/karthikveerla' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://leetcode.com/u/veerlakarthik/' className='home__social-link' target='_blank' rel='noreferrer'>
            <SiLeetcode />
            </a>

            <a href='https://www.hackerrank.com/profile/s5_31371' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaHackerrank />
            </a>

            <a href='https://www.linkedin.com/in/karthikveerla/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>
            <a href="mailto:karthikveerla28@gmail.com" className="home__social-link" target="_blank" rel="noreferrer">
                <FaEnvelope />
            </a>
        </div>
    );
};

export default HeaderSocials;
