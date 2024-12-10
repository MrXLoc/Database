import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import user from '../../images/user.png';
import arrowDown from '../../images/arrow-down.svg';
import arrowUp from '../../images/arrow-up.svg';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [username, setUsername] = useState(null); 

    
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="navbar">
            <Link to="/" className="logo">BK Transportation</Link>
            <div className="menu">
                <Link to="/">HomePage</Link>
                <Link to="/manage-user">Manage User</Link>
                <Link to="/trips">Trip</Link>
                <Link to="/monthly-earning">Monthly Earning</Link>
            </div>
            <div className="user-info">
                <img src={user} alt="User" className="user-logo" onClick={toggleDropdown} />
                <img
                    src={dropdownOpen ? arrowUp : arrowDown}
                    alt="Toggle Dropdown"
                    className="dropdown-arrow"
                    onClick={toggleDropdown}
                />
                {dropdownOpen && (
                    <div className="dropdown-content">
                        <Link to="/account">Account</Link>
                        <Link to="/logout">Log out</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
