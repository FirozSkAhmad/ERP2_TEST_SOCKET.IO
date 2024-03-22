import React, { useEffect, useState, useContext } from "react";
import "./pendingReceipts.css";
import close from "../../assets/menuClose.svg";
import sharedContext from "../../context/SharedContext";
import Loader from "../Loader";
import toast from "react-hot-toast";

const PendingReceiptCard = ({
  receiptID,
  fetchPendingReceiptsList,
  fetchRejectedReceiptsList,
  onClose,
}) => {
  const { setLoader, loader } = useContext(sharedContext);
  const [receiptData, setReceiptData] = useState({});
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [formData, setFormData] = useState({
    receipt_id: receiptID,
    property_price: "",
    discount_percent: "",
    total_commission: "",
  });

  const BaseURL = "https://erp-phase2-bck.onrender.com";

  const makeRequest = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  };

  const fetchParticularReceiptData = async () => {
    setLoader(true);
    setReceiptData({});
    try {
      const token = localStorage.getItem("token");
      const headers = new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });

      const requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      const result = await makeRequest(
        `${BaseURL}/receipt/getParticularReceiptData?receipt_id=${receiptID}`,
        requestOptions
      );

      setReceiptData(result.data);
    } catch (error) {
      console.error("Error fetching pending receipts list:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchParticularReceiptData();
    };
    fetchData();

    const { project, PropertyDetail, commission } = receiptData;

    if (project && PropertyDetail && commission) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        property_price: PropertyDetail.property_price || "",
        discount_percent: PropertyDetail.discount_percent || "",
        total_commission: commission.total_commission || "",
      }));

      const discountedPriceCalc =
        PropertyDetail.property_price && PropertyDetail.discount_percent
          ? parseInt(PropertyDetail.property_price, 10) -
            (parseInt(PropertyDetail.property_price, 10) *
              parseInt(PropertyDetail.discount_percent, 10)) /
              100
          : 0;

      setDiscountedPrice(discountedPriceCalc);
    }
  }, [receiptID]);

  const handleAction = async (approveOrReject) => {
    const { property_price, discount_percent, total_commission } = formData;
    if (approveOrReject == "APPROVE") {
      if (!property_price || !discount_percent || !total_commission) {
        toast.error("please fill the star fields");
      }
    }
    setLoader(true);
    try {
      const token = localStorage.getItem("token"); // Insert secure token retrieval method here
      const headers = new Headers({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      });

      const putBody = JSON.stringify(formData);

      const putRequestOptions = {
        method: "PUT",
        headers: headers,
        body: putBody,
        redirect: "follow",
      };

      const putResult = await makeRequest(
        `${BaseURL}/receipt/validateReceipt/${approveOrReject}`,
        putRequestOptions
      );

      toast.success(`${putResult.message}`);
      onClose();
      // Re-fetch the user list to update the UI
      await fetchPendingReceiptsList();
      await fetchRejectedReceiptsList();
    } catch (error) {
      console.error("Error processing action:", error);
    } finally {
      setLoader(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "property_price") {
      const { discount_percent } = formData;

      const newDiscountedPrice = discount_percent
        ? parseInt(value, 10) -
          (parseInt(value, 10) * parseInt(discount_percent, 10)) / 100
        : "";
      setDiscountedPrice(newDiscountedPrice);
    } else if (name === "discount_percent") {
      const { property_price } = formData;

      const newDiscountedPrice = property_price
        ? parseInt(property_price, 10) -
          (parseInt(property_price, 10) * parseInt(value, 10)) / 100
        : "";
      setDiscountedPrice(newDiscountedPrice);
    }
  };

  const renderFields = () => {
    const {
      receipt_id,
      date_of_onboard,
      user,
      client_name,
      client_phn_no,
      client_adhar_no,
      project,
      PropertyDetail,
      commission,
    } = receiptData;

    const { project_type, project_name, status } = project;
    const { property_price, discount_percent } = PropertyDetail;
    const { type_of_commission, total_commission } = commission;

    const commonFields = (
      <>
        <div className="rec-data-field">
          <label htmlFor="invoiceNumber">Invoice Number</label>
          <input
            type="text"
            id="invoiceNumber"
            defaultValue={receipt_id}
            readOnly
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="dateOfOnboard">Date of Onboard</label>
          <input
            type="text"
            id="dateOfOnboard"
            defaultValue={date_of_onboard}
            readOnly
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="salesPersonID">Comission holder ID</label>
          <input
            type="text"
            id="salesPersonID"
            defaultValue={user.user_id}
            readOnly
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="salesPersonName">Comission holder Name</label>
          <input
            type="text"
            id="salesPersonName"
            defaultValue={user.user_name}
            readOnly
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="salesPersonName">Role</label>
          <input
            type="text"
            id="salesPersonName"
            defaultValue={user.role_type}
            readOnly
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            id="clientName"
            defaultValue={client_name}
            readOnly
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="clientPhone">Client Phone</label>
          <input
            type="text"
            id="clientPhone"
            defaultValue={client_phn_no}
            readOnly
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
          <input
            type="text"
            id="aadhaarNumber"
            defaultValue={client_adhar_no}
            readOnly
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="projectType">Project Type</label>
          <input
            type="text"
            id="projectType"
            defaultValue={project_type}
            readOnly
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            defaultValue={project_name}
            readOnly
          />
        </div>

        <div className="rec-data-field">
          <label htmlFor="status">Status</label>
          <input type="text" id="status" defaultValue={status} readOnly />
        </div>
        {status === "BLOCK" && (
          <>
            <div className="rec-data-field">
              <label htmlFor="blockedDays">Blocked Days</label>
              <input
                type="text"
                id="blockedDays"
                defaultValue={PropertyDetail.BlockedProject.no_of_days_blocked}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="remark">Remark</label>
              <input
                type="text"
                id="remark"
                defaultValue={PropertyDetail.BlockedProject.remark}
                readOnly
              />
            </div>
          </>
        )}
        {status === "TOKEN" ||
          (status === "ADVANCE" && (
            <>
              <div className="rec-data-field">
                <label htmlFor="modeOfPayment">T/A Mode of Payment</label>
                <input
                  type="text"
                  id="modeOfPayment"
                  defaultValue={
                    PropertyDetail.TokenOrAdvanceHistory.ta_mode_of_payment
                  }
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="amount">T/A Amount</label>
                <input
                  type="text"
                  id="amount"
                  defaultValue={PropertyDetail.TokenOrAdvanceHistory.ta_amount}
                  readOnly
                />
              </div>
            </>
          ))}
        <div className="rec-data-field">
          <label htmlFor="typeOfCommission">Type of Commission *</label>
          <input
            type="text"
            id="typeOfCommission"
            defaultValue={type_of_commission}
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="totalCommission">Total Commission *</label>
          <input
            type="text"
            id="totalCommission"
            name="total_commission"
            defaultValue={formData.total_commission || ""}
            placeholder="Enter total commission"
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="priceOfProperty">Price of Property *</label>
          <input
            type="text"
            id="priceOfProperty"
            name="property_price"
            defaultValue={formData.property_price || ""}
            placeholder="Enter property price"
            autoComplete="off"
            onChange={handleChange}
            required
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="discount">Discount in % *</label>
          <input
            type="text"
            id="discount"
            name="discount_percent"
            defaultValue={formData.discount_percent || ""}
            placeholder="Enter discount percent"
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="rec-data-field">
          <label htmlFor="priceAfterDiscount">Price After Discount</label>
          <input
            type="text"
            id="priceAfterDiscount"
            value={discountedPrice || ""}
            placeholder="Price after discount"
            readOnly
          />
        </div>
      </>
    );

    switch (project_type) {
      case "APARTMENT":
        return (
          <>
            {commonFields}
            <div className="rec-data-field">
              <label htmlFor="towerNumber">Tower Number</label>
              <input
                type="text"
                id="towerNumber"
                defaultValue={project.tower_number}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="flatNumber">Flat Number</label>
              <input
                type="text"
                id="flatNumber"
                defaultValue={project.flat_number}
                readOnly
              />
            </div>
          </>
        );
      case "VILLA":
        return (
          <>
            {commonFields}
            <div className="rec-data-field">
              <label htmlFor="villaNumber">Villa Number</label>
              <input
                type="text"
                id="villaNumber"
                defaultValue={project.villa_number}
                readOnly
              />
            </div>
          </>
        );
      case "PLOT":
        return (
          <>
            {commonFields}
            <div className="rec-data-field">
              <label htmlFor="plotNumber">Plot Number</label>
              <input
                type="text"
                id="plotNumber"
                defaultValue={project.plot_number}
                readOnly
              />
            </div>
          </>
        );
      case "FARM_LAND":
        return (
          <>
            {commonFields}
            <div className="rec-data-field">
              <label htmlFor="plotNumber">Plot Number</label>
              <input
                type="text"
                id="plotNumber"
                defaultValue={project.plot_number}
                readOnly
              />
            </div>
            <div className="rec-data-field">
              <label htmlFor="sqYards">Square Yards</label>
              <input
                type="text"
                id="sqYards"
                defaultValue={project.sq_yards}
                readOnly
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Loader />
      {receiptData && Object.keys(receiptData).length > 0 ? (
        <div className="rec-det">
          <div className="rec-sec">
            <div className="close">
              <img src={close} alt="Close card" onClick={onClose} />
            </div>
            <div className="rec-head">
              <h3>Receipt</h3>
            </div>
            <div className="rec-data">{renderFields()}</div>
            <div className="rec-actions">
              <div
                className="rec-delete"
                onClick={() => handleAction("REJECT")}
              >
                <button>Delete</button>
              </div>
              <div className="rec-sec-actions">
                <div className="cancel-btn">
                  <button onClick={onClose}>Cancel</button>
                </div>
                <div
                  className="validate-btn"
                  onClick={() => handleAction("APPROVE")}
                >
                  <button>Validate</button>
                </div>
                <div className="save pen-save">
                  <button>Save</button>
                </div>
                <div className="export-btn pen-export">
                  <button>Export</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : loader == false ? (
        "No data to show"
      ) : (
        ""
      )}
    </>
  );
};

export default PendingReceiptCard;
