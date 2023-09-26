import React from 'react'
  
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className='bg-dark mt-3 pt-3' style={{backgroundColor:"black",
    color:"white"}}>
      <div className='row'>
          <div className='col-12 col-sm-3 col-md-3 col-lg-3 mx-auto'>
          <h5>&#169; Copyright {year} </h5>
          </div>

      </div>
    </div>
  )
}

export default Footer