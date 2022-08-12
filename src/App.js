import React from "react";
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
// import Navs from "./components/nav";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Starred from "./pages/Stared";

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes >
        <Route path='/' exact element={<Home />} ></Route>
        <Route path='/starred' exact element={<Starred />} ></Route>
        <Route path='/show/:id' exact element={<Show />} ></Route>
        <Route path="*" element={<p>Not found</p>}></Route>
      </Routes>
    </ThemeProvider>

  )
}

export default App;
