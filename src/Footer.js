import React from 'react';
import './Footer.css';



class Footer extends React.Component {
  render() {
    return (
      <>
        <div>
          <img className='Grass' src='/Assests/GrassBottom.png' alt='' />
         <a href="aboutus" target="_blank" rel='noreferrer'><img className='Ears' src='/Assests/Fox-ears-transparent.png' alt='About Us Page'  /></a>
        </div>
      </>
      
    )
  };
}

export default Footer;  