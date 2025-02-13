import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Spinner } from 'react-bootstrap'; 


import React from 'react'

const LoadingSpinner = () => {
  return (
    <div>
        <Spinner animation="grow" role="status" className="text-white w-20 h-20"> 
            <span className="visually-hidden">Loading...</span>
          </Spinner>
    </div>
  )
}

export default LoadingSpinner