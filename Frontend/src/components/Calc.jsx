import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Calc = () => {
  const [formData, setFormData] = useState({
    a: '',
    b: '',
    c: '',
    d: '',
    fa0: '',
    fb0: '',
    fi0: '',
    x1: '',
    x2: '',
    v0: '',
    K: ''
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      // JSON.stringify(formData);
      const response = await axios.post('http://localhost:3000/calculate', formData);
      console.log(response.data); // Assuming the server sends back a response
      navigate('/result', { state: { resultData: response.data } });
    } catch (error) {
      console.error('Error:', error);
      // Handle error, such as showing an error message to the user
    }

    
  };

  return (
    <div className="w-max mx-auto p-6 bg-gradient-to-br bg-gray-100 rounded-lg shadow-md  text-gray-900  ">
      <h2 className="text-2xl font-bold mb-4 text-center">Enter Inputs here</h2>
      <p className='text-xl font-bold text-center'>aA + bB -{'>'} cC + dD </p>
      <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="a" className="text-lg font-medium mb-2">a:</label>
          <input
            type="text"
            id="a"
            name="a"
            value={formData.a}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter a"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="b" className="text-lg font-medium mb-2">b:</label>
          <input
            type="text"
            id="b"
            name="b"
            value={formData.b}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter b"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="c" className="text-lg font-medium mb-2">c:</label>
          <input
            type="text"
            id="c"
            name="c"
            value={formData.c}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter c"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="d" className="text-lg font-medium mb-2">d:</label>
          <input
            type="text"
            id="d"
            name="d"
            value={formData.d}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter d"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="fa0" className="text-lg font-medium mb-2">fa0:</label>
          <input
            type="text"
            id="fa0"
            name="fa0"
            value={formData.fa0}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter fa0"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="fb0" className="text-lg font-medium mb-2">fb0:</label>
          <input
            type="text"
            id="fb0"
            name="fb0"
            value={formData.fb0}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter fb0"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="fi0" className="text-lg font-medium mb-2">fi0:</label>
          <input
            type="text"
            id="fi0"
            name="fi0"
            value={formData.fi0}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter fi0"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="x1" className="text-lg font-medium mb-2">x1:</label>
          <input
            type="text"
            id="x1"
            name="x1"
            value={formData.x1}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter x1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="x2" className="text-lg font-medium mb-2">x2:</label>
          <input
            type="text"
            id="x2"
            name="x2"
            value={formData.x2}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter x2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="v0" className="text-lg font-medium mb-2">v0:</label>
          <input
            type="text"
            id="v0"
            name="v0"
            value={formData.v0}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter v0"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="K" className="text-lg font-medium mb-2">K:</label>
          <input
            type="text"
            id="K"
            name="K"
            value={formData.K}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 transition duration-300"
            placeholder="Enter K"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 col-span-2"
        >
          Submit
        </button>
      </form>

    </div>
  );
};

export default Calc;
