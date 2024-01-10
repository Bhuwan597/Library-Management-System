import React from 'react';
import NavbarComponent from '../components/Navbar';
import AllBooks from '../components/AllBooks';
import Footer from '../components/Footer';


const BooksPage = () => {
    return (
        <>
            <AllBooks/>
            <Footer/>
        </>
    );
};

export default BooksPage;