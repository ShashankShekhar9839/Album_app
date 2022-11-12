import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import AlbumContainer from "./AlbumContainer";

// creating routes for multiple pages

const App = () => {
  return (
    <div>
      {/* routes for multiple pages */}

      {/*router wrapper  */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<AlbumContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
