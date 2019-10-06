import React from 'react'
import { Link } from 'react-router-dom';

class Home extends React.Component {
    public render() {
        return (
            <div className="flex flex-col justify-center items-center h-screen w-screen">
                <h1 className="text-4xl font-semibold border-0 m-1 text-indigo-600">Welcome to <span className="text-red-600">Vodafone's</span> Standalone  <span className="text-red-600">Phones Gallery</span></h1>
                <h2 className="text-lg font-normal border-0 mt-2 m-6 text-gray-800">Click the button below to proceed to
                the gallery!</h2>
                <Link to="/gallery" className="no-underline self-center  text-gray-50">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Let's go</button>
                </Link>
            </div>
        )
    }
}

export default Home;
