import React from 'react';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import Bricks from './components/bricks/Bricks';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
    <Header />
    <Bricks />
    <Footer />
    <Preloader />
    </div>
  );
}

export default App;
