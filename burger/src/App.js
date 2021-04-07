import React, {useState,useEffect} from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import { css } from "@emotion/core"
import PacmanLoader from "react-spinners/PacmanLoader";
import Header from "./Components/Header";
import Product from "./Components/Product";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const[loading,setLoading] = useState(false);

  const override = css`
    display: block;
    border-color: red;
    margin: 20%;


  `;
// EKRANDA ANIMATSIA CHIQISH VOHTI
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000);
  },[])

  return (
    <div className="App">
      {
        loading ?<PacmanLoader color={"#b10000"} loading={loading} css={override} size={100}   />
        :
            <>
              <Navbar/>
              <Header/>
              <Product/>
              <About/>
              <Contact/>
            </>
      }
    </div>
  );
}

export default App;
