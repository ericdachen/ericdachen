import React from 'react';
import ReactDOM from 'react-dom';
import './home.scss'
import homeImage from '../assets/IMG_4583.png';

function HomePage(props) {
    return (
        <div className = "homeImage" >
            <img className = "homeImage" src={homeImage} alt="Me at a HOSA Conference"/>
        </div>
    )
}

export default HomePage;