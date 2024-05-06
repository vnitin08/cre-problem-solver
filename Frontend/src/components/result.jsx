import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';



const Result = () => {

  const location = useLocation();
  const { resultData } = location.state || {};

  const hasValidResultData = resultData && Array.isArray(resultData.y_values);

  // Create data array for Recharts LineChart
  const data = hasValidResultData
    ? resultData.y_values.map(([x, y]) => ({ name: x, uv: y }))
    : [];

  return (
    <div className="w-screen mx-auto px-4 py-8 pt-0">
      <h1 className="text-3xl font-bold mb-6 text-center">Chemical Reaction Engineering Results</h1>
      <div className='flex text-left gap-32'>
        <div className="">
          {resultData ? (
            <div className="bg-gray-100 rounded-lg shadow-md p-6">
              <p className="text-lg mb-4">The calculation results are:</p>
              <ul className="list-disc ml-8">
              {Object.entries(resultData).map(([key, value]) => (
                <div key={key} className="mb-4">
                  {key === 'y_values' ? (
                    <div>
                      <label className="font-bold">Levenspiel Plot Table:</label>
                      <table className="border-collapse border border-gray-400 mt-2">
                        <thead>
                          <tr>
                            <th className="border border-gray-400 px-4 py-2">X</th>
                            <th className="border border-gray-400 px-4 py-2">Y</th>
                          </tr>
                        </thead>
                        <tbody>
                          {value.map(([x, y], index) => (
                            <tr key={index}>
                              <td className="border border-gray-400 px-4 py-2">{x.toFixed(5)}</td>
                              <td className="border border-gray-400 px-4 py-2">{y.toFixed(5)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="mb-2">
                      <b>{key === 'Vcsrt' ? 'Vcstr' : key}:</b>
                      {key === 'Vpfr' && value === null ? ' undefined' : ` ${value.toFixed(5)} L`}
                  </p>
                  )}
                </div>
              ))}


              </ul>
            </div>
          ) : (
            <p className="text-red-500 text-lg mt-4">An error occurred during the calculation. Please try again.</p>
          )}
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Levenspiel Plot</h2>
          <LineChart width={900} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Result;
