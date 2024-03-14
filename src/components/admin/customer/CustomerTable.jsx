import React, { useEffect, useState } from "react";
import './/customer.css'
import customerData from '../../../data/customerData'
import CustomerCard from "./CustomerCard";

const CustomerTable = ({selectedButton}) => {
    const [customers, setCustomers] = useState([]);
    const [selectedProjectID, setSelectedProjectID] = useState(null);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        setCustomers(customerData.filter(data => data.status === selectedButton));
    }, [selectedButton]);

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
        setSelectedProjectID(projectID); // Update the selected projectID when a row is clicked
    }

    const handleCloseReceiptCard = () => {
        setSelectedProjectID(false)
    }

  return (
    <div className="cus-table-container">
            <table>
                <thead>
                    <tr>
                        {viewportWidth >= 1024 && <th>Sno</th>}
                        <th>Client Name</th>
                        <th>Client Phone</th>
                        <th>Project ID</th>
                        {viewportWidth >= 1024 && <th>Project Name</th>}
                        {viewportWidth >= 1024 && <th>Project Type</th>}
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                    <tr key={customer.projectID}  onClick={() => handleRowClick(customer.projectID)}>
                        {viewportWidth >= 1024 && <td>{customer.sno}</td>}
                        <td>{customer.clientName}</td>
                        <td>{customer.clientPhone}</td>
                        <td>{customer.projectID}</td>
                        {viewportWidth >= 1024 && <td>{customer.projectName}</td>}
                        {viewportWidth >= 1024 && <td>{customer.projectType}</td>}
                    </tr>
                    ))}
                </tbody>
            </table>
            {selectedProjectID && <CustomerCard projectID={selectedProjectID} customers={customers} onClose={handleCloseReceiptCard}/>}
        </div>
  );
};

export default CustomerTable;
