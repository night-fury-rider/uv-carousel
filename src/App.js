import React, { useEffect } from 'react';
import './App.css';
import { AppContext } from './AppContextProvider';
import Carousel from './components/carousel/Carousel';
import { getImages } from './components/carousel/carousel.service';

function App() {
  const [globalState, setGlobalState] = React.useContext(AppContext);
  const { images } = globalState;

  // Load Image Paths from API
  useEffect(() => {
    getImages(setGlobalState);
  }, [setGlobalState]);

  return (
    <div className="App medium-font">
      <Carousel images={images} duration={2} />
    </div>
  );
}

export default App;
