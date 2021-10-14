import React from 'react';
import MainSection from '../Components/MainSection/MainSection';
import Navbar from '../Components/Navbar/Navbar';
import Cards from '../Components/Cards/Cards';


function Home() {
    return (
        <>
            <Navbar/>
            <MainSection/> 
            <section id='feature'>
            <Cards></Cards>
            </section>
            
        </>
    )
}

export default Home
