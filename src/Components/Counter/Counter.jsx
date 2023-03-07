import React from 'react';
import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment , decrement ,reset, incrementAsync, decrementAsync, resetAsync } from '../../Services/Actions/Counter.action';

function Counter() {

  const count = useSelector((state) => state.IncDcr.count);
  const isLoading = useSelector((state) => state.IncDcr.isLoading);
  console.log("count",count);
  const dispatch = useDispatch();
  return (
    <section className='py-20'>
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <button onClick={() => dispatch(incrementAsync())}> + </button>
                {
                  isLoading ? <h1>loading...</h1> : <h3> {count} </h3>
                }
                
                <button onClick={() => dispatch(decrementAsync())}> - </button>
                <button onClick={() => dispatch(resetAsync())} style={{marginLeft : "20px"}}> reset </button>
            </div>
        </div>
    </section>
  )
}

export default Counter