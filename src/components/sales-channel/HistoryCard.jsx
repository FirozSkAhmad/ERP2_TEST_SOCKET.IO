import React from "react";
import '../sales-channel/style.css'
import close from '../../assets/menuClose.svg'

const HistoryCard = ({ history, onClose }) => {

    const renderFields = () => {
        switch (history.projectType) {
          case 'Apartment':
            return (
              <>
                <div className="his-data-feild">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" value={history.salesPersonID} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" value={history.salesPersonName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" value={history.clientName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" value={history.clientPhone} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="aadhaarNo">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNo" value={history.aadhaarNo} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" value={history.commissionType} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" value={history.projectName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" value={history.projectType} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="towerNumber">Tower Number</label>
                  <input type="text" id="towerNumber" value={history.towerNumber} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="flatNumber">Flat Number</label>
                  <input type="text" id="flatNumber" value={history.flatNumber} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" value={history.status} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="totalCommission">Total Commission</label>
                  <input type="text" id="totalCommission" value={history.totalCommission} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="commissionReceived">Commission Received Till Now</label>
                  <input type="text" id="commissionReceived" value={history.commissionReceived} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="leftCommission">Commission Left</label>
                  <input type="text" id="leftCommission" value={history.leftCommission} readOnly />
                </div>
              </>
            );
          case 'Villa':
            return (
              <>
              <div className="his-data-feild">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" value={history.salesPersonID} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" value={history.salesPersonName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" value={history.clientName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" value={history.clientPhone} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="aadhaarNo">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNo" value={history.aadhaarNo} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" value={history.commissionType} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" value={history.projectName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" value={history.projectType} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="villaNumber">Villa Number</label>
                  <input type="text" id="villaNumber" value={history.villaNumber} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" value={history.status} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="totalCommission">Total Commission</label>
                  <input type="text" id="totalCommission" value={history.totalCommission} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="commissionReceived">Commission Received Till Now</label>
                  <input type="text" id="commissionReceived" value={history.commissionReceived} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="leftCommission">Commission Left</label>
                  <input type="text" id="leftCommission" value={history.leftCommission} readOnly />
                </div>

                {/* Render fields for Villa type */}
              </>
            );
          case 'Plot':
            return (
              <>
              <div className="his-data-feild">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" value={history.salesPersonID} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" value={history.salesPersonName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" value={history.clientName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" value={history.clientPhone} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="aadhaarNo">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNo" value={history.aadhaarNo} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" value={history.commissionType} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" value={history.projectName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" value={history.projectType} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="plotNumber">Plot Number</label>
                  <input type="text" id="plotNumber" value={history.plotNumber} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" value={history.status} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="totalCommission">Total Commission</label>
                  <input type="text" id="totalCommission" value={history.totalCommission} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="commissionReceived">Commission Received Till Now</label>
                  <input type="text" id="commissionReceived" value={history.commissionReceived} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="leftCommission">Commission Left</label>
                  <input type="text" id="leftCommission" value={history.leftCommission} readOnly />
                </div>

                {/* Render fields for Plot type */}
              </>
            );
          case 'Farm land':
            return (
              <>
              <div className="his-data-feild">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" value={history.salesPersonID} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" value={history.salesPersonName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" value={history.clientName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" value={history.clientPhone} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="aadhaarNo">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNo" value={history.aadhaarNo} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" value={history.commissionType} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" value={history.projectName} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" value={history.projectType} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="plotNumber">Plot Number</label>
                  <input type="text" id="plotNumber" value={history.plotNumber} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="sqYards">Square Yards</label>
                  <input type="text" id="sqYards" value={history.sqYards} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="status">Status</label>
                  <input type="text" id="status" value={history.status} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="totalCommission">Total Commission</label>
                  <input type="text" id="totalCommission" value={history.totalCommission} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="commissionReceived">Commission Received Till Now</label>
                  <input type="text" id="commissionReceived" value={history.commissionReceived} readOnly />
                </div>
                <div className="his-data-feild">
                  <label htmlFor="leftCommission">Commission Left</label>
                  <input type="text" id="leftCommission" value={history.leftCommission} readOnly />
                </div>

                {/* Render fields for Farm land type */}
              </>
            );
          default:
            return null;
        }
      };

  return (
    <div className="his-det">
        <div className="his-sec">
            <div className='close'>
                <img src={close} alt="Close card" onClick={onClose}/>
            </div>
            <div className="his-det-head">
                <h3>
                    History
                </h3>
            </div>
            <div className="his-data">
                {renderFields()}
            </div>
        </div>
    </div>
  );
};

export default HistoryCard;
