import React from 'react'
import './App.css';
import AsyncPosts from './components/AsyncPosts';
import InputFolder from './components/InputFolder';
import SyncPosts from './components/SyncPosts';


function App() {

  return (
    <>
      <InputFolder />
      <div className="content">
        <SyncPosts />
        <AsyncPosts />
      </div>
    </>
  );
}

export default App;
