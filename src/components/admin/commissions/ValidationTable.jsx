import React, { useEffect, useState } from "react";
import close from '../../../assets/menuClose.svg'
import commissionData from "../../../data/commissionData";
import commissionDropData from "../../../data/commissionDropData";
import ValidationCard from "./ValidationCard";
import commissionValSoldCardData from "../../../data/commissionValSoldCardData";

const ValidationTable = () => {
    const [validation, setValidation] = useState([]);
    const [dropData, setDropData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedSalesPersonId, setSelectedSalesPersonId] = useState(null);
    const [validationCardDetails, setValidationCardDetails] = useState([]);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        setValidation(commissionData);
    }, [])

    useEffect(() => {
        setDropData(commissionDropData);
    }, [])

    useEffect(() => {
        setValidationCardDetails(commissionValSoldCardData)
    }, [])

    useEffect(() => {
        const handleResize = () => {
          setViewportWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleResize); // Listen for viewport width changes
      
        return () => {
          window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);

    const handleRowClick = (salesPersonID) => {
        setSelectedRow(salesPersonID);
    };

    const handleCloseDropdown = () => {
        setSelectedRow(null);
    };

    const handleDropDownRowClick = (salesPersonID) => {
        setSelectedSalesPersonId(salesPersonID);
        console.log(salesPersonID);
    };

    const handleCloseValidationCard = () => {
        setSelectedSalesPersonId(false);
    };

    const renderDropdown = (salesPersonID) => {
        if (selectedRow === salesPersonID) {
            // console.log(selectedRow);
            const selectedProject = dropData.find(item => item.salesPersonID === salesPersonID);
            return (
                <tr className="dropdown" style={{backgroundColor: '#D9D9D9'}}>
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
                                            <th>Client Name</th>
                                            <th>Project ID</th>
                                            {viewportWidth >= 1024 && <th>Project Type</th>}
                                            {viewportWidth >= 1024 && <th>Total Commission</th>}
                                            <th>Commission Received Till Now</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onClick={() => handleDropDownRowClick(salesPersonID)}>
                                            <td>{selectedProject.clientName}</td>
                                            <td>{selectedProject.projectID}</td>
                                            {viewportWidth >= 1024 && <td>{selectedProject.projectType}</td>}
                                            {viewportWidth >= 1024 && <td>{selectedProject.totalCommission}</td>}
                                            <td>{selectedProject.commissionReceived}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        }
        return null;
    }

  return (
    <div className="val-table-container">
        <table>
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Sales Person ID</th>
                    <th>Sales Person Name</th>
                </tr>
            </thead>
            <tbody>
                {validation.map((data, index) => (
                    <React.Fragment key={index}><tr key={index} onClick={() => handleRowClick(data.salesPersonID)}>
                        <td>{data.sno}</td>
                        <td>{data.salesPersonID}</td>
                        <td>{data.salesPersonName}</td>
                    </tr>
                    {renderDropdown(data.salesPersonID)}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
        {selectedSalesPersonId && <ValidationCard salesPersonID={selectedSalesPersonId} validationCardDetails={validationCardDetails} onClose={handleCloseValidationCard} />}
    </div>
  );
};

export default ValidationTable;
