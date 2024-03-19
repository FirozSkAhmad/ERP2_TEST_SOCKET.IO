import React, { useEffect, useState } from "react";
import "./cpHistory.css";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import close from "../../assets/menuClose.svg";
import exportIcon from "../../assets/export.svg";
import MobileModal from "../menu/MobileModal";
import cpHistoryData from "../../data/cpHistoryData";
import cpClientData from "../../data/cpClientData";
import CpHistoryCard from "./CpHistoryCard";
import cpHistoryCardData from "../../data/cpHistoryCardData";
import NavBar from "../NavBar";
import WebMenu from "../menu/WebMenu";

const CpHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [clientData, setClientData] = useState([]);
  const [selectedChannelPartnerId, setSelectedChannelPartnerId] = useState(null);
  const [cpHistoryCardDetails, setCpHistoryCardDetails] = useState([]);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    setCpHistoryCardDetails(cpHistoryCardData);
  }, []);

  const toggleModal = () => {
    setIsOpen(!isOpen); // Toggle modal visibility
  };

  const BaseURL = "https://erp-phase2-bck.onrender.com";

  // API to fetch Channel Partner data

  useEffect(() => {
    const fetchHistory = async () => {
        try {
            const accessToken = localStorage.getItem("token");
            const response = await fetch(`${BaseURL}/history/getCommissionHolderslist?role_type=CHANNEL PARTNER`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                },
            });
            if (!response.ok) {
                throw new Error('Network error. Failed to fetch channel partner history data');
            }
            const result = await response.json();
            setHistory(result.data);
            console.log(result.data);
        } catch (error) {
            console.error('Error fetching channel partner history data:', error);
        }
    };  

    fetchHistory();
  }, []);

  // API to fetch Channel Partner history data and Row click

  const handleRowClick = async (channelPartnerID) => {
    setSelectedRow(channelPartnerID); // Update selected channelPartner ID

    try {
        const accessToken = localStorage.getItem("token");
        const response = await fetch(`${BaseURL}/history/getPraticularCommissionHolderHistory?commission_holder_id=${channelPartnerID}`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });
        if (!response.ok) {
            throw new Error('Network error. Failed to fetch channel partner history dropdown data');
        }
        const result = await response.json();
          setClientData(result.data);
          console.log(result.data);
        } catch (error) {
          console.error('Error fetching channel partner history dropdown data:', error);
    }
  };

  const handleCloseDropdown = () => {
    setSelectedRow(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize); // Listen for viewport width changes

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  // API to fetch Channel Partner history card data and Dropdown click

  const handleDropDownRowClick = async (receiptId, projectType) => {
    try {
      const accessToken = localStorage.getItem("token");
      const response = await fetch(`${BaseURL}/history/getPraticularHistoryDetails?receipt_id=${receiptId}&projectType=${projectType}`, {
          headers: {
            "Authorization": `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error('Network error. Failed to fetch SP history card details.');
    }

    const result = await response.json();
      setSelectedChannelPartnerId(result.Details);
      console.log(result.Details);
    } catch (error) {
      console.error('Error fetching SP history card data:', error);
    }
  };


  // const handleDropDownRowClick = (channelPartnerID) => {
  //   setSelectedChannelPartnerId(channelPartnerID);
  // };

  const handleCloseSpHistoryCard = () => {
    setSelectedChannelPartnerId(false);
  };

  const renderDropdown = () => {
    return (
      <tr className="dropdown" style={{ backgroundColor: "#D9D9D9" }}>
        <td colSpan="5">
          <div className="drop-sec">
            <div className="drop-head">
              <h4>Part-Payment</h4>
              <img src={close} alt="Close card" onClick={handleCloseDropdown} />
            </div>
            <div className="drop-table-container">
              <table>
                <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Project ID</th>
                    {viewportWidth >= 1024 && <th>Project Type</th>}
                    {viewportWidth >= 1024 && <th>Total Commission</th>}
                    <th>Commission Receive Till Now</th>
                  </tr>
                </thead>
                <tbody>
                  {clientData.map((client) => (
                    <tr
                      key={client.receipt_id}
                      onClick={() =>
                        handleDropDownRowClick(client.receipt_id, client.project.project_type)
                      }
                    >
                      <td>{client.client_name}</td>
                      <td>{client.project.project_id}</td>
                      {viewportWidth >= 1024 && <td>{client.project.project_type}</td>}
                      {viewportWidth >= 1024 && (
                        <td>{client.commission.total_commission}</td>
                      )}
                      <td>{client.commission.commission_recived_till_now}</td>
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
    <div>
      <style>
        {`
          @media screen and (min-width: 1024px) {
            body {
              background: #f0f1f3;
            }
          }
        `}
      </style>
      <div className="mob-nav">
        <a href="">
          <img src={logo} alt="" />
        </a>
        <img src={menu} alt="" onClick={toggleModal} />
      </div>
      <div className="cp-export-sec">
        <div className="cp-export">
          <img src={exportIcon} alt="" />
          <p>Export</p>
        </div>
      </div>
      <div className="cp-table-container">
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Channel Partner ID</th>
              <th>Channel Partner Name</th>
            </tr>
          </thead>
          <tbody>
            {history.map((his, index) => (
              <React.Fragment key={his.commission_holder_id}>
                <tr
                  key={his.commission_holder_id}
                  onClick={() => handleRowClick(his.commission_holder_id)}
                >
                  <td>{index + 1}</td>
                  <td>{his.commission_holder_id}</td>
                  <td className="row-down">
                    {his.commission_holder_name}
                    <img src={exportIcon} alt="Export" />
                  </td>
                </tr>
                {selectedRow === his.commission_holder_id && renderDropdown()}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <NavBar />
      <WebMenu />
      <MobileModal isOpen={isOpen} onClose={toggleModal} />
      {/* {selectedChannelPartnerId && (
        <CpHistoryCard
          channelPartnerID={selectedChannelPartnerId}
          cpHistoryCardDetails={cpHistoryCardDetails}
          onClose={handleCloseSpHistoryCard}
        />
      )} */}
    </div>
  );
};

export default CpHistory;
