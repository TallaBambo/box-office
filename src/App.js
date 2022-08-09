import React from "react";
import { Routes, Route } from 'react-router-dom'
// import Navs from "./components/nav";
import Home from "./pages/Home";
import Starred from "./pages/Stared";

function App() {
  return (
    <Routes >
      <Route path='/' exact element={<Home />} ></Route>
      <Route path='/starred' exact element={<Starred />} ></Route>
      <Route path="*" element={<p>Not found</p>}></Route>
    </Routes>

  )
}

export default App;
