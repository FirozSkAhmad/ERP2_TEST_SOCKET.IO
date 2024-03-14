import React, { useEffect, useState } from "react";
import partPaymentData from "../../../data/partPaymentsData";
import partPaymentsCardData from "../../../data/partPaymentsCardData";
import PaymentsCard from "./PaymentsCard";

const PartPaymentsTable = () => {
    const [partPayments, setPartPayments] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [partPaymentCardDetails, setPartPaymentCardDetails] = useState([]);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        setPartPaymentCardDetails(partPaymentsCardData)
    }, [])

    useEffect(() => {
        setPartPayments(partPaymentData);
    }, []);

    useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleResize); // Listen for viewport width changes
      
        return () => {
          window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);

    const handleRowClick = (projectID) => {
        setSelectedRow(projectID);
    };

    const handleClosePaymentsCard = () => {
        setSelectedRow(false);
    };

  return (
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
                            {partPayments.map(data => (
                                <tr key={data.projectID} onClick={() => handleRowClick(data.projectID)}>
                                    <td>{data.projectID}</td>
                                    {viewportWidth >= 1024 && <td>{data.projectName}</td>}
                                    {viewportWidth >= 1024 && <td>{data.projectType}</td>}
                                    <td>{data.clientName}</td>
                                    <td>{data.pendingPayment}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {selectedRow && <PaymentsCard projectID={selectedRow} partPaymentCardDetails={partPaymentCardDetails} onClose={handleClosePaymentsCard} />}
                </div>
  );
};

export default PartPaymentsTable;
