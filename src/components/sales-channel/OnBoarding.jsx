import React, { useState } from "react";
import '../sales-channel/onBoarding.css'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import MobileModal from "../menu/MobileModal";
import WebMenu from "../menu/WebMenu";
import NavBar from "../NavBar";

const OnBoarding = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [onBoardData, setOnBoardData] = useState({ proj_type: "", status: "" });

    const handleProjectChange = (e) => {
        setOnBoardData({ ...onBoardData, proj_type: e.target.value });
    };

    const handleStatusChange = (e) => {
        setOnBoardData({ ...onBoardData, status: e.target.value });
    };

    const toggleModal = () => {
        setIsOpen(!isOpen); // Toggle modal visibility
      };

  return ( 
    <div>
        <style>
            {`
                @media screen and (min-width: 1024px) {
                    body {
                        background: #f0f1f3;
                    }
                }
            `}
        </style>
        <div className="mob-nav" >
            <a href=""><img src={logo} alt="" /></a>
            <img src={menu} alt="" onClick={toggleModal}/>
        </div >
        <div className="on-board">
            <div className="board-sec">
                <div className="board-head">
                    <h3>Onboarding Form</h3>
                </div>
                <div className="board-form">
                    <form>
                        <div className="board-field">
                            <label htmlFor="id">Sales Person ID *</label>
                            <input type="text" name="" id="id" placeholder="Enter Sales Person Id" />
                        </div>
                        <div className="board-field">
                            <label htmlFor="name">Sales Person Name *</label>
                            <input type="text" name="" id="name" placeholder="Enter Sales Person Name" />
                        </div>
                        <div className="board-field">
                            <label htmlFor="client-name">Client Name *</label>
                            <input type="text" name="" id="client-name" placeholder="Enter Client Name" />
                        </div>
                        <div className="board-field">
                            <label htmlFor="client-phone">Client Phone no. *</label>
                            <input type="number" name="" id="client-phone" placeholder="Enter Client Phone number" />
                        </div>
                        <div className="board-field">
                            <label htmlFor="aadhaar">Aadhar Card no. *</label>
                            <input type="number" name="" id="aadhaar" placeholder="Enter Aadhaar Number" />
                        </div>
                        <div className="board-field">
                            <label htmlFor="proj-type">Project Type *</label>
                            <select id="proj-type" value={onBoardData.proj_type} onChange={handleProjectChange}>
                                <option value="" style={{ fontSize: "14px" }}>Select your option</option>
                                <option value="Apartment" style={{ fontSize: "14px" }}>Apartments</option>
                                <option value="Villas" style={{ fontSize: "14px" }}>Villas</option>
                                <option value="Plots" style={{ fontSize: "14px" }}>Plots</option>
                                <option value="Farm lands" style={{ fontSize: "14px" }}>Farm Lands</option>
                            </select>
                        </div>
                        {onBoardData.proj_type === 'Apartments' && (
                            <>
                                <div className="board-field">
                                    <label htmlFor="proj-name">Project Name *</label>
                                    <input type="text" name="" id="proj-name" placeholder="Enter Project Name" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="tower-number">Tower Number *</label>
                                    <input type="number" name="" id="tower-number" placeholder="Enter Tower Number" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="flat-number">Flat Number *</label>
                                    <input type="number" name="" id="flat-number" placeholder="Enter Flat Number" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="price">Property Price</label>
                                    <input type="number" name="" id="price" placeholder="Property Price (Remark)" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="mode-payment">Mode of Payment *</label>
                                    <select id="mode-payment">
                                        <option value="">Select Mode of Payment</option>
                                        <option value="cash">Cash</option>
                                        <option value="upi">UPI</option>
                                        <option value="bank">Bank Transfer</option>
                                    </select>
                                </div>
                                <div className="board-field">
                                    <div><label id="status-label">Status *</label></div>
                                    <div className="status">
                                        <input type="radio" id="token" value="Token" onChange={handleStatusChange} checked={onBoardData.status === 'Token'} /><label htmlFor="token">Token</label>
                                        <input type="radio" id="advance" value="Advance" onChange={handleStatusChange} checked={onBoardData.status === 'Advance'}/><label htmlFor="advance">Advance</label>
                                        <input type="radio" id="block" value="Block" onChange={handleStatusChange} checked={onBoardData.status === 'Block'} /><label htmlFor="block">Block</label>
                                    </div>
                                </div>
                                {onBoardData.status === 'Block' && (
                                    <>
                                        <div className="board-field">
                                            <label htmlFor="enter-days">Enter the days *</label>
                                            <input type="number" name="" id="enter-days" placeholder="Enter the days" />
                                        </div>
                                        <div className="board-field">
                                            <label htmlFor="remarks">Remarks</label>
                                            <input type="text" name="" id="remarks" />
                                        </div>
                                    </>
                                )}
                                <div className="board-field">
                                    <label htmlFor="commission">Type of Commission *</label>
                                    <select id="commission">
                                        <option value="">Select Commission</option>
                                        <option value="validation">Validation</option>
                                        <option value="solid">Solid</option>
                                    </select>
                                </div>
                                <div className="board-field">
                                    <label htmlFor="discount">Discount %</label>
                                    <input type="number" name="" id="discount" placeholder="Enter Discount % (Remark)" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="amount">Amount *</label>
                                    <input type="number" name="" id="amount" placeholder="Enter Amount"/>
                                </div>
                            </>
                        )}
                        {onBoardData.proj_type === 'Villas' && (
                            <>
                                <div className="board-field">
                                    <label htmlFor="proj-name">Project Name *</label>
                                    <input type="text" name="" id="proj-name" placeholder="Enter Project Name" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="villa-number">Villa Number *</label>
                                    <input type="number" name="" id="villa-number" placeholder="Enter Villa Number" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="price">Property Price</label>
                                    <input type="number" name="" id="price" placeholder="Property Price (Remark)" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="mode-payment">Mode of Payment *</label>
                                    <select id="mode-payment">
                                        <option value="">Select Mode of Payment</option>
                                        <option value="cash">Cash</option>
                                        <option value="upi">UPI</option>
                                        <option value="bank">Bank Transfer</option>
                                    </select>
                                </div>
                                <div className="board-field">
                                    <div><label id="status-label">Status *</label></div>
                                    <div className="status">
                                        <input type="radio" id="token" value="Token" onChange={handleStatusChange} checked={onBoardData.status === 'Token'} /><label htmlFor="token">Token</label>
                                        <input type="radio" id="advance" value="Advance" onChange={handleStatusChange} checked={onBoardData.status === 'Advance'}/><label htmlFor="advance">Advance</label>
                                        <input type="radio" id="block" value="Block" onChange={handleStatusChange} checked={onBoardData.status === 'Block'} /><label htmlFor="block">Block</label>
                                    </div>
                                </div>
                                {onBoardData.status === 'Block' && (
                                    <>
                                        <div className="board-field">
                                            <label htmlFor="enter-days">Enter the days *</label>
                                            <input type="number" name="" id="enter-days" placeholder="Enter the days" />
                                        </div>
                                        <div className="board-field">
                                            <label htmlFor="remarks">Remarks</label>
                                            <input type="text" name="" id="remarks" />
                                        </div>
                                    </>
                                )}
                                <div className="board-field">
                                    <label htmlFor="commission">Type of Commission *</label>
                                    <select id="commission">
                                        <option value="">Select Commission</option>
                                        <option value="validation">Validation</option>
                                        <option value="solid">Solid</option>
                                    </select>
                                </div>
                                <div className="board-field">
                                    <label htmlFor="discount">Discount %</label>
                                    <input type="number" name="" id="discount" placeholder="Enter Discount % (Remark)" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="amount">Amount *</label>
                                    <input type="number" name="" id="amount" placeholder="Enter Amount" />
                                </div>
                            </>
                        )}
                        {onBoardData.proj_type === 'Plots' && (
                            <>
                                <div className="board-field">
                                    <label htmlFor="proj-name">Project Name *</label>
                                    <input type="text" name="" id="proj-name" placeholder="Enter Project Name" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="plot-number">Plot Number *</label>
                                    <input type="number" name="" id="plot-number" placeholder="Enter Plot Number" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="price">Property Price</label>
                                    <input type="number" name="" id="price" placeholder="Property Price (Remark)" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="mode-payment">Mode of Payment *</label>
                                    <select id="mode-payment">
                                        <option value="">Select Mode of Payment</option>
                                        <option value="cash">Cash</option>
                                        <option value="upi">UPI</option>
                                        <option value="bank">Bank Transfer</option>
                                    </select>
                                </div>
                                <div className="board-field">
                                    <div><label id="status-label">Status *</label></div>
                                    <div className="status">
                                        <input type="radio" id="token" value="Token" onChange={handleStatusChange} checked={onBoardData.status === 'Token'} /><label htmlFor="token">Token</label>
                                        <input type="radio" id="advance" value="Advance" onChange={handleStatusChange} checked={onBoardData.status === 'Advance'}/><label htmlFor="advance">Advance</label>
                                        <input type="radio" id="block" value="Block" onChange={handleStatusChange} checked={onBoardData.status === 'Block'} /><label htmlFor="block">Block</label>
                                    </div>
                                </div>
                                {onBoardData.status === 'Block' && (
                                    <>
                                        <div className="board-field">
                                            <label htmlFor="enter-days">Enter the days *</label>
                                            <input type="number" name="" id="enter-days" placeholder="Enter the days" />
                                        </div>
                                        <div className="board-field">
                                            <label htmlFor="remarks">Remarks</label>
                                            <input type="text" name="" id="remarks" />
                                        </div>
                                    </>
                                )}
                                <div className="board-field">
                                    <label htmlFor="commission">Type of Commission *</label>
                                    <select id="commission">
                                        <option value="">Select Commission</option>
                                        <option value="validation">Validation</option>
                                        <option value="solid">Solid</option>
                                    </select>
                                </div>
                                <div className="board-field">
                                    <label htmlFor="discount">Discount %</label>
                                    <input type="number" name="" id="discount" placeholder="Enter Discount % (Remark)" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="amount">Amount *</label>
                                    <input type="number" name="" id="amount" placeholder="Enter Amount" />
                                </div>
                            </>
                        )}
                        {onBoardData.proj_type === 'Farm lands' && (
                            <>
                                <div className="board-field">
                                    <label htmlFor="proj-name">Project Name *</label>
                                    <input type="text" name="" id="proj-name" placeholder="Enter Project Name" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="plot-number">Plot Number *</label>
                                    <input type="number" name="" id="plot-number" placeholder="Enter Plot Number" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="yards">Square Yards *</label>
                                    <input type="number" name="" id="yards" placeholder="Square Yards" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="price">Property Price</label>
                                    <input type="number" name="" id="price" placeholder="Property Price (Remark)" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="mode-payment">Mode of Payment *</label>
                                    <select id="mode-payment">
                                        <option value="">Select Mode of Payment</option>
                                        <option value="cash">Cash</option>
                                        <option value="upi">UPI</option>
                                        <option value="bank">Bank Transfer</option>
                                    </select>
                                </div>
                                <div className="board-field">
                                    <div><label id="status-label">Status *</label></div>
                                    <div className="status">
                                        <input type="radio" id="token" value="Token" onChange={handleStatusChange} checked={onBoardData.status === 'Token'} /><label htmlFor="token">Token</label>
                                        <input type="radio" id="advance" value="Advance" onChange={handleStatusChange} checked={onBoardData.status === 'Advance'}/><label htmlFor="advance">Advance</label>
                                        <input type="radio" id="block" value="Block" onChange={handleStatusChange} checked={onBoardData.status === 'Block'} /><label htmlFor="block">Block</label>
                                    </div>
                                </div>
                                {onBoardData.status === 'Block' && (
                                    <>
                                        <div className="board-field">
                                            <label htmlFor="enter-days">Enter the days *</label>
                                            <input type="number" name="" id="enter-days" placeholder="Enter the days" />
                                        </div>
                                        <div className="board-field">
                                            <label htmlFor="remarks">Remarks</label>
                                            <input type="text" name="" id="remarks" />
                                        </div>
                                    </>
                                )}
                                <div className="board-field">
                                    <label htmlFor="commission">Type of Commission *</label>
                                    <select id="commission">
                                        <option value="">Select Commission</option>
                                        <option value="validation">Validation</option>
                                        <option value="solid">Solid</option>
                                    </select>
                                </div>
                                <div className="board-field">
                                    <label htmlFor="discount">Discount %</label>
                                    <input type="number" name="" id="discount" placeholder="Enter Discount % (Remark)" />
                                </div>
                                <div className="board-field">
                                    <label htmlFor="amount">Amount *</label>
                                    <input type="number" name="" id="amount" placeholder="Enter Amount" />
                                </div>
                            </>
                        )}
                        <div className='board-btns'>
                            <div className='disc-btn'>
                                <button>Discard</button>
                            </div>
                            <div className='add-btn'>
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <NavBar />
        <WebMenu />
        <MobileModal isOpen={isOpen} onClose={toggleModal} />
    </div>
  );
};

export default OnBoarding;
