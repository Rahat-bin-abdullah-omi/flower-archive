import React from 'react';

const Footer = () => {
    return (
        <div className='lg:w-5/6 md:w-5/6 w-full bg-pink-600 text-white text-lg mx-auto flex justify-center py-5'>
            <div className=" ">
                <h1>Copyright &copy; {new Date().getFullYear()} flowerarchive.com</h1>
            </div>
           
        </div>
    );
};

export default Footer;