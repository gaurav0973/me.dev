import React from 'react';
import Navigationbar from './components/NavigationBar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />
      <main className="flex-1">
        <Navigationbar />


      </main>
    </div>
  );
}

export default App;
