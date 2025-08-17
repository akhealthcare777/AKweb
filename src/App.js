import React from 'react';
import Nav from './component/homepage';
import Aboutus from './component/Aboutus';
import Review from "./component/review";
import TeamSection from './component/Team';
import ContactSection from './component/Contactus';
import Footer from './component/Footer';
import Service from './component/Service';
import Gallery from './component/Gallery';
import AcademySection from './component/Academy';
import WhatsAppChatButton from "./component/WhatsAppChatButton";
import FitnessClasses from './component/fitnessclasses';
import Phone from './component/phone';


function App() {
  return (
    <div>
      <Nav />
      <Phone />
      <Gallery />
      <AcademySection />
      
      <Aboutus />

      <Service />
      <FitnessClasses />
      <Review />
      <TeamSection />
      <ContactSection />
      <WhatsAppChatButton />
      <Footer />
      
    </div>
  );
}

export default App;
