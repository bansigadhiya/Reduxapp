import React from 'react';
import './Counter.css';
import { useSelector } from 'react-redux';

function Counter() {

  const count = useSelector((state) => state.IncDcr);
  return (
    <section className='py-20'>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <button> + </button>
                <h3> {count} </h3>
                <button> - </button>
            </div>
        </div>
    </section>
  )
}

export default Counter