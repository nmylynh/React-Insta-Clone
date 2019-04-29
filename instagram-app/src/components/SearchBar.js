import React from 'react';
import './SearchBar.css'

function SearchBar(props){
    return (
        <div className="header-container">
            <div className="logo-title">
                <i className="fab fa-instagram"></i>
                <h1>Instagram</h1>
            </div>
            <input placeholder="Search" />
            <div>
                <i className="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar;