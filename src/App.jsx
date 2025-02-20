/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './components/navbar';
import './App.css'
import { app } from "./firebaseConfig"

function App() {
  return (
    <div className="min-h-screen mx-auto bg-black">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white">Welcome to my website</h1>
        <p className="text-lg text-white">I am testing github</p>
      </div>
    </div>
  );
}

export default App;
