import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Collections from '../Collections/Collections';
import Registration from '../Registration/Registration';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Collections/>
      <Registration/>
      <Footer/>
    </div>
  );
}

export default App;
