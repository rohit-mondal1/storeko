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
            home
            <ProAccound/>
            <SumCompany/>
        </div>
    );
};

export default Home;