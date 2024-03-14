import React, { useState } from "react";
import './/payrollCard.css'
import logo from '../../../assets/logo.svg';
import menu from '../../../assets/menu.svg'
import manage from '../../../assets/manage.svg'
import MobileModal from "../../menu/MobileModal";
import NavBar from '../../NavBar';
import WebMenu from '../../menu/WebMenu';
import ManageRoleInput from "./ManageRoleInput";

const PayRollCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showManageInput, setShowManageInput] = useState(false)

    const toggleManageInput = () => {
        setShowManageInput(!showManageInput); // Toggle ManageRoleInput visibility
    };

    const toggleModal = () => {
        setIsOpen(!isOpen); // Toggle modal visibility
    };

  return (
    <div>
        <style>
            {`
                body {
                    background-color: #f0f1f3;
                }
            `}
        </style>
        <div className="mob-nav" >
            <a href=""><img src={logo} alt="" /></a>
            <img src={menu} alt="" onClick={toggleModal}/>
        </div >
        <div className="payroll">
            <div className="payroll-sec">
                <div className="payroll-head">
                    <h3>Payroll</h3>
                    <div className="manage-role" onClick={toggleManageInput}>
                    {/* Click function need to be added */}
                        <img src={manage} alt="" />
                        <p>Manage Role</p>
                    </div>
                </div>
                <div className="payroll-form">
                    <form action="">
                        <div className="payroll-form-field">
                            <label htmlFor="name">Name *</label>
                            <input type="text" id="name" placeholder="Enter Name" />
                        </div>
                        <div className="payroll-form-field">
                            <label htmlFor="role-type">Role Type</label>
                            <select id="role-type">
                                <option value="">Select Role</option>
                                <option value="super-admin">Super Admin</option>
                                <option value="manager">Manager</option>
                                <option value="channel-partner">Channel Partner</option>
                                <option value="sales-person">Sales Person</option>
                            </select>
                        </div>
                        <div className="payroll-form-field">
                            <label htmlFor="incentives">Incentives</label>
                            <input type="text" id="incentives" placeholder="Enter Incentive" />
                        </div>
                        <div className="payroll-form-field">
                            <label htmlFor="salary">Salary</label>
                            <input type="text" id="salary" placeholder="Enter Salary" />
                        </div>
                        <div className="payroll-actions">
                            <div className="submit">
                                <button>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {showManageInput && <ManageRoleInput />}
        <NavBar />
        <WebMenu />
        <MobileModal isOpen={isOpen} onClose={toggleModal}/>
    </div>
  );
};

export default PayRollCard;
