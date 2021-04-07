import React from 'react';
import Navbar from "./components/Navbar";
import ContentSelector from "./router/ContentSelector";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div>
        <Navbar/>
        <ContentSelector/>
        {/*<Footer/>*/}
      </div>
  );
}
export default App;
