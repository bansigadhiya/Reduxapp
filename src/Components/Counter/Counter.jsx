import React from 'react';
import './Counter.css';

function Counter() {
  return (
    <section className='py-20'>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <button> + </button>
                <h3> 0 </h3>
                <button> - </button>
            </div>
        </div>
    </section>
  )
}

export default Counter