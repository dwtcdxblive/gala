import React, { useEffect } from 'react';
import logo from '../assets/logo.png'; // Add the Dubai logo to your assets
import agenda from '../assets/image.jpg';

const Agenda = () => {
//   useEffect(() => {
//     // Redirect to the specified URL once the page is loaded
//     window.location.href =
//       'https://drive.google.com/file/d/1MhERUbR5veelsf36dva-OKSvLHSYcVeP/view';
//   }, []);
  return (
    <div>
      <img src={agenda} alt='agenda' className='agenda-image' />
    </div>
  );
};

export default Agenda;
