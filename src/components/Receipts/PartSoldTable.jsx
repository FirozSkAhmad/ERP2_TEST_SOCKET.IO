import React, { useContext, useEffect, useState } from "react";
import "./pendingReceipts.css";
import close from "../../assets/menuClose.svg";
import deleteIcon from "../../assets/delete.svg";
import exportIcon from "../../assets/export.svg";
import PartPayReceiptCard from "./PartPayReceiptCard";
import DeletedPartTable from "./DeletedPartTable";
import DeletedPartpaymentProjectsTable from "./DeletedPartpaymentProjectsTable";
import sharedContext from "../../context/SharedContext";
import Loader from "../Loader";
import toast from "react-hot-toast";

const PartSoldTable = () => {
  const { setLoader, loader } = useContext(sharedContext);
  const [partSoldData, setPartSoldData] = useState([]);
  const [payments, setPayments] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedReceiptId, setSelectedReceiptId] = useState(null);
  const [selectedReceiptData, setSelectedReceiptData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedPartOption, setSelectedPartOption] = useState("Deleted Part");
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const roleType = localStorage.getItem("role_type");

  // API to fetch part payment table data


    const fetchPartpayData = async () => {
      setLoader(true);
      setPartSoldData([]);
        try {
            const accessToken = localStorage.getItem("token");
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/receipt/getList?statusFilter=Part Payment`, {
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
        } finally {
          setLoader(false);
        }
    };
    
    useEffect(() => {
      fetchPartpayData();
    }, [])

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

    setLoader(true);
    setPayments([]);

    try {
      const accessToken = localStorage.getItem("token");
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/receipt/getParticularPartPaymentHistoryList?project_id=${projectID}`, {
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
  } finally {
    setLoader(false);
  }
  };

  const handleCloseDropdown = () => {
    setSelectedRow(null);
  };

  // API to get part payment card data

  const handleDropDownRowClick = async (partPayID) => {
    setLoader(true);
    setSelectedReceiptData();

    try {
      const accessToken = localStorage.getItem("token");
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/receipt/getParticularPartPaymentHistoryDetails?receipt_id=${selectedReceiptId}&pp_id=${partPayID}`, {
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
    } finally {
      setLoader(false);
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

  // API to delete

  const handleDelete = async (projectID, projDetID) => {
    setLoader(true);

    try {
      const accessToken = localStorage.getItem("token");
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/receipt/deleteParticularProjectPartPayments?project_id=${projectID}&pd_id=${projDetID}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network error. Network response was not ok");
      }
      console.log("Successfully deleted part payment data");
      toast.success("Successfully deleted!");
      // Re-render table data after deleting
      await fetchPartpayData();
    } catch (error) {
      console.error("Error deleting part payment data:", error);
      toast.error("Deletion failed!")
    } finally {
      setLoader(false);
    }
  }

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
    <Loader />
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
          {partSoldData.length !== 0 ? (
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
                    <React.Fragment key={partSold.receipt_id}>
                      <tr
                        key={partSold.receipt_id}
                        onClick={() => handleRowClick(partSold.project.project_id, partSold.receipt_id)}
                      >
                        <td>{partSold.project.project_id}</td>
                        <td>{partSold.project.project_name}</td>
                        <td>{partSold.client_name}</td>
                        {viewportWidth >= 1024 && <td>{partSold.project.status}</td>}
                        {viewportWidth >= 1024 && (
                          <td>
                            {roleType === "SUPER ADMIN" && <div className="receipt-actions">
                              <img src={deleteIcon} onClick={() => handleDelete(partSold.project.project_id, partSold.PropertyDetail.pd_id)} alt="" />
                              <img src={exportIcon} alt="" />
                            </div>}
                            {roleType === "MANAGER" && <img src={exportIcon} alt="" />}
                          </td>
                        )}
                      </tr>
                      {selectedRow === partSold.project.project_id && renderDropdown()}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          ) : loader == false ? ("No data to show in part payments") : (
          "" )}
        </div>
        {selectedOption === "Deleted Part Payment" && <DeletedPartTable />}
            {selectedOption === "Deleted Projects" && (
              <DeletedPartpaymentProjectsTable />
            )}
        {selectedReceiptData && (
          <PartPayReceiptCard
            cardData={selectedReceiptData}
            dropdownData={payments}
            reRenderPartpayments={handleRowClick}
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
