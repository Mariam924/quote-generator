import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote } from "./slices/quoteSlice";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';


const Quote = () => {
  

  const quote = useSelector((state) => state.quote);

  const dispatch = useDispatch();

  console.log(quote);
  
  useEffect(() => {
    dispatch(fetchRandomQuote());
  }, [dispatch]);


  return (

    <div className="main-app d-flex justify-content-center align-items-center">
    <div className="main-content p-5 d-flex justify-content-center align-items-center"> 

      <div> 
      <h1 className="title">Quote App Generator</h1>
      <p className="quotes">{quote.content}</p>
      <span className="author">{quote.author}</span>
      <Button variant="primary mt-3 w-100 py-3 fw-bold" onClick={() =>  dispatch(fetchRandomQuote())}>New Quote</Button>
      </div>

    </div>
  </div>
  );
};

export default Quote; 



