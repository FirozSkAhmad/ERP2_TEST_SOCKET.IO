import React from "react";
import logo from "../../assets/logo.svg";
import close from "../../assets/menuClose.svg";

const CommissionCard = ({cardData, onClose }) => {
  console.log(cardData);
  
  const commissionLeft = (cardData.commission.total_commission - cardData.commission.commission_recived_till_now);

  const renderFields = () => {
    if (!cardData) return null;

    const projectType = cardData.project.project_type;

    switch (projectType) {
      case "APARTMENT":
        return (
          <>
            <div className="sp-data-field">
              <label htmlFor="commissionHolderID">Commission Holder ID</label>
              <input
                type="text"
                id="commissionHolderID"
                defaultValue={cardData.user.commission_holder_id}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionHolderName">
                Commission Holder Name
              </label>
              <input
                type="text"
                id="commissionHolderName"
                defaultValue={cardData.user.commission_holder_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="clientName">Client Name</label>
              <input
                type="text"
                id="clientName"
                defaultValue={cardData.client_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="clientPhone">Client Phone</label>
              <input
                type="text"
                id="clientPhone"
                defaultValue={cardData.client_phn_no}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
              <input
                type="text"
                id="aadhaarNumber"
                defaultValue={cardData.client_adhar_no}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionType">Type of Commission</label>
              <input
                type="text"
                id="commissionType"
                defaultValue={cardData.commission.type_of_commission}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                id="projectName"
                defaultValue={cardData.project.project_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="projectType">Project Type</label>
              <input
                type="text"
                id="projectType"
                defaultValue={cardData.project.project_type}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="towerNumber">Tower Number</label>
              <input
                type="text"
                id="towerNumber"
                defaultValue={cardData.project.tower_number}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="flatNumber">Flat Number</label>
              <input
                type="text"
                id="flatNumber"
                defaultValue={cardData.project.flat_number}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="priceOfProperty">Price of Property</label>
              <input
                type="text"
                id="priceOfProperty"
                defaultValue={cardData.PropertyDetail.property_price}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                defaultValue={cardData.project.status}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="totalCommission">Total Commission</label>
              <input
                type="text"
                id="totalCommission"
                defaultValue={cardData.commission.total_commission}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionReceived">
                Commission Received Till Now
              </label>
              <input
                type="text"
                id="commissionReceived"
                defaultValue={cardData.commission.commission_recived_till_now}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionLeft">Commission Left</label>
              <input
                type="text"
                id="commissionLeft"
                defaultValue={commissionLeft}
                readOnly
              />
            </div>
          </>
        );
      case "VILLA":
        return (
          <>
            <div className="sp-data-field">
              <label htmlFor="commissionHolderID">Sales Person ID</label>
              <input
                type="text"
                id="commissionHolderID"
                defaultValue={cardData.user.commission_holder_id}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionHolderName">
                Sales Person Name
              </label>
              <input
                type="text"
                id="commissionHolderName"
                defaultValue={cardData.user.commission_holder_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="clientName">Client Name</label>
              <input
                type="text"
                id="clientName"
                defaultValue={cardData.client_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="clientPhone">Client Phone</label>
              <input
                type="text"
                id="clientPhone"
                defaultValue={cardData.client_phn_no}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
              <input
                type="text"
                id="aadhaarNumber"
                defaultValue={cardData.client_adhar_no}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionType">Type of Commission</label>
              <input
                type="text"
                id="commissionType"
                defaultValue={cardData.commission.type_of_commission}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                id="projectName"
                defaultValue={cardData.project.project_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="projectType">Project Type</label>
              <input
                type="text"
                id="projectType"
                defaultValue={cardData.project.project_type}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="villaNumber">Villa Number</label>
              <input
                type="text"
                id="villaNumber"
                defaultValue={cardData.project.villa_number}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="priceOfProperty">Price of Property</label>
              <input
                type="text"
                id="priceOfProperty"
                defaultValue={cardData.PropertyDetail.property_price}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                defaultValue={cardData.project.status}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="totalCommission">Total Commission</label>
              <input
                type="text"
                id="totalCommission"
                defaultValue={cardData.commission.total_commission}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionReceived">
                Commission Received Till Now
              </label>
              <input
                type="text"
                id="commissionReceived"
                defaultValue={cardData.commission.commission_recived_till_now}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionLeft">Commission Left</label>
              <input
                type="text"
                id="commissionLeft"
                defaultValue={commissionLeft}
                readOnly
              />
            </div>
            {/* Render fields for Villas type */}
          </>
        );
      case "PLOT":
        return (
          <>
            <div className="sp-data-field">
              <label htmlFor="commissionHolderID">Sales Person ID</label>
              <input
                type="text"
                id="commissionHolderID"
                defaultValue={cardData.user.commission_holder_id}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionHolderName">
                Sales Person Name
              </label>
              <input
                type="text"
                id="commissionHolderName"
                defaultValue={cardData.user.commission_holder_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="clientName">Client Name</label>
              <input
                type="text"
                id="clientName"
                defaultValue={cardData.client_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="clientPhone">Client Phone</label>
              <input
                type="text"
                id="clientPhone"
                defaultValue={cardData.client_phn_no}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
              <input
                type="text"
                id="aadhaarNumber"
                defaultValue={cardData.client_adhar_no}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionType">Type of Commission</label>
              <input
                type="text"
                id="commissionType"
                defaultValue={cardData.commission.type_of_commission}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                id="projectName"
                defaultValue={cardData.project.project_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="projectType">Project Type</label>
              <input
                type="text"
                id="projectType"
                defaultValue={cardData.project.project_type}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="plotNumber">Plot Number</label>
              <input
                type="text"
                id="plotNumber"
                defaultValue={cardData.project.plot_number}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="priceOfProperty">Price of Property</label>
              <input
                type="text"
                id="priceOfProperty"
                defaultValue={cardData.PropertyDetail.property_price}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                defaultValue={cardData.project.status}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="totalCommission">Total Commission</label>
              <input
                type="text"
                id="totalCommission"
                defaultValue={cardData.commission.total_commission}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionReceived">
                Commission Received Till Now
              </label>
              <input
                type="text"
                id="commissionReceived"
                defaultValue={cardData.commission.commission_recived_till_now}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionLeft">Commission Left</label>
              <input
                type="text"
                id="commissionLeft"
                defaultValue={commissionLeft}
                readOnly
              />
            </div>
            {/* Render fields for Plots type */}
          </>
        );
      case "FARM_LAND":
        return (
          <>
            <div className="sp-data-field">
              <label htmlFor="commissionHolderID">Sales Person ID</label>
              <input
                type="text"
                id="commissionHolderID"
                defaultValue={cardData.user.commission_holder_id}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionHolderName">
                Sales Person Name
              </label>
              <input
                type="text"
                id="commissionHolderName"
                defaultValue={cardData.user.commission_holder_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="clientName">Client Name</label>
              <input
                type="text"
                id="clientName"
                defaultValue={cardData.client_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="clientPhone">Client Phone</label>
              <input
                type="text"
                id="clientPhone"
                defaultValue={cardData.client_phn_no}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
              <input
                type="text"
                id="aadhaarNumber"
                defaultValue={cardData.client_adhar_no}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionType">Type of Commission</label>
              <input
                type="text"
                id="commissionType"
                defaultValue={cardData.commission.type_of_commission}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                id="projectName"
                defaultValue={cardData.project.project_name}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="projectType">Project Type</label>
              <input
                type="text"
                id="projectType"
                defaultValue={cardData.project.project_type}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="plotNumber">Plot Number</label>
              <input
                type="text"
                id="plotNumber"
                defaultValue={cardData.project.plot_number}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="sqYards">Square Yards</label>
              <input
                type="text"
                id="sqYards"
                defaultValue={cardData.project.sq_yards}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="priceOfProperty">Price of Property</label>
              <input
                type="text"
                id="priceOfProperty"
                defaultValue={cardData.PropertyDetail.property_price}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                defaultValue={cardData.project.status}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="totalCommission">Total Commission</label>
              <input
                type="text"
                id="totalCommission"
                defaultValue={cardData.commission.total_commission}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionReceived">
                Commission Received Till Now
              </label>
              <input
                type="text"
                id="commissionReceived"
                defaultValue={cardData.commission.commission_recived_till_now}
                readOnly
              />
            </div>
            <div className="sp-data-field">
              <label htmlFor="commissionLeft">Commission Left</label>
              <input
                type="text"
                id="commissionLeft"
                defaultValue={commissionLeft}
                readOnly
              />
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
          <div className="close">
            <img src={close} alt="Close card" onClick={onClose} />
          </div>
        </div>
        <div className="sp-data">{renderFields()}</div>
        <div className="sp-close">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CommissionCard;
