import React from "react";
import { Routes, Route } from 'react-router-dom'

function App() {
  return <Routes >

    <Route path='/' exact element={<p>This is the home page</p>} ></Route>
    <Route path='/stared' exact element={<p>This is the starred page</p>} ></Route>
    <Route path="*" element={<p>This is 404 page</p>}></Route>

  </Routes>

}

export default App;
