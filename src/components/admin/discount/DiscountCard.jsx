import React from "react";
import close from '../../../assets/menuClose.svg'
import discountCardData from "../../../data/discountCardData";

const DiscountCard = ({ projectID, onClose }) => {
    const receiptData = discountCardData.find(item => item.projectID === projectID);

    const renderFields = () => {
        switch (receiptData.projectType) {
          case 'Apartments':
            return (
              <>
                <div className="disc-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" defaultValue={receiptData.commissionType} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="towerNumber">Tower Number</label>
                  <input type="text" id="towerNumber" defaultValue={receiptData.towerNumber} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="flatNumber">Flat Number</label>
                  <input type="text" id="flatNumber" defaultValue={receiptData.flatNumber} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="propertyPrice">Price of Property</label>
                  <input type="text" id="propertyPrice" defaultValue={receiptData.propertyPrice} />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="discount">Discount %</label>
                  <input type="text" id="discount" defaultValue={receiptData.discount} readOnly />
                </div>
              </>
            );
          case 'Villas':
            return (
              <>
                <div className="disc-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" defaultValue={receiptData.commissionType} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="villaNumber">Villa Number</label>
                  <input type="text" id="villaNumber" defaultValue={receiptData.villaNumber} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="propertyPrice">Price of Property</label>
                  <input type="text" id="propertyPrice" defaultValue={receiptData.propertyPrice} />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="discount">Discount %</label>
                  <input type="text" id="discount" defaultValue={receiptData.discount} readOnly />
                </div>
              </>
            );
          case 'Plots':
            return (
              <>
                <div className="disc-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" defaultValue={receiptData.commissionType} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="plotNumber">Plot Number</label>
                  <input type="text" id="plotNumber" defaultValue={receiptData.plotNumber} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="propertyPrice">Price of Property</label>
                  <input type="text" id="propertyPrice" defaultValue={receiptData.propertyPrice} />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="discount">Discount %</label>
                  <input type="text" id="discount" defaultValue={receiptData.discount} readOnly />
                </div>
              </>
            );
          case 'Farm lands':
            return (
              <>
                <div className="disc-data-field">
                  <label htmlFor="salesPersonID">Sales Person ID</label>
                  <input type="text" id="salesPersonID" defaultValue={receiptData.salesPersonID} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="salesPersonName">Sales Person Name</label>
                  <input type="text" id="salesPersonName" defaultValue={receiptData.salesPersonName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="clientName">Client Name</label>
                  <input type="text" id="clientName" defaultValue={receiptData.clientName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="clientPhone">Client Phone</label>
                  <input type="text" id="clientPhone" defaultValue={receiptData.clientPhone} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                  <input type="text" id="aadhaarNumber" defaultValue={receiptData.aadhaarNumber} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="commissionType">Type of Commission</label>
                  <input type="text" id="commissionType" defaultValue={receiptData.commissionType} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="projectName">Project Name</label>
                  <input type="text" id="projectName" defaultValue={receiptData.projectName} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="projectType">Project Type</label>
                  <input type="text" id="projectType" defaultValue={receiptData.projectType} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="plotNumber">Plot Number</label>
                  <input type="text" id="plotNumber" defaultValue={receiptData.plotNumber} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="sqYards">Square Yards</label>
                  <input type="text" id="sqYards" defaultValue={receiptData.sqYards} readOnly />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="propertyPrice">Price of Property</label>
                  <input type="text" id="propertyPrice" defaultValue={receiptData.propertyPrice} />
                </div>
                <div className="disc-data-field">
                  <label htmlFor="discount">Discount %</label>
                  <input type="text" id="discount" defaultValue={receiptData.discount} readOnly />
                </div>
              </>
            );
          default:
            return null;
        }
      };

  return (
    <div className="disc-det">
        <div className="disc-sec">
            <div className='close'>
                <img src={close} alt="Close card" onClick={onClose}/>
            </div>
            <div className="disc-head">
                <h3>Discount</h3>
            </div>
            <div className="disc-data">
                {renderFields()}
            </div>
            <div className="disc-close">
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    </div>
  );
};

export default DiscountCard;
