 import React from 'react';
 import './index.css';    
import Navbar from '../../components/navbar/Navbar'
import About from '../../components/about/About';
import Counter from '../../components/counter/Counter';
import Service from '../../components/service/Service';
import Speech from '../../components/speech/Speech';
import Team from '../../components/team/Team';
import Work from '../../components/work/Work';
import Footer from '../../components/footer/Footer';
 function Home() {
   return (
     <>
        <Navbar /> 
        <About />
        <Counter />
        <Service />
        <Speech />
        <Team />
        <Work />
        <Footer />
     </>
   )
 }
 
 export default Home