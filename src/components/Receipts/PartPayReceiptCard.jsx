import React, { useState } from "react";
import "./pendingReceipts.css";
import close from "../../assets/menuClose.svg";

const PartPayReceiptCard = ({ cardData, onClose }) => {
  const [formData, setFormData] = useState({
    amount: cardData.partPaymentData.amount || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const BaseURL = "https://erp-phase2-bck.onrender.com";

  // API to update amount

  const handleSave = async () => {
    try {
      if (formData.amount === "") {
        // Display an error message or prevent submission if the amount is empty
        console.error("Amount cannot be empty");
        return;
      }

      const accessToken = localStorage.getItem("token");
      const response = await fetch(`${BaseURL}/receipt/editParticularPartPaymentAmount`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          pd_id: cardData.ReceiptData.PropertyDetail.pd_id,
          pp_id: cardData.partPaymentData.pp_id,
          new_amount: formData.amount,
        }),
      });
      if (!response.ok) {
        throw new Error("Network error. Network response was not ok");
      }
      console.log("Successfully updated amount:", formData);
      } catch (error) {
        console.error("Error saving updated form:", error);
      }
  }

  // API to delete

  const handleDelete = async () => {
    const partPayID = cardData.partPaymentData.pp_id;
    const projDetID = cardData.ReceiptData.PropertyDetail.pd_id;

    try {
      const accessToken = localStorage.getItem("token");
      const response = await fetch(`${BaseURL}/receipt/deleteParticularPartPaymentAmount?pp_id=${partPayID}&pd_id=${projDetID}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network error. Network response was not ok");
      }
      console.log("Successfully deleted part payment amount");
    } catch (error) {
      console.error("Error deleting part payment amount:", error);
    }
  }

  const renderFields = () => {
    if (!cardData) return null;

    const projectType = cardData.ReceiptData.project.project_type;

    switch (projectType) {
      case "APARTMENT":
        return (
          <>
            <div className="rec-data-field">
              <label htmlFor="invoiceNumber">Invoice Number</label>
              <input
                type="text"
                id="invoiceNumber"
                defaultValue={cardData.ReceiptData.receipt_id}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                id="date"
                defaultValue={cardData.ReceiptData.date_of_validation}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="salesPersonID">Sales Person ID</label>
              <input
                type="text"
                id="salesPersonID"
                defaultValue={cardData.ReceiptData.user.user_id}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="salesPersonName">Sales Person Name</label>
              <input
                type="text"
                id="salesPersonName"
                defaultValue={cardData.ReceiptData.user.user_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="clientName">Client Name</label>
              <input
                type="text"
                id="clientName"
                defaultValue={cardData.ReceiptData.client_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="clientPhone">Client Phone</label>
              <input
                type="text"
                id="clientPhone"
                defaultValue={cardData.ReceiptData.client_phn_no}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
              <input
                type="text"
                id="aadhaarNumber"
                defaultValue={cardData.ReceiptData.client_adhar_no}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="projectType">Project Type</label>
              <input
                type="text"
                id="projectType"
                defaultValue={cardData.ReceiptData.project.project_type}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                id="projectName"
                defaultValue={cardData.ReceiptData.project.project_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="towerNumber">Tower Number</label>
              <input
                type="text"
                id="towerNumber"
                defaultValue={cardData.ReceiptData.project.tower_number}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="flatNumber">Flat Number</label>
              <input
                type="text"
                id="flatNumber"
                defaultValue={cardData.ReceiptData.project.flat_number}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="discount">Discount %</label>
              <input
                type="text"
                id="discount"
                defaultValue={cardData.ReceiptData.PropertyDetail.discount_percent}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="priceOfProperty">Price of Property</label>
              <input
                type="text"
                id="priceOfProperty"
                defaultValue={cardData.ReceiptData.PropertyDetail.property_price}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                defaultValue={cardData.ReceiptData.project.status}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="dateOfPartPayment">Date of part-payment</label>
              <input
                type="text"
                id="dateOfPartPayment"
                defaultValue={cardData.partPaymentData.date_of_pp_payment}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                id="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
          </>
        );
      case "VILLA":
        return (
          <>
            <div className="rec-data-field">
              <label htmlFor="invoiceNumber">Invoice Number</label>
              <input
                type="text"
                id="invoiceNumber"
                defaultValue={cardData.ReceiptData.receipt_id}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                id="date"
                defaultValue={cardData.ReceiptData.date_of_validation}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="salesPersonID">Sales Person ID</label>
              <input
                type="text"
                id="salesPersonID"
                defaultValue={cardData.ReceiptData.user.user_id}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="salesPersonName">Sales Person Name</label>
              <input
                type="text"
                id="salesPersonName"
                defaultValue={cardData.ReceiptData.user.user_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="clientName">Client Name</label>
              <input
                type="text"
                id="clientName"
                defaultValue={cardData.ReceiptData.client_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="clientPhone">Client Phone</label>
              <input
                type="text"
                id="clientPhone"
                defaultValue={cardData.ReceiptData.client_phn_no}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
              <input
                type="text"
                id="aadhaarNumber"
                defaultValue={cardData.ReceiptData.client_adhar_no}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="projectType">Project Type</label>
              <input
                type="text"
                id="projectType"
                defaultValue={cardData.ReceiptData.project.project_type}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                id="projectName"
                defaultValue={cardData.ReceiptData.project.project_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="villaNumber">Villa Number</label>
              <input
                type="text"
                id="villaNumber"
                defaultValue={cardData.ReceiptData.project.villa_number}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="discount">Discount %</label>
              <input
                type="text"
                id="discount"
                defaultValue={cardData.ReceiptData.PropertyDetail.discount_percent}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="priceOfProperty">Price of Property</label>
              <input
                type="text"
                id="priceOfProperty"
                defaultValue={cardData.ReceiptData.PropertyDetail.property_price}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                defaultValue={cardData.ReceiptData.project.status}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="dateOfPartPayment">Date of part-payment</label>
              <input
                type="text"
                id="dateOfPartPayment"
                defaultValue={cardData.partPaymentData.date_of_pp_payment}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                id="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
            {/* Render fields for Villas type */}
          </>
        );
      case "PLOT":
        return (
          <>
            <div className="rec-data-field">
              <label htmlFor="invoiceNumber">Invoice Number</label>
              <input
                type="text"
                id="invoiceNumber"
                defaultValue={cardData.ReceiptData.receipt_id}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                id="date"
                defaultValue={cardData.ReceiptData.date_of_validation}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="salesPersonID">Sales Person ID</label>
              <input
                type="text"
                id="salesPersonID"
                defaultValue={cardData.ReceiptData.user.user_id}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="salesPersonName">Sales Person Name</label>
              <input
                type="text"
                id="salesPersonName"
                defaultValue={cardData.ReceiptData.user.user_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="clientName">Client Name</label>
              <input
                type="text"
                id="clientName"
                defaultValue={cardData.ReceiptData.client_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="clientPhone">Client Phone</label>
              <input
                type="text"
                id="clientPhone"
                defaultValue={cardData.ReceiptData.client_phn_no}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
              <input
                type="text"
                id="aadhaarNumber"
                defaultValue={cardData.ReceiptData.client_adhar_no}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="projectType">Project Type</label>
              <input
                type="text"
                id="projectType"
                defaultValue={cardData.ReceiptData.project.project_type}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                id="projectName"
                defaultValue={cardData.ReceiptData.project.project_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="plotNumber">Plot Number</label>
              <input
                type="text"
                id="plotNumber"
                defaultValue={cardData.ReceiptData.project.plot_number}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="discount">Discount %</label>
              <input
                type="text"
                id="discount"
                defaultValue={cardData.ReceiptData.PropertyDetail.discount_percent}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="priceOfProperty">Price of Property</label>
              <input
                type="text"
                id="priceOfProperty"
                defaultValue={cardData.ReceiptData.PropertyDetail.property_price}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                defaultValue={cardData.ReceiptData.project.status}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="dateOfPartPayment">Date of part-payment</label>
              <input
                type="text"
                id="dateOfPartPayment"
                defaultValue={cardData.partPaymentData.date_of_pp_payment}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                id="amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
            {/* Render fields for Plots type */}
          </>
        );
      case "FARM_LAND":
        return (
          <>
            <div className="rec-data-field">
              <label htmlFor="invoiceNumber">Invoice Number</label>
              <input
                type="text"
                id="invoiceNumber"
                defaultValue={cardData.ReceiptData.receipt_id}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                id="date"
                defaultValue={cardData.ReceiptData.date_of_validation}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="salesPersonID">Sales Person ID</label>
              <input
                type="text"
                id="salesPersonID"
                defaultValue={cardData.ReceiptData.user.user_id}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="salesPersonName">Sales Person Name</label>
              <input
                type="text"
                id="salesPersonName"
                defaultValue={cardData.ReceiptData.user.user_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="clientName">Client Name</label>
              <input
                type="text"
                id="clientName"
                defaultValue={cardData.ReceiptData.client_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="clientPhone">Client Phone</label>
              <input
                type="text"
                id="clientPhone"
                defaultValue={cardData.ReceiptData.client_phn_no}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
              <input
                type="text"
                id="aadhaarNumber"
                defaultValue={cardData.ReceiptData.client_adhar_no}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="projectType">Project Type</label>
              <input
                type="text"
                id="projectType"
                defaultValue={cardData.ReceiptData.project.project_type}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                id="projectName"
                defaultValue={cardData.ReceiptData.project.project_name}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="plotNumber">Plot Number</label>
              <input
                type="text"
                id="plotNumber"
                defaultValue={cardData.ReceiptData.project.plot_number}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="sqYards">Square Yards</label>
              <input
                type="text"
                id="sqYards"
                defaultValue={cardData.ReceiptData.project.sq_yards}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="discount">Discount %</label>
              <input
                type="text"
                id="discount"
                defaultValue={cardData.ReceiptData.PropertyDetail.discount_percent}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="priceOfProperty">Price of Property</label>
              <input
                type="text"
                id="priceOfProperty"
                defaultValue={cardData.ReceiptData.PropertyDetail.property_price}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                id="status"
                defaultValue={cardData.ReceiptData.project.status}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="dateOfPartPayment">Date of part-payment</label>
              <input
                type="text"
                id="dateOfPartPayment"
                defaultValue={cardData.partPaymentData.date_of_pp_payment}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                id="amount"
                value={formData.amount}
                onChange={handleChange}
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
    <div className="rec-det">
      <div className="rec-sec">
        <div className="close">
          <img src={close} alt="Close card" onClick={onClose} />
        </div>
        <div className="rec-head">
          <h3>Part-Payment Receipt</h3>
        </div>
        <div className="rec-data">{renderFields()}</div>
        <div className="rec-actions">
          <div className="rec-delete">
            <button onClick={handleDelete}>Delete</button>
          </div>
          <div className="rec-sec-actions">
            <div className="save">
              <button onClick={handleSave}>Save</button>
            </div>
            <div className="export-btn">
              <button>Export</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartPayReceiptCard;
