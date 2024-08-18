import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to My YouTube Feeder</h1>
      <p className="text-lg mb-6 text-center">
        Discover personalized video feeds based on your interests. Log in or sign up to start exploring!
      </p>

      <div className="flex space-x-4 mb-6">
        <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Log In
        </Link>
        <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
          Sign Up
        </Link>
      </div>

      <div className="demo-content text-center">
        <h2 className="text-2xl font-semibold mb-2">What We Offer:</h2>
        <p className="mb-4">
          Enter your interests to get a customized feed of YouTube videos that match your preferences.
        </p>
        <p>Example: Try searching for "technology," "cooking," or "travel"!</p>
      </div>
    </div>
  );
}

export default Home;
