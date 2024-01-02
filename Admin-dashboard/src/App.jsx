// App.jsx

import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row flex-1">
        <div className="w-64 h-screen">
          <Sidebar />
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 overflow-y-auto">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
