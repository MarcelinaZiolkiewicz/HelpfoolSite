import React from 'react';
import Navbar from "./components/Navbar";
import ContentSelector from "./router/ContentSelector";

const App = () => {
  return (
      <div>
        <Navbar/>
        <ContentSelector/>
      </div>
  );
}
export default App;
