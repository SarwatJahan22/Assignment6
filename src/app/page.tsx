import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Hero from './Components/Hero';
import TrustedBy from './Components/TrustedBy';
import ExploreCourses from './Components/ExploreCourses';
import Achivements from './Components/Achivements';
import Courses from './Components/Courses';
import OurTeam from './Components/OurTeam';
import Customer from './Components/Customer';
import Footer from './Components/Footer';

function Home() {
  return (
    <div className="w-full min-h-screen">
      <main>
        <Header />
        <Navbar />
        <Hero />
        <TrustedBy />
        <ExploreCourses />
        <Achivements />
        <Courses />
        <OurTeam />
        <Customer />
        <Footer />
      </main>
    </div>
  );
}

export default Home;