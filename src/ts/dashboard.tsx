import React from 'react';
import logo from '../images/Anapur-Ag-Logo.png'
import '../css/style.css';

const Dashboard = () => {

    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt="Logo Image"/>
                </div>

                <ul className="nav-links">
                    <li><a href="#">Ranking</a></li>
                    <li><a href="#">Lorem ipsum</a></li>
                    <li><a href="#">Lorem ipsum</a></li>
                    <li><a href="#">Lorem ipsum</a></li>
                    <li><a href="#">Lorem ipsum</a></li>
                </ul>
            </nav>
            <a className=" button" href="/Dashboard/arrange">Go to GameModi</a>
        </>
    );
}

export default Dashboard;
