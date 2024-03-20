import React, { useEffect, useState, useContext } from "react";
import PaymentsCard from "./PaymentsCard";
import sharedContext from "../../../context/SharedContext";
import Loader from "../../Loader";

const PartPaymentsTable = () => {
  const [partPayments, setPartPayments] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const { setLoader, loader } = useContext(sharedContext);

  const makeRequest = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  };

  const fetchPaymentsList = async () => {
    setLoader(true);
    setPartPayments([]);
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
        `http://localhost:4200/payments/getPaymentsList?statusFilter=PART PAYMENT`,
        requestOptions
      );

      setPartPayments(result.data);
    } catch (error) {
      console.error("Error fetching pending receipts list:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPaymentsList();
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

  const handleRowClick = (receiptID) => {
    setSelectedRow(receiptID);
  };

  const handleClosePaymentsCard = () => {
    setSelectedRow(false);
  };

  return (
    <>
      <Loader />
      {partPayments.length !== 0 ? (
        <div className="com-table-container">
          <table>
            <thead>
              <tr>
                <th>Project ID</th>
                {viewportWidth >= 1024 && <th>Project Name</th>}
                {viewportWidth >= 1024 && <th>Project Type</th>}
                <th>Client Name</th>
                <th>Pending Payment</th>
              </tr>
            </thead>
            <tbody>
              {partPayments.map((data) => (
                <tr
                  key={data.receipt_id}
                  onClick={() => handleRowClick(data.receipt_id)}
                >
                  <td>{data.project.project_id}</td>
                  {viewportWidth >= 1024 && (
                    <td>{data.project.project_name}</td>
                  )}
                  {viewportWidth >= 1024 && (
                    <td>{data.project.project_type}</td>
                  )}
                  <td>{data.client_name}</td>
                  <td>{data.PropertyDetail.pending_payment}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedRow && (
            <PaymentsCard
              receiptID={selectedRow}
              fetchPaymentsList={fetchPaymentsList}
              onClose={handleClosePaymentsCard}
            />
          )}
        </div>
      ) : loader == false ? (
        <div className="com-table-container">No data to show</div>
      ) : (
        ""
      )}
    </>
  );
};

export default PartPaymentsTable;
