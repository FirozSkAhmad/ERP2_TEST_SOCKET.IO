import React, { useEffect, useState } from "react";
import partPaymentData from "../../../data/partPaymentsData";
import partPaymentsCardData from "../../../data/partPaymentsCardData";
import BlockedCard from "./BlockedCard";

const BlockedTable = () => {
    const [blockedData, setBlockedData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [blockedCardDetails, setBlockedCardDetails] = useState([]);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        setBlockedCardDetails(partPaymentsCardData)
    }, [])

    useEffect(() => {
        setBlockedData(partPaymentData);
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

    const handleCloseBlockedCard = () => {
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
                                <th>Blocked Days</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blockedData.map(data => (
                                <tr key={data.projectID} onClick={() => handleRowClick(data.projectID)}>
                                    <td>{data.projectID}</td>
                                    {viewportWidth >= 1024 && <td>{data.projectName}</td>}
                                    {viewportWidth >= 1024 && <td>{data.projectType}</td>}
                                    <td>{data.clientName}</td>
                                    <td>{data.blockedDays}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {selectedRow && <BlockedCard projectID={selectedRow} blockedCardDetails={blockedCardDetails} onClose={handleCloseBlockedCard} />}
                </div>
  );
};

export default BlockedTable;
