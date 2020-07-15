import React from 'react';
import HomePic from '../img/Logo-removebg-preview.png';

const Home = () => {
    return (
        <div className="container">
            <h4 className="center">Home</h4>
            <img src={HomePic} width="300" height="300" class="center"></img>
            <h1>Welcome to ElectroLife</h1>
            <br />
            <h4>Homebase of Electronics</h4>
        </div>
    )
}

export default Home