import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Chart } from "chart.js";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGetStarted = () => {
    // Navigate to the desired route when the button is clicked
    navigate('/calc');
  };

  return (
    // <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-600 to-blue-500 m-0">
    <div className='bg-black'>
        <h1 className="text-4xl font-bold text-white text-center pt-10">Welcome to our Chemical Reaction Engineering Problem Solver!</h1>
      <div className="flex justify-center gap-32 items-center h-screen ">
        {/* <img src='https://cdn-icons-png.flaticon.com/512/3215/3215346.png' alt="Chemical Formula" className=" rounded-lg filter brightness-50 transition duration-300" /> */}
        {/* <spline-viewer url="https://prod.spline.design/G1GTXwHyPV9XSVDr/scene.splinecode" className='h-48 w-10'></spline-viewer> */}

        <div className='flex  flex-col m-0 p-0'>
          <p className='mb-2 mt-2 ml-20  text-white'>Are you struggling with complex chemical reaction engineering problems? Look no further! Our website solve challenging chemical reaction engineering problems with ease.</p>
          <p className='mb-2 mt-2 ml-20  text-white'>Whether you're a student, researcher, or professional in the field, our platform provides intuitive tools and resources to tackle intricate reactions, reactor designs, kinetics, and more. Say goodbye to manual calculations and hello to efficient problem-solving techniques!</p>
          <p className='mb-6 mt-2 ml-20  text-white'><span className='text-xl'>Key Features:</span>
            <ul className='list-disc ml-10 mb-6'>
              <li>Interactive calculator for CSTR, PFR</li>
              <li>Conversion, rate, and order calculations</li>
              <li>Visualize chemical reactions plot </li>
            </ul>
          {/* <span>Empower your understanding of chemical processes and enhance your problem-solving skills with our user-friendly interface. Get ready to delve into the fascinating world of chemical reaction engineering and achieve your academic or professional goals effortlessly.</span> */}
          </p>
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 w-1/4 ml-20"
            onClick={handleGetStarted} // Call handleGetStarted function on button click
          >
            Get Started
          </button>
        </div>
        <spline-viewer
          url="https://prod.spline.design/G1GTXwHyPV9XSVDr/scene.splinecode"
          style={{ width: '70%', height: '500px' }}
        ></spline-viewer>
      </div>
    </div>
  );
};

export default Home;
