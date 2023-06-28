import React from 'react';
import foxImage from '../../assets/images/LoadingIcon.png';

const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="spinner" style={{width: 200, height: 200, background: `url(${foxImage})`, backgroundSize: 'cover', animation: 'spin 2s linear infinite', borderRadius: '50%'}}>
      </div>
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }}
      `}</style>
    </div>
  );
};



export default Spinner;
