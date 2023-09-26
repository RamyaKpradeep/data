import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12'>
            <h2 className='pt-5 text-dark' style={{fontWeight:'800'}}>Udemy Course Registered Students</h2>
            <Link className='btn btn-success mb-2' to="/userList"  style={{fontSize:20}}>Registered students </Link>

                <div className='background'>
                
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home