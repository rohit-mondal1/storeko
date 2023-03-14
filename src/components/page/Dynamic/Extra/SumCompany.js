import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import './Style.css'

const SumCompany = () => {
   const [data , setData] = useState([])
   useEffect(()=>{
    fetch('http://localhost:8000/marqe')
    .then(res => res.json())
    .then(dat => setData(dat))
    
   },[])

    return (
        <div className='my-10'>
            <Marquee direction="right" speed={100} delay={5}>
              {data.map(item=>
              <div key={item._id} className="image_wrapper">
            <a target='blank' href={item.link}>

            <img title={item.name} src={item.image} alt={item.name} />
            </a>
          </div> )}
          
          
        </Marquee>
        </div>
    );
};

export default SumCompany;