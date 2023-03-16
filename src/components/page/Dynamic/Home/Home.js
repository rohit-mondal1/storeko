import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SumCompany from '../Extra/SumCompany';
import ProAccound from '../ProAccound/ProAccound';

const Home = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch()
    console.log(state);
    return (
        <div>
           
            <ProAccound/>
            <div className='my-12 '>
                <div>
                    <h1 className='text-4xl font-semibold leading-tight' >Your Choice</h1>
                </div>

            <SumCompany/>
            </div>
        </div>
    );
};

export default Home;