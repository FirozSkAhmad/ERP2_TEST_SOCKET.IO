import React, { useState } from "react";
import './/miscellaneous.css'
import logo from '../../../assets/logo.svg';
import menu from '../../../assets/menu.svg'
import MobileModal from "../../menu/MobileModal";
import NavBar from '../../NavBar';
import WebMenu from "../../menu/WebMenu";

const MiscellaneousCard = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <div className="miscel">
            <div className="miscel-sec">
                <div className="miscel-head">
                    <h3>Miscellaneous</h3>
                </div>
                <div className="miscel-form">
                    <form action="">
                        <div className="miscel-form-field">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter Name" />
                        </div>
                        <div className="miscel-form-field">
                            <label htmlFor="reason">Reason</label>
                            <input type="text" id="reason" placeholder="Enter Reason" />
                        </div>
                        <div className="miscel-form-field">
                            <label htmlFor="amount">Amount</label>
                            <input type="text" id="amount" placeholder="Enter Amount" />
                        </div>
                        <div className="miscel-actions">
                            <div className="submit">
                                <button>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <NavBar />
        <WebMenu />
        <MobileModal isOpen={isOpen} onClose={toggleModal}/>
    </div>
  );
};

export default MiscellaneousCard;
