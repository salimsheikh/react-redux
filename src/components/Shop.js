import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from "../state/index"

const Shop = () => {

  const dispatch = useDispatch();
  const action = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
      <h2>Deposit / Withdraw Money</h2>
      <div>
        {/*
        <button className='btn btn-primary mx-2' onClick={() => {dispatch(action.withdrawMoney(100))}}>-</button>
        Update Balance
        <button className='btn btn-primary mx-2' onClick={() => {dispatch(action.depositMoney(100))}}>+</button>
        */}
        

        <button className='btn btn-primary mx-2' onClick={() => {action.withdrawMoney(100)}}>-</button>
        Update Balance
        <button className='btn btn-primary mx-2' onClick={() => {action.depositMoney(100)}}>+</button>

      </div>
    </div>
  )
}

export default Shop