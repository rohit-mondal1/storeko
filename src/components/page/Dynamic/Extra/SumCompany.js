import React from 'react';
import Marquee from 'react-fast-marquee';
import './Style.css'

const SumCompany = () => {
    return (
        <div>
            <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper">
            <a target='blank' href="/google.com">

            <img src="https://i.ibb.co/gyRyJ6k/download.jpg" alt="" />
            </a>
          </div>
          
        </Marquee>
        </div>
    );
};

export default SumCompany;