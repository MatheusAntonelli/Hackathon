import React from 'react';
import MainSection from '../Components/MainSection/MainSection';
import Navbar from '../Components/Navbar/Navbar';
import Cards from '../Components/Cards/Cards';
import Login from '../Components/Login/Login';
import Footer from '../Components/Footer/Footer';


function Home() {
    return (
        <>
            <Navbar/>
            <MainSection/> 
            <section id='feature'>
            <Cards></Cards>
            </section>
            <Footer></Footer>
            
        </>
    )
}

export default Home
