import React from 'react';
import {Heading} from './Heading'
import { Navbar } from './Navbar';
import { Online } from './Online';
import { Dash } from './Dash';
import { Subscribe } from './Subscribe';
import { Questions } from './Questions';
import { Footer } from './Footer';

 



export const Home = () => {
 
  return (
    <>
  <div className="header">
    <Navbar />
    <Heading />
  </div> 
    <Online />
    <Dash />
    <Subscribe />
    <Questions />
    <Footer />
</>
  )
}
