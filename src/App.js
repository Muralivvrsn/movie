import React from 'react';
import './App.css';
import Shows from './components/shows/Shows';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShowCard from './components/show-details/ShowCard';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
      <Route path="/" exact element={<Shows/>}></Route>
      <Route path="/movie/:id" exact element={<ShowCard/>}></Route>
     </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
