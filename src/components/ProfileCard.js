import React from 'react';
import './style.css'; 
import anjana from '../assets/anjana.png';

const ProfileCard = () => {
  return (
    <div className='md:flex md:justify-center'>
      <div className="person bg-gray-100 h-auto m-4 rounded-xl shadow-xl">
        <div className="container">
            <div className="container-inner">
            <div className="circle">
                <img
                className="img"
                src={anjana} 
                alt="Profile" 
                />
            </div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="name">Anjana Shreya</div>
        <div className="title">Developer | Read More</div>
      </div>

      <div className="person bg-gray-100 h-auto m-4 rounded-xl shadow-xl">
        <div className="container">
            <div className="container-inner">
            <div className="circle">
                <img
                className="img"
                src={anjana} 
                alt="Profile" 
                />
            </div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="name">Anjana Shreya</div>
        <div className="title">Developer</div>
      </div>

      <div className="person bg-gray-100 h-auto m-4 rounded-xl shadow-xl">
        <div className="container">
            <div className="container-inner">
            <div className="circle">
                <img
                className="img"
                src={anjana} 
                alt="Profile" 
                />
            </div>
            </div>
        </div>
        <div className="divider"></div>
        <div className="name">Anjana Shreya</div>
        <div className="title">Developer</div>
      </div>
    </div>
  );
};

export default ProfileCard;
