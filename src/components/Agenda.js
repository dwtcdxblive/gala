import React, { useEffect } from 'react';
import pdf from '../assets/Dubai Majlis 2024_Running Order QR Code.pdf';

const Agenda = () => {
  useEffect(() => {
    // Redirect to the specified URL once the page is loaded
    window.location.href =
      'https://drive.google.com/file/d/1MhERUbR5veelsf36dva-OKSvLHSYcVeP/view';
  }, []);

  return (
    <div className='container' style={{ height: '100vh' }}>
      <div className='row'>
        <div className='col-sm-12'>
          <object
            data={pdf}
            type='application/pdf'
            width='100%'
            height='100%'
            style={{ minHeight: '100vh' }}
          >
            <p>
              Alternative text - include a link{' '}
              <a href={pdf} target='_blank' rel='noopener noreferrer'>
                to the PDF!
              </a>
            </p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
