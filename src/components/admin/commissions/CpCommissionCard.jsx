import React, {  } from "react";
// import './pendingReceipts.css'
import logo from '../../../assets/logo.svg'
import close from '../../../assets/menuClose.svg'

const CpCommissionCard = ({ channelPartnerID, cpCommissionCardDetails, onClose }) => {
    const cardData = cpCommissionCardDetails.find(data => data.channelPartnerID === channelPartnerID);
    const commissionLeft = (cardData.totalCommission - cardData.commissionReceived);

    if(!cardData) return null;

    const renderFields = () => {
        const projectType = cardData.projectType;


        switch (projectType) {
          case 'APARTMENT':
            return (
              <>
                <div className="rec-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={cardData.invoiceNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="dateOfOnboard">Date of Onboard</label>
                  <input type="text" id="dateOfOnboard" defaultValue={cardData.dateOfOnboard} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="channelPartnerID">Channel Partner ID</label>
                  <input type="text" id="channelPartnerID" defaultValue={cardData.channelPartnerID} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="channelPartnerName">Channel Partner Name</label>
                  <input type="text" id="channelPartnerName" defaultValue={cardData.channelPartnerName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={cardData.clientName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={cardData.clientPhone} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={cardData.aadhaarNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={cardData.projectType} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={cardData.projectName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="towerNumber">Tower Number</label>
                  <input type="text" id="towerNumber" defaultValue={cardData.towerNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="flatNumber">Flat Number</label>
                  <input type="text" id="flatNumber" defaultValue={cardData.flatNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="priceOfProperty">Price of Property</label>
                  <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={cardData.status} readOnly />
                </div>
                {/* {cardData.status === 'Block' && (
                  <>
                    <div className="rec-data-field">
                      <label htmlFor="blockedDays">Blocked Days</label>
                      <input type="text" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                    </div>
                    <div className="rec-data-field">
                      <label htmlFor="remark">Remark</label>
                      <input type="text" id="remark" defaultValue={cardData.remark} readOnly />
                    </div>
                  </>
                )} */}
                <div className="rec-data-field">
                  <label htmlFor="modeOfPayment">T/A Mode of Payment</label>
                  <input type="text" id="modeOfPayment" defaultValue={cardData.modeOfPayment} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="totalCommission">Total Commission</label>
                  <input type="text" id="totalCommission" defaultValue={cardData.totalCommission} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commissionReceived">Commission Received Till Now</label>
                  <input type="text" id="commissionReceived" defaultValue={cardData.commissionReceived} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commission">Enter Commission *</label>
                  <input type="number" id="commission"  />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commissionLeft">Commission Left</label>
                  <input type="text" id="commissionLeft" defaultValue={commissionLeft} readOnly  />
                </div>
              </>
            );
          case 'VILLA':
            return (
              <>
                <div className="rec-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={cardData.invoiceNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="dateOfOnboard">Date of Onboard</label>
                  <input type="text" id="dateOfOnboard" defaultValue={cardData.dateOfOnboard} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="channelPartnerID">Channel Partner ID</label>
                  <input type="text" id="channelPartnerID" defaultValue={cardData.channelPartnerID} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="channelPartnerName">Channel Partner Name</label>
                  <input type="text" id="channelPartnerName" defaultValue={cardData.channelPartnerName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={cardData.clientName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={cardData.clientPhone} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={cardData.aadhaarNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={cardData.projectType} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={cardData.projectName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="villaNumber">Villa Number</label>
                  <input type="text" id="villaNumber" defaultValue={cardData.villaNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="priceOfProperty">Price of Property</label>
                  <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={cardData.status} readOnly />
                </div>
                {/* {cardData.status === 'Block' && (
                  <>
                    <div className="rec-data-field">
                      <label htmlFor="blockedDays">Blocked Days</label>
                      <input type="text" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                    </div>
                    <div className="rec-data-field">
                      <label htmlFor="remark">Remark</label>
                      <input type="text" id="remark" defaultValue={cardData.remark} readOnly />
                    </div>
                  </>
                )} */}
                <div className="rec-data-field">
                  <label htmlFor="modeOfPayment">T/A Mode of Payment</label>
                  <input type="text" id="modeOfPayment" defaultValue={cardData.modeOfPayment} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="totalCommission">Total Commission</label>
                  <input type="text" id="totalCommission" defaultValue={cardData.totalCommission} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commissionReceived">Commission Received Till Now</label>
                  <input type="text" id="commissionReceived" defaultValue={cardData.commissionReceived} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commission">Enter Commission *</label>
                  <input type="number" id="commission"  />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commissionLeft">Commission Left</label>
                  <input type="text" id="commissionLeft" defaultValue={commissionLeft} readOnly  />
                </div>
                {/* Render fields for Villas type */}
              </>
            );
          case 'PLOT':
            return (
              <>
                <div className="rec-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={cardData.invoiceNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="dateOfOnboard">Date of Onboard</label>
                  <input type="text" id="dateOfOnboard" defaultValue={cardData.dateOfOnboard} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="channelPartnerID">Channel Partner ID</label>
                  <input type="text" id="channelPartnerID" defaultValue={cardData.channelPartnerID} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="channelPartnerName">Channel Partner Name</label>
                  <input type="text" id="channelPartnerName" defaultValue={cardData.channelPartnerName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={cardData.clientName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={cardData.clientPhone} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={cardData.aadhaarNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={cardData.projectType} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={cardData.projectName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="plotNumber">Plot Number</label>
                  <input type="text" id="plotNumber" defaultValue={cardData.plotNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="priceOfProperty">Price of Property</label>
                  <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={cardData.status} readOnly />
                </div>
                {/* {cardData.status === 'Block' && (
                  <>
                    <div className="rec-data-field">
                      <label htmlFor="blockedDays">Blocked Days</label>
                      <input type="text" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                    </div>
                    <div className="rec-data-field">
                      <label htmlFor="remark">Remark</label>
                      <input type="text" id="remark" defaultValue={cardData.remark} readOnly />
                    </div>
                  </>
                )} */}
                <div className="rec-data-field">
                  <label htmlFor="modeOfPayment">T/A Mode of Payment</label>
                  <input type="text" id="modeOfPayment" defaultValue={cardData.modeOfPayment} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="totalCommission">Total Commission</label>
                  <input type="text" id="totalCommission" defaultValue={cardData.totalCommission} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commissionReceived">Commission Received Till Now</label>
                  <input type="text" id="commissionReceived" defaultValue={cardData.commissionReceived} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commission">Enter Commission *</label>
                  <input type="number" id="commission"  />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commissionLeft">Commission Left</label>
                  <input type="text" id="commissionLeft" defaultValue={commissionLeft} readOnly  />
                </div>
                {/* Render fields for Plots type */}
              </>
            );
          case 'FARM_LAND':
            return (
              <>
                <div className="rec-data-field">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input type="text" id="invoiceNumber" defaultValue={cardData.invoiceNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="dateOfOnboard">Date of Onboard</label>
                  <input type="text" id="dateOfOnboard" defaultValue={cardData.dateOfOnboard} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="channelPartnerID">Channel Partner ID</label>
                  <input type="text" id="channelPartnerID" defaultValue={cardData.channelPartnerID} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="channelPartnerName">Channel Partner Name</label>
                  <input type="text" id="channelPartnerName" defaultValue={cardData.channelPartnerName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={cardData.clientName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={cardData.clientPhone} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={cardData.aadhaarNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={cardData.projectType} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={cardData.projectName} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="plotNumber">Plot Number</label>
                  <input type="text" id="plotNumber" defaultValue={cardData.plotNumber} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="sqYards">Square Yards</label>
                  <input type="text" id="sqYards" defaultValue={cardData.sqYards} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="priceOfProperty">Price of Property</label>
                  <input type="text" id="priceOfProperty" defaultValue={cardData.priceOfProperty} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" defaultValue={cardData.status} readOnly />
                </div>
                {/* {cardData.status === 'Block' && (
                  <>
                    <div className="rec-data-field">
                      <label htmlFor="blockedDays">Blocked Days</label>
                      <input type="text" id="blockedDays" defaultValue={cardData.blockedDays} readOnly />
                    </div>
                    <div className="rec-data-field">
                      <label htmlFor="remark">Remark</label>
                      <input type="text" id="remark" defaultValue={cardData.remark} readOnly />
                    </div>
                  </>
                )} */}
                <div className="rec-data-field">
                  <label htmlFor="modeOfPayment">T/A Mode of Payment</label>
                  <input type="text" id="modeOfPayment" defaultValue={cardData.modeOfPayment} readOnly />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="totalCommission">Total Commission</label>
                  <input type="text" id="totalCommission" defaultValue={cardData.totalCommission} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commissionReceived">Commission Received Till Now</label>
                  <input type="text" id="commissionReceived" defaultValue={cardData.commissionReceived} />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commission">Enter Commission *</label>
                  <input type="number" id="commission"  />
                </div>
                <div className="rec-data-field">
                  <label htmlFor="commissionLeft">Commission Left</label>
                  <input type="text" id="commissionLeft" defaultValue={commissionLeft} readOnly  />
                </div>
                {/* Render fields for Farm land type */}
              </>
            );
          default:
            return null;
        }
      };
      

  return (
    <div className="sp-det">
        <div className="sp-sec">
            <div className="sp-head">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              <h3>Commission</h3>
              <div className='close'>
                <img src={close} alt="Close card" onClick={onClose} />
              </div>
            </div>
            <div className="sp-data">
                {renderFields()}
            </div>
            <div className="com-actions">
            <div className="com-close">
                <button onClick={onClose}>Close</button>
            </div>
            <div className="com-cancel">
                <button onClick={onClose}>Cancel</button>
            </div>
            <div className="com-submit">
                <button>Submit</button>
            </div>
            </div>
        </div>
    </div>
  );
};

export default CpCommissionCard;
