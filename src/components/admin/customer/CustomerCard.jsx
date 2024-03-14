import React from "react";
import './/customer.css';
import close from '../../../assets/menuClose.svg'

const CustomerCard = ({projectID, customers, onClose}) => {
    const receiptData = customers.find(receipt => receipt.projectID === projectID);
    console.log(receiptData);

    const renderFields = () => {
        switch (receiptData.projectType) {
          case 'Apartments':
            return (
              <>
                <div className="cus-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={receiptData.invoiceNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="dateOfOnboard">Date</label>
                  <input type="text" id="dateOfOnboard" defaultValue={receiptData.date} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" defaultValue={receiptData.commissionType} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="towerNumber">Tower Number</label>
                  <input type="text" id="towerNumber" defaultValue={receiptData.towerNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="flatNumber">Flat Number</label>
                  <input type="text" id="flatNumber" defaultValue={receiptData.flatNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="priceOfProperty">Price of Property</label>
                  <input type="text" id="priceOfProperty" defaultValue={receiptData.priceOfProperty} />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="modeOfPayment">T/A Mode of Payment</label>
                  <input type="text" id="modeOfPayment" defaultValue={receiptData.modeOfPayment} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={receiptData.status} readOnly />
                </div>
                {receiptData.status === 'Token' && (
                    <div className="cus-data-field">
                      <label htmlFor="tokenAmount">Token Amount</label>
                      <input type="text" id="tokenAmount" defaultValue={receiptData.tokenAmount} readOnly />
                    </div>
                )}
                {receiptData.status === 'Advance' && (
                    <div className="cus-data-field">
                      <label htmlFor="advanceAmount">Advance Amount</label>
                      <input type="text" id="advanceAmount" defaultValue={receiptData.advanceAmount} readOnly />
                    </div>
                )}
                {receiptData.status === 'Block' && (
                  <>
                    <div className="cus-data-field">
                      <label htmlFor="blockedDays">No. of Blocked Days</label>
                      <input type="text" id="blockedDays" defaultValue={receiptData.blockedDays} readOnly />
                    </div>
                    <div className="cus-data-field">
                      <label htmlFor="daysLeft">No. of Days Left</label>
                      <input type="text" id="daysLeft" defaultValue={receiptData.daysLeft} readOnly />
                    </div>
                  </>
                )}
                {receiptData.status === 'Part-Payment' && (
                  <>
                    <div className="cus-data-field">
                      <label htmlFor="paidAmount">Amount Paid Till Now</label>
                      <input type="text" id="paidAmount" defaultValue={receiptData.paidAmount} readOnly />
                    </div>
                    <div className="cus-data-field">
                      <label htmlFor="pendingAmount">Pending Payment</label>
                      <input type="text" id="pendingAmount" defaultValue={receiptData.pendingAmount} readOnly />
                    </div>
                  </>
                )}
              </>
            );
          case 'Villas':
            return (
              <>
                <div className="cus-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={receiptData.invoiceNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="dateOfOnboard">Date</label>
                  <input type="text" id="dateOfOnboard" defaultValue={receiptData.date} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" defaultValue={receiptData.commissionType} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="villaNumber">Villa Number</label>
                  <input type="text" id="villaNumber" defaultValue={receiptData.villaNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="priceOfProperty">Price of Property</label>
                  <input type="text" id="priceOfProperty" defaultValue={receiptData.priceOfProperty} />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="modeOfPayment">T/A Mode of Payment</label>
                  <input type="text" id="modeOfPayment" defaultValue={receiptData.modeOfPayment} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={receiptData.status} readOnly />
                </div>
                {receiptData.status === 'Token' && (
                    <div className="cus-data-field">
                      <label htmlFor="tokenAmount">Token Amount</label>
                      <input type="text" id="tokenAmount" defaultValue={receiptData.tokenAmount} readOnly />
                    </div>
                )}
                {receiptData.status === 'Advance' && (
                    <div className="cus-data-field">
                      <label htmlFor="advanceAmount">Advance Amount</label>
                      <input type="text" id="advanceAmount" defaultValue={receiptData.advanceAmount} readOnly />
                    </div>
                )}
                {receiptData.status === 'Block' && (
                  <>
                    <div className="cus-data-field">
                      <label htmlFor="blockedDays">No. of Blocked Days</label>
                      <input type="text" id="blockedDays" defaultValue={receiptData.blockedDays} readOnly />
                    </div>
                    <div className="cus-data-field">
                      <label htmlFor="daysLeft">No. of Days Left</label>
                      <input type="text" id="daysLeft" defaultValue={receiptData.daysLeft} readOnly />
                    </div>
                  </>
                )}
                {receiptData.status === 'Part-Payment' && (
                  <>
                    <div className="cus-data-field">
                      <label htmlFor="paidAmount">Amount Paid Till Now</label>
                      <input type="text" id="paidAmount" defaultValue={receiptData.paidAmount} readOnly />
                    </div>
                    <div className="cus-data-field">
                      <label htmlFor="pendingAmount">Pending Payment</label>
                      <input type="text" id="pendingAmount" defaultValue={receiptData.pendingAmount} readOnly />
                    </div>
                  </>
                )}
                {/* Render fields for Villas type */}
              </>
            );
          case 'Plots':
            return (
              <>
                <div className="cus-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={receiptData.invoiceNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="dateOfOnboard">Date</label>
                  <input type="text" id="dateOfOnboard" defaultValue={receiptData.date} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" defaultValue={receiptData.commissionType} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="plotNumber">Plot Number</label>
                  <input type="text" id="plotNumber" defaultValue={receiptData.plotNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="priceOfProperty">Price of Property</label>
                  <input type="text" id="priceOfProperty" defaultValue={receiptData.priceOfProperty} />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="modeOfPayment">T/A Mode of Payment</label>
                  <input type="text" id="modeOfPayment" defaultValue={receiptData.modeOfPayment} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={receiptData.status} readOnly />
                </div>
                {receiptData.status === 'Token' && (
                    <div className="cus-data-field">
                      <label htmlFor="tokenAmount">Token Amount</label>
                      <input type="text" id="tokenAmount" defaultValue={receiptData.tokenAmount} readOnly />
                    </div>
                )}
                {receiptData.status === 'Advance' && (
                    <div className="cus-data-field">
                      <label htmlFor="advanceAmount">Advance Amount</label>
                      <input type="text" id="advanceAmount" defaultValue={receiptData.advanceAmount} readOnly />
                    </div>
                )}
                {receiptData.status === 'Block' && (
                  <>
                    <div className="cus-data-field">
                      <label htmlFor="blockedDays">No. of Blocked Days</label>
                      <input type="text" id="blockedDays" defaultValue={receiptData.blockedDays} readOnly />
                    </div>
                    <div className="cus-data-field">
                      <label htmlFor="daysLeft">No. of Days Left</label>
                      <input type="text" id="daysLeft" defaultValue={receiptData.daysLeft} readOnly />
                    </div>
                  </>
                )}
                {receiptData.status === 'Part-Payment' && (
                  <>
                    <div className="cus-data-field">
                      <label htmlFor="paidAmount">Amount Paid Till Now</label>
                      <input type="text" id="paidAmount" defaultValue={receiptData.paidAmount} readOnly />
                    </div>
                    <div className="cus-data-field">
                      <label htmlFor="pendingAmount">Pending Payment</label>
                      <input type="text" id="pendingAmount" defaultValue={receiptData.pendingAmount} readOnly />
                    </div>
                  </>
                )}
                {/* Render fields for Plots type */}
              </>
            );
          case 'Farm lands':
            return (
              <>
                <div className="cus-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={receiptData.invoiceNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="dateOfOnboard">Date</label>
                  <input type="text" id="dateOfOnboard" defaultValue={receiptData.date} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" defaultValue={receiptData.commissionType} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="plotNumber">Plot Number</label>
                  <input type="text" id="plotNumber" defaultValue={receiptData.plotNumber} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="sqYards">Square Yards</label>
                  <input type="text" id="sqYards" defaultValue={receiptData.sqYards} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="priceOfProperty">Price of Property</label>
                  <input type="text" id="priceOfProperty" defaultValue={receiptData.priceOfProperty} />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="modeOfPayment">T/A Mode of Payment</label>
                  <input type="text" id="modeOfPayment" defaultValue={receiptData.modeOfPayment} readOnly />
                </div>
                <div className="cus-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={receiptData.status} readOnly />
                </div>
                {receiptData.status === 'Token' && (
                    <div className="cus-data-field">
                      <label htmlFor="tokenAmount">Token Amount</label>
                      <input type="text" id="tokenAmount" defaultValue={receiptData.tokenAmount} readOnly />
                    </div>
                )}
                {receiptData.status === 'Advance' && (
                    <div className="cus-data-field">
                      <label htmlFor="advanceAmount">Advance Amount</label>
                      <input type="text" id="advanceAmount" defaultValue={receiptData.advanceAmount} readOnly />
                    </div>
                )}
                {receiptData.status === 'Block' && (
                  <>
                    <div className="cus-data-field">
                      <label htmlFor="blockedDays">No. of Blocked Days</label>
                      <input type="text" id="blockedDays" defaultValue={receiptData.blockedDays} readOnly />
                    </div>
                    <div className="cus-data-field">
                      <label htmlFor="daysLeft">No. of Days Left</label>
                      <input type="text" id="daysLeft" defaultValue={receiptData.daysLeft} readOnly />
                    </div>
                  </>
                )}
                {receiptData.status === 'Part-Payment' && (
                  <>
                    <div className="cus-data-field">
                      <label htmlFor="paidAmount">Amount Paid Till Now</label>
                      <input type="text" id="paidAmount" defaultValue={receiptData.paidAmount} readOnly />
                    </div>
                    <div className="cus-data-field">
                      <label htmlFor="pendingAmount">Pending Payment</label>
                      <input type="text" id="pendingAmount" defaultValue={receiptData.pendingAmount} readOnly />
                    </div>
                  </>
                )}
                {/* Render fields for Farm land type */}
              </>
            );
          default:
            return null;
        }
      };

  return (
    <div className="cus-det">
        <div className="cus-sec">
            <div className='close'>
                <img src={close} alt="Close card" onClick={onClose}/>
            </div>
            <div className="cus-head">
                <h3>Customer</h3>
            </div>
            <div className="cus-data">
                {renderFields()}
            </div>
            <div className="cus-close">
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
  );
};

export default CustomerCard;
