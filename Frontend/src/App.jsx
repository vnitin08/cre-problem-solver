import Calc from './components/Calc';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import Result from './components/result';

function App() {
  return (
    <div className=' p-0'>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calc" element={<Calc />} />
        <Route path='/result' element={<Result/>} />
      </Routes>
    </div>
  );
}

export default App;


{/* <img
          src="https://www.shutterstock.com/image-vector/chemical-formula-outlines-on-whiteboard-600nw-732477289.jpg"
          alt="Chemical Formula"
          className="h-full w-full rounded-lg border border-gray-200 shadow-md filter brightness-50 transition duration-300"
          style={{
            "--glass-bg-color": "rgba(255, 255, 255, 0.3)",
            "--glass-shadow-color": "rgba(0, 0, 0, 0.2)",
          }}
        /> */}
