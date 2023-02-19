import React from 'react';
import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment , decrement ,reset } from '../../Services/Actions/Counter.action';

function Counter() {

  const count = useSelector((state) => state.IncDcr);
  const dispatch = useDispatch();
  return (
    <section className='py-20'>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <button onClick={() => dispatch(increment())}> + </button>
                <h3> {count} </h3>
                <button onClick={() => dispatch(decrement())}> - </button>
                <button onClick={() => dispatch(reset())} style={{marginLeft : "20px"}}> reset </button>
            </div>
        </div>
    </section>
  )
}

export default Counter