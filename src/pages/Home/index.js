import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
import Logo from '../../assets/frameworkLogo.png';

const Home = () => {
    return (
        <div className="main">
            <div className="content container">
                <div className="logo">
                    <img src={Logo}
                        title="framework padawans 2020"
                        alt="framework padawans 2020"
                        className="header-image" />
                </div>
                <div className="options">
                    <div className="options-div">
                    <Link to="/posts"><button className="btn-block options-button">Entrar</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;