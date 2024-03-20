import React, { useEffect, useState, useContext } from "react";
import "../Receipts/pendingReceipts.css";
import DeletedReceiptsCard from "./DeletedReceiptsCard";
import sharedContext from "../../context/SharedContext";
import Loader from "../Loader";

const DeletedReceiptsTable = () => {
  const [selectedReceiptID, setSelectedReceiptID] = useState(null);
  const { setLoader, loader, deletedReceiptsData, setDeletedReceiptsData } =
    useContext(sharedContext);

  const makeRequest = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  };

  const fetchRejectedReceiptsList = async () => {
    setLoader(true);
    setDeletedReceiptsData([]);
    try {
      // Token should be retrieved securely, e.g., from an environment variable or secure storage
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDkyNzQ3NzAsImV4cCI6MTc0MDgzMjM3MCwiYXVkIjoiMTpTVVBFUiBBRE1JTiIsImlzcyI6InZyY2FwcGxpY2F0aW9uIn0.dC7WAsdD5-leh-c3v-Xjmi-abnFTfgx6d9uvYf60Jck";
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
        `https://erp-phase2-bck.onrender.com/receipt/getRejectedReceiptsList`,
        requestOptions
      );

      setDeletedReceiptsData(result.data);
    } catch (error) {
      console.error("Error fetching pending receipts list:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchRejectedReceiptsList();
  }, []);

  const handleRowClick = (projectID) => {
    setSelectedReceiptID(projectID); // Update the selected projectID when a row is clicked
  };

  const handleCloseReceiptCard = () => {
    setSelectedReceiptID(false);
  };

  return (
    <>
      <Loader />
      <div className="receipt-table">
        <div className="receipt-table-sec">
          <div className="receipt-table-head">
            <h3>Receipts</h3>
            <div className="deleted-receipts">
              <button>Deleted Receipts</button>
            </div>
          </div>
          {deletedReceiptsData.length !== 0 ? (
            <div className="receipts-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Project ID</th>
                    <th>Project Name</th>
                    <th>Project Type</th>
                  </tr>
                </thead>
                <tbody>
                  {deletedReceiptsData.map((data) => (
                    <tr
                      key={data.projectID}
                      onClick={() => handleRowClick(data.receipt_id)}
                    >
                      <td>{data.project.project_id}</td>
                      <td>{data.project.project_name}</td>
                      <td>{data.project.project_type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : loader == false ? (
            "No data to show"
          ) : (
            ""
          )}
        </div>
        {selectedReceiptID && (
          <DeletedReceiptsCard
            receiptID={selectedReceiptID}
            onClose={handleCloseReceiptCard}
          />
        )}
      </div>
    </>
  );
};

export default DeletedReceiptsTable;
