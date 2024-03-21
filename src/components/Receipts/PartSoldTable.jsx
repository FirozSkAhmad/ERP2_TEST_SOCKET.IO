import React, { useEffect, useState } from "react";
import "./pendingReceipts.css";
import partSoldDataDummy from "../../data/partSoldData";
import partSoldPayments from "../../data/partSoldPayments";
import partPayRecData from "../../data/partPayRecData";
import close from "../../assets/menuClose.svg";
import deleteIcon from "../../assets/delete.svg";
import exportIcon from "../../assets/export.svg";
import PartPayReceiptCard from "./PartPayReceiptCard";
// import DeletedPartPaymentsTable from "./DeletedPartPaymentsTable";
import DeletedPartTable from "./DeletedPartTable";
import DeletedPartpaymentProjectsTable from "./DeletedPartpaymentProjectsTable";

const PartSoldTable = () => {
  const [partSoldData, setPartSoldData] = useState([]);
  const [payments, setPayments] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedReceiptId, setSelectedReceiptId] = useState(null);
  const [partPaymentsData, setPartPaymentsData] = useState([]);
  const [selectedReceiptData, setSelectedReceiptData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedPartOption, setSelectedPartOption] = useState("Deleted Part");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const BaseURL = "https://erp-phase2-bck.onrender.com";

  // API to fetch part payment table data

  useEffect(() => {
    const fetchPartpayData = async () => {
        try {
            const accessToken = localStorage.getItem("token");
            const response = await fetch(`${BaseURL}/receipt/getList?statusFilter=Part Payment`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                },
            });
            if (!response.ok) {
                throw new Error('Network error. Failed to fetch part payment table data');
            }
            const result = await response.json();
            setPartSoldData(result.data);
            console.log(result.data);
        } catch (error) {
            console.error('Error fetching part payment table data:', error);
        }
    };  

    fetchPartpayData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize); // Listen for viewport width changes

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  // API to get part payment dropdown data

  const handleRowClick = async (projectID, receiptID) => {
    setSelectedRow(projectID);

    setSelectedReceiptId(receiptID);
    console.log(selectedReceiptId);

    try {
      const accessToken = localStorage.getItem("token");
      const response = await fetch(`${BaseURL}/receipt/getParticularPartPaymentHistoryList?project_id=${projectID}`, {
          headers: {
              "Authorization": `Bearer ${accessToken}`,
          },
      });
      if (!response.ok) {
          throw new Error('Network error. Failed to fetch part payment dropdown data');
      }
      const result = await response.json();
      setPayments(result.data);
      console.log(result.data);
  } catch (error) {
      console.error('Error fetching part payment dropdown data:', error);
  }
  };

  const handleCloseDropdown = () => {
    setSelectedRow(null);
  };

  // API to get part payment card data

  const handleDropDownRowClick = async (partPayID) => {
    try {
      const accessToken = localStorage.getItem("token");
      const response = await fetch(`${BaseURL}/receipt/getParticularPartPaymentHistoryDetails?receipt_id=${selectedReceiptId}&pp_id=${partPayID}`, {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Network error. Failed to fetch part payment card details.');
    }

    const result = await response.json();
      setSelectedReceiptData(result.data);
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching part payment card data:', error);
    }
  };

  const handleClosePartPayReceiptCard = () => {
    setSelectedReceiptData(false);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update selected option
    // console.log(selectedOption);
  };

  const handleSelectPartChange = (event) => {
    setSelectedPartOption(event.target.value); // Update selected option
    // console.log(selectedOption);
  };

  // useEffect(() => {
  //   console.log(selectedOption);
  // }, [selectedOption]);

  const renderDropdown = () => {
      return (
        <tr className="dropdown" style={{ backgroundColor: "#D9D9D9" }}>
          <td colSpan="5">
            <div className="drop-sec">
              <div className="drop-head">
                <h4>Part-Payment</h4>
                <img src={close} alt="" onClick={handleCloseDropdown} />
              </div>
              <div className="drop-table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((payment) => (
                      <tr
                        key={payment.pp_id}
                        onClick={() =>
                          handleDropDownRowClick(payment.pp_id)
                        }
                      >
                        <td>{payment.date_of_pp_payment || "No Payments yet"}</td>
                        <td>{payment.amount || "No Payments yet"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </td>
        </tr>
      );
  };

  return (
    <>
      <div className="receipt-table">
        <div className="receipt-table-sec">
          <div className="receipt-table-head">
            <h3>Receipts</h3>
            <div className="deleted-type">
              <select
                className="select-deleted-type"
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="">Deleted Part Payment</option>
                <option value="Deleted Part Payment">
                  Deleted Part Payments
                </option>
                <option value="Deleted Projects">Deleted Projects</option>
              </select>
            </div>
          </div>
          <div className="receipts-table-container">
            {selectedOption === "" && (
              <table>
                <thead>
                  <tr>
                    <th>Project ID</th>
                    <th>Project Name</th>
                    {<th>Client Name</th>}
                    {viewportWidth >= 1024 && <th>Status</th>}
                    {viewportWidth >= 1024 && <th>Actions</th>}
                  </tr>
                </thead>
                <tbody>
                  {partSoldData.map((partSold) => (
                    <React.Fragment key={partSold.project.project_id}>
                      <tr
                        key={partSold.project.project_id}
                        onClick={() => handleRowClick(partSold.project.project_id, partSold.receipt_id)}
                      >
                        <td>{partSold.project.project_id}</td>
                        <td>{partSold.project.project_name}</td>
                        <td>{partSold.client_name}</td>
                        {viewportWidth >= 1024 && <td>{partSold.project.status}</td>}
                        {viewportWidth >= 1024 && (
                          <td>
                            <div className="receipt-actions">
                              <img src={deleteIcon} alt="" />
                              <img src={exportIcon} alt="" />
                            </div>
                          </td>
                        )}
                      </tr>
                      {selectedRow === partSold.project.project_id && renderDropdown()}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            )}
            {selectedOption === "Deleted Part Payment" && <DeletedPartTable />}
            {selectedOption === "Deleted Projects" && (
              <DeletedPartpaymentProjectsTable />
            )}
          </div>
        </div>
        {selectedReceiptData && (
          <PartPayReceiptCard
            cardData={selectedReceiptData}
            onClose={handleClosePartPayReceiptCard}
          />
        )}
      </div>
      {viewportWidth >= 1024 && (
        <div className="res-del-rec">
          <select
            className="part-select"
            value={selectedPartOption}
            onChange={handleSelectPartChange}
          >
            <option value="Deleted Part">Deleted Part Payments</option>
            <option value="Deleted Proj">Deleted Projects</option>
          </select>
          {selectedPartOption === "Deleted Part" && <DeletedPartTable />}
          {selectedPartOption === "Deleted Proj" && (
            <DeletedPartpaymentProjectsTable />
          )}
        </div>
      )}
    </>
  );
};

export default PartSoldTable;
