import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'
import Contact from  './Contact'

import Article1 from './articles/Article1'
import Article2 from './articles/Article2'
import Article3 from './articles/Article3'
import Article4 from './articles/Article4'

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/article1" element={<Article1 />} />
                <Route path="/article2" element={<Article2 />} />
                <Route path="/article3" element={<Article3 />} />
                <Route path="/article4" element={<Article4 />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
