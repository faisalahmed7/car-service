import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer className='text-center mt-5 mb-3'>
            <h5>Copyright © {year}




            </h5>
        </footer>
    );
};

export default Footer;