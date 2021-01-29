import React from 'react';
import Header from '../src/components/Header';
import Introduction from '../src/components/Introduction';
import Profile from '../src/components/Profile';
import Campaign from '../src/components/Campaign';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Profile />
      <Campaign />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;