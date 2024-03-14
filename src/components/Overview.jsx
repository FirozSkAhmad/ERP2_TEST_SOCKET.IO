import React, { useEffect, useState } from 'react'
import './overview.css'
import income from '../assets/income.svg';
import balanceImage from '../assets/balance.svg';
import expenses from '../assets/expenses.svg';
import overViewData from '../data/overviewData';

const Overview = () => {
  return (
      <div className='over-det'>
        <div className='over-sec'>
          <div className='over_Head'>
              <h3>Overview</h3>
          </div>
          <div className='over_Data-fld'>
            <div className='over_Data'>
              <img src={income} alt="Income" />
              <div className='over_Data_amt'>
                <p className='amt-type'>Income</p>
                <p className='amt'>$999</p>
              </div>
            </div>
            <div className='over_Data'>
              <img src={expenses} alt="" />
              <div className='over_Data_amt'>
                <p className='amt-type'>Expenses</p>
                <p className='amt'>$999</p>
              </div>
            </div>
            <div className='over_Data'>
              <img src={balanceImage} alt="" />
              <div className='over_Data_amt'>
                <p className='amt-type'>Balance</p>
                <p className='amt'>$999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Overview