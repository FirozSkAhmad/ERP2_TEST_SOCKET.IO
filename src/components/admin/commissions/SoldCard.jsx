import React from "react";
// import './pendingReceipts.css'
import logo from "../../../assets/logo.svg";
import close from "../../../assets/menuClose.svg";

const SoldCard = ({ salesPersonID, onClose, receiptID, projectType }) => {
  const [data, setData] = useState(null);
  const [enterCommission, setEnterCommission] = useState("");

  const URL = "https://erp-phase2-bck.onrender.com";
  const accessToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${URL}/commissions/getPraticularCommissionDetails?receipt_id=${receiptID}&projectType=${projectType.toLowerCase()}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData = await response.json();
        setData(responseData?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEnterCommissionHandler = (event) => {
    setEnterCommission(event.target.value);
  };

  const formData = {
    commission_id: Number(data?.commission?.commission_id),
    commission_amount: enterCommission,
  };

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${accessToken}`);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch(`${URL}/commissions/payCommission`, {
      method: "PUT",
      body: raw,
      headers: myHeaders,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Assuming response is JSON, adjust accordingly
      })
      .then((data) => {
        console.log("PUT request successful:", data);
        onClose();
        // Add any further handling based on the response
      })
      .catch((error) => {
        console.error("Error making PUT request:", error);
        onClose();
        // Handle errors appropriately
      });
  };

  // const cardData = soldCardDetails.find(
  //   (data) => data.salesPersonID === salesPersonID
  // );

  const commissionLeft =
    data?.commission?.total_commission -
    data?.commission?.commission_recived_till_now;

  // if (!cardData) return null;

  const renderFields = () => {
    // const projectType = cardData.projectType;
    if (data) {
      switch (projectType) {
        case "APARTMENT":
          return (
            <form onSubmit={handleSubmit}>
              <div className="rec-data-field">
                <label htmlFor="invoiceNumber">Invoice Number</label>
                <input
                  type="text"
                  id="invoiceNumber"
                  defaultValue={data.receipt_id}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="dateOfOnboard">Date of Onboard</label>
                <input
                  type="text"
                  id="dateOfOnboard"
                  defaultValue={data.date_of_onboard}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="salesPersonID">Sales Person ID</label>
                <input
                  type="text"
                  id="salesPersonID"
                  defaultValue={data?.user?.sales_person_id}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="salesPersonName">Sales Person Name</label>
                <input
                  type="text"
                  id="salesPersonName"
                  defaultValue={data?.user?.sales_person_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="clientName">Client Name</label>
                <input
                  type="text"
                  id="clientName"
                  defaultValue={data?.client_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="clientPhone">Client Phone</label>
                <input
                  type="text"
                  id="clientPhone"
                  defaultValue={data?.client_phn_no}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                <input
                  type="text"
                  id="aadhaarNumber"
                  defaultValue={data?.client_adhar_no}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="projectType">Project Type</label>
                <input
                  type="text"
                  id="projectType"
                  defaultValue={data?.project?.project_type}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="projectName">Project Name</label>
                <input
                  type="text"
                  id="projectName"
                  defaultValue={data?.project?.project_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="towerNumber">Tower Number</label>
                <input
                  type="text"
                  id="towerNumber"
                  defaultValue={data?.project?.tower_number}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="flatNumber">Flat Number</label>
                <input
                  type="text"
                  id="flatNumber"
                  defaultValue={data?.project?.flat_number}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="priceOfProperty">Price of Property</label>
                <input
                  type="text"
                  id="priceOfProperty"
                  defaultValue={data?.PropertyDetail?.property_price}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  id="status"
                  defaultValue={data?.project?.status}
                  readOnly
                />
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
                <input
                  type="text"
                  id="modeOfPayment"
                  defaultValue={
                    data?.PropertyDetail?.TokenOrAdvanceHistory
                      ?.ta_mode_of_payment
                  }
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="totalCommission">Total Commission</label>
                <input
                  type="text"
                  id="totalCommission"
                  defaultValue={data?.commission?.total_commission}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="commissionReceived">
                  Commission Received Till Now
                </label>
                <input
                  type="text"
                  id="commissionReceived"
                  defaultValue={data?.commission?.commission_recived_till_now}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="commission">Enter Commission *</label>
                <input
                  type="number"
                  onChange={handleEnterCommissionHandler}
                  id="commission"
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="commissionLeft">Commission Left</label>
                <input
                  type="text"
                  id="commissionLeft"
                  defaultValue={commissionLeft}
                  readOnly
                />
              </div>
            </form>
          );
        case "VILLA":
          return (
            <>
              <div className="rec-data-field">
                <label htmlFor="invoiceNumber">Invoice Number</label>
                <input
                  type="text"
                  id="invoiceNumber"
                  defaultValue={data.receipt_id}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="dateOfOnboard">Date of Onboard</label>
                <input
                  type="text"
                  id="dateOfOnboard"
                  defaultValue={data.date_of_onboard}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="salesPersonID">Sales Person ID</label>
                <input
                  type="text"
                  id="salesPersonID"
                  defaultValue={data?.user?.sales_person_id}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="salesPersonName">Sales Person Name</label>
                <input
                  type="text"
                  id="salesPersonName"
                  defaultValue={data?.user?.sales_person_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="clientName">Client Name</label>
                <input
                  type="text"
                  id="clientName"
                  defaultValue={data?.client_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="clientPhone">Client Phone</label>
                <input
                  type="text"
                  id="clientPhone"
                  defaultValue={data?.client_phn_no}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                <input
                  type="text"
                  id="aadhaarNumber"
                  defaultValue={data?.client_adhar_no}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="projectType">Project Type</label>
                <input
                  type="text"
                  id="projectType"
                  defaultValue={data?.project?.project_type}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="projectName">Project Name</label>
                <input
                  type="text"
                  id="projectName"
                  defaultValue={data?.project?.project_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="villaNumber">Villa Number</label>
                <input
                  type="text"
                  id="villaNumber"
                  defaultValue={data?.project?.villa_number}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="priceOfProperty">Price of Property</label>
                <input
                  type="text"
                  id="priceOfProperty"
                  defaultValue={data?.PropertyDetail?.property_price}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  id="status"
                  defaultValue={data?.project?.status}
                  readOnly
                />
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
                <input
                  type="text"
                  id="modeOfPayment"
                  defaultValue={
                    data?.PropertyDetail?.TokenOrAdvanceHistory
                      ?.ta_mode_of_payment
                  }
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="totalCommission">Total Commission</label>
                <input
                  type="text"
                  id="totalCommission"
                  defaultValue={data?.commission?.total_commission}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="commissionReceived">
                  Commission Received Till Now
                </label>
                <input
                  type="text"
                  id="commissionReceived"
                  defaultValue={data?.commission?.commission_recived_till_now}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="commission">Enter Commission *</label>
                <input
                  type="number"
                  onChange={handleEnterCommissionHandler}
                  id="commission"
                />
              </div>
              <div className="rec-data-field">
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
              <div className="rec-data-field">
                <label htmlFor="invoiceNumber">Invoice Number</label>
                <input
                  type="text"
                  id="invoiceNumber"
                  defaultValue={data.receipt_id}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="dateOfOnboard">Date of Onboard</label>
                <input
                  type="text"
                  id="dateOfOnboard"
                  defaultValue={data.date_of_onboard}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="salesPersonID">Sales Person ID</label>
                <input
                  type="text"
                  id="salesPersonID"
                  defaultValue={data?.user?.sales_person_id}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="salesPersonName">Sales Person Name</label>
                <input
                  type="text"
                  id="salesPersonName"
                  defaultValue={data?.user?.sales_person_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="clientName">Client Name</label>
                <input
                  type="text"
                  id="clientName"
                  defaultValue={data?.client_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="clientPhone">Client Phone</label>
                <input
                  type="text"
                  id="clientPhone"
                  defaultValue={data?.client_phn_no}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                <input
                  type="text"
                  id="aadhaarNumber"
                  defaultValue={data?.client_adhar_no}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="projectType">Project Type</label>
                <input
                  type="text"
                  id="projectType"
                  defaultValue={data?.project?.project_type}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="projectName">Project Name</label>
                <input
                  type="text"
                  id="projectName"
                  defaultValue={data?.project?.project_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="plotNumber">Plot Number</label>
                <input
                  type="text"
                  id="plotNumber"
                  defaultValue={data?.project?.plot_number}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="priceOfProperty">Price of Property</label>
                <input
                  type="text"
                  id="priceOfProperty"
                  defaultValue={data?.PropertyDetail?.property_price}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  id="status"
                  defaultValue={data?.project?.status}
                  readOnly
                />
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
                <input
                  type="text"
                  id="modeOfPayment"
                  defaultValue={
                    data?.PropertyDetail?.TokenOrAdvanceHistory
                      ?.ta_mode_of_payment
                  }
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="totalCommission">Total Commission</label>
                <input
                  type="text"
                  id="totalCommission"
                  defaultValue={data?.commission?.total_commission}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="commissionReceived">
                  Commission Received Till Now
                </label>
                <input
                  type="text"
                  id="commissionReceived"
                  defaultValue={data?.commission?.commission_recived_till_now}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="commission">Enter Commission *</label>
                <input
                  type="number"
                  onChange={handleEnterCommissionHandler}
                  id="commission"
                />
              </div>
              <div className="rec-data-field">
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
              <div className="rec-data-field">
                <label htmlFor="invoiceNumber">Invoice Number</label>
                <input
                  type="text"
                  id="invoiceNumber"
                  defaultValue={data.receipt_id}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="dateOfOnboard">Date of Onboard</label>
                <input
                  type="text"
                  id="dateOfOnboard"
                  defaultValue={data.date_of_onboard}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="salesPersonID">Sales Person ID</label>
                <input
                  type="text"
                  id="salesPersonID"
                  defaultValue={data?.user?.sales_person_id}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="salesPersonName">Sales Person Name</label>
                <input
                  type="text"
                  id="salesPersonName"
                  defaultValue={data?.user?.sales_person_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="clientName">Client Name</label>
                <input
                  type="text"
                  id="clientName"
                  defaultValue={data?.client_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="clientPhone">Client Phone</label>
                <input
                  type="text"
                  id="clientPhone"
                  defaultValue={data?.client_phn_no}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="aadhaarNumber">Aadhaar Card No</label>
                <input
                  type="text"
                  id="aadhaarNumber"
                  defaultValue={data?.client_adhar_no}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="projectType">Project Type</label>
                <input
                  type="text"
                  id="projectType"
                  defaultValue={data?.project?.project_type}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="projectName">Project Name</label>
                <input
                  type="text"
                  id="projectName"
                  defaultValue={data?.project?.project_name}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="plotNumber">Plot Number</label>
                <input
                  type="text"
                  id="plotNumber"
                  defaultValue={data?.project?.plot_number}
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="sqYards">Square Yards</label>
                <input
                  type="text"
                  id="sqYards"
                  // defaultValue={cardData.sqYards} needs to be set
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="priceOfProperty">Price of Property</label>
                <input
                  type="text"
                  id="priceOfProperty"
                  defaultValue={data?.PropertyDetail?.property_price}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  id="status"
                  defaultValue={data?.project?.status}
                  readOnly
                />
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
                <input
                  type="text"
                  id="modeOfPayment"
                  defaultValue={
                    data?.PropertyDetail?.TokenOrAdvanceHistory
                      ?.ta_mode_of_payment
                  }
                  readOnly
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="totalCommission">Total Commission</label>
                <input
                  type="text"
                  id="totalCommission"
                  defaultValue={data?.commission?.total_commission}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="commissionReceived">
                  Commission Received Till Now
                </label>
                <input
                  type="text"
                  id="commissionReceived"
                  defaultValue={data?.commission?.commission_recived_till_now}
                />
              </div>
              <div className="rec-data-field">
                <label htmlFor="commission">Enter Commission *</label>
                <input
                  type="number"
                  onChange={handleEnterCommissionHandler}
                  id="commission"
                />
              </div>
              <div className="rec-data-field">
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
        <div className="com-actions">
          <div className="com-close">
            <button onClick={onClose}>Close</button>
          </div>
          <div className="com-cancel">
            <button onClick={onClose}>Cancel</button>
          </div>
          <div className="com-submit">
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoldCard;
