import React, { useEffect, useState } from "react";
import close from '../../../assets/menuClose.svg'
import cpCommission from "../../../data/cpCommission";
import cpCommissionDropData from "../../../data/cpCommissionDropData";
import cpCommissionCardData from "../../../data/cpCommissionCardData";
import CpCommissionCard from './CpCommissionCard';

const CpCommissionTable = () => {
    const [cpCommissionData, setCpCommissionData] = useState([]);
    const [dropData, setDropData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedChannelPartnerId, setSelectedChannelPartnerId] = useState(null);
    const [cpCommissionCardDetails, setCpCommissionCardDetails] = useState([]);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    useEffect(() => {
        setCpCommissionData(cpCommission);
    }, [])

    useEffect(() => {
        setDropData(cpCommissionDropData);
    }, [])

    useEffect(() => {
        setCpCommissionCardDetails(cpCommissionCardData)
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

    const handleRowClick = (channelPartnerID) => {
        setSelectedRow(channelPartnerID);
    };

    const handleCloseDropdown = () => {
        setSelectedRow(null);
    };

    const handleDropDownRowClick = (channelPartnerID) => {
        setSelectedChannelPartnerId(channelPartnerID);
        // console.log(channelPartnerID);
    };

    const handleCloseValidationCard = () => {
        setSelectedChannelPartnerId(false);
    };

    const renderDropdown = (channelPartnerID) => {
        if (selectedRow === channelPartnerID) {
            // console.log(selectedRow);
            const selectedProject = dropData.find(item => item.channelPartnerID === channelPartnerID);
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
                                        <tr onClick={() => handleDropDownRowClick(channelPartnerID)}>
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
                    <th>Channel Partner ID</th>
                    <th>Channel Partner Name</th>
                </tr>
            </thead>
            <tbody>
            {cpCommissionData.map((data, index) => (
                    <React.Fragment key={index}><tr key={index} onClick={() => handleRowClick(data.channelPartnerID)}>
                        <td>{data.sno}</td>
                        <td>{data.channelPartnerID}</td>
                        <td>{data.channelPartnerName}</td>
                    </tr>
                    {renderDropdown(data.channelPartnerID)}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
        {selectedChannelPartnerId && <CpCommissionCard channelPartnerID={selectedChannelPartnerId} cpCommissionCardDetails={cpCommissionCardDetails} onClose={handleCloseValidationCard} />}
    </div>
  );
};

export default CpCommissionTable;
