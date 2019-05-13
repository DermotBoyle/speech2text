import React, { Component } from 'react'
import { Button } from 'reactstrap';

const quote = ({selectQuote}) => {
    return (
      <div>
        <Button onClick={selectQuote}>Quotes</Button> 
      </div>
    );
  };

  export default quote;
