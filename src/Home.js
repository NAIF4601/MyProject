import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <main>
        <h1>Welcome to the Home Page!</h1>
        <p>This is a simple home page with a header and footer.</p>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
