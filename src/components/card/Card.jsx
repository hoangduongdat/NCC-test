import React from 'react';
import './card.css'
const Card = ({ icon }) => {
    return (
        <div className="card">
            <span className="card-header">
                Lorem ipsum dolor sit amet
            </span>
            <div className="card-content-top">
                <img src={icon} alt="" />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </span>
            </div>
            <span className="card-content-bottom">ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</span>
        </div>
    );
};

export default Card;