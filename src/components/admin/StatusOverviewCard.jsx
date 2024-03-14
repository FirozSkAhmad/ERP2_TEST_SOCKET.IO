import React from "react";
import './style.css'
import close from '../../assets/menuClose.svg'

const StatusOverviewCard = ({selectedButton, onClose}) => {
  return (
    <div className="stat-det">
        <div className="stat-sec">
            <div className='close'>
                <img src={close} alt="Close card" onClick={onClose}/>
            </div>
            <div className="stat-head">
                <h3>Status Overview</h3>
            </div>
            <div className="stat-data">
                <div className="stat-data-field">
                    <p className="stat-key avail">Available</p>
                    <p className="stat-value">190 {selectedButton}</p>
                </div>
                <div className="stat-data-field">
                    <p className="stat-key token">Token</p>
                    <p className="stat-value">190 {selectedButton}</p>
                </div>
                <div className="stat-data-field">
                    <p className="stat-key adv">Advance</p>
                    <p className="stat-value">190 {selectedButton}</p>
                </div>
                <div className="stat-data-field">
                    <p className="stat-key part">Part-Payment</p>
                    <p className="stat-value">190 {selectedButton}</p>
                </div>
                <div className="stat-data-field">
                    <p className="stat-key block">Block</p>
                    <p className="stat-value">190 {selectedButton}</p>
                </div>
                <div className="stat-data-field">
                    <p className="stat-key sold">Sold</p>
                    <p className="stat-value">190 {selectedButton}</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default StatusOverviewCard;
